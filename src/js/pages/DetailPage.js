import api from "../../api/index.js";
import Header from "../components/Header.js";
import commentController from "../controller/commentController.js";
import postController from "../controller/postController.js";
import Router from "../router.js";
import $, { $$ } from "../selector.js";

export default class DetailPage {
  constructor(dom) {
    this.dom = dom;
    this.postId = Router.instance.current.params?.id;
    this.post = {};
    this.comments = [];
    this.onInit();
    this.onReady();
  }

  onInit() {
    //dom 업데이트 전
    console.log("init");
    if (this.postId === undefined) {
      //params에 postId가 없는 경우 홈으로 이동
      alert("잘못된 접근입니다.");
      Router.instance.replace("/");
    }
    this.dom.innerHTML = this.template();
    new Header($("#header"));
  }

  onReady = async () => {
    //dom이 업데이트된 이후
    console.log("ready");

    try {
      await this.getPost(this.postId);
      this.render();

      //게시글 수정 버튼
      $("#post-edit-btn").addEventListener("click", () => {
        Router.instance.push(`/edit/${this.postId}`);
      });

      //게시글 삭제 버튼
      $("#post-delete-btn").addEventListener("click", () => {
        this.deletePost(this.postId);
      });

      //댓글 삭제 버튼
      $$(".comment-delete-btn").forEach(($deleteBtn) =>
        $deleteBtn.addEventListener("click", ($btn) => {
          const commentId = $btn.target.dataset.commentId;
          this.deleteComment(commentId);
        })
      );

      //댓글 form
      $("#comment-write-container").addEventListener("submit", (e) => {
        e.preventDefault();
        const content = $(".comment-write-input").value;
        this.writeComment(this.postId, content);
      });
    } catch (e) {}
  };

  onWillUpdate() {
    //리렌더링 이전
    console.log("willUpdate");
  }

  onDidUpdate() {
    //리렌더링 된 이후 : 이벤트리스너 재설정
    console.log("didUpdate");

    //댓글 삭제 버튼
    $$(".comment-delete-btn").forEach(($deleteBtn) =>
      $deleteBtn.addEventListener("click", ($btn) => {
        const commentId = $btn.target.dataset.commentId;
        this.deleteComment(commentId);
      })
    );

    //댓글 form
    $("#comment-write-container").addEventListener("submit", (e) => {
      e.preventDefault();
      const content = $(".comment-write-input").value;
      this.writeComment(this.postId, content);
    });
  }

  deletePost = async (postId) => {
    ///게시글 삭제 후 홈으로 이동
    await postController.deletePost(postId);
    Router.instance.replace("/");
  };

  writeComment = async (postId, content) => {
    ///댓글 작성 후 데이터 갱신
    await commentController.writeComment(postId, content);
    await this.getPost(this.postId);
    this.render();
  };

  deleteComment = async (postId, content) => {
    ///댓글 삭제 후 데이터 갱신
    await commentController.deleteComment(postId, content);
    await this.getPost(this.postId);
    this.render();
  };

  getPost = async (postId) => {
    ///게시글 불러온 후 데이터 갱신
    const data = await postController.getPost(postId);
    if (data == undefined) return;
    this.post = data.post;
    this.comments = data.comments;
  };

  commentBox(comment) {
    console.log(comment);
    return `<div class="comment-box"><p>${
      comment?.content ?? ""
    }</p><button class="btn sub-btn comment-control comment-delete-btn" data-comment-id="${
      comment.commentId
    }" data-id="${comment.postId}">삭제</button></div>`;
  }

  template() {
    return `<div><div id="header"></div><img class="post-detail-img" src="${
      this.post?.image ?? ""
    }"/> <h1 class="post-detail-title">${this.post?.title ?? ""}</h1> <span class="post-detail-date">${
      this.post?.createdAt ? new Date(this.post.createdAt).toDateString() : ""
    }</span> <p class="post-detail-content">${
      this.post?.content ?? ""
    }</p><div class="post-detail-controls"> <button id="post-edit-btn" class="btn sub-btn post-detail-control">수정</button><button id="post-delete-btn" class="btn sub-btn post-detail-control">삭제</button></div> <div class="comment-container"> ${this.comments.reduce(
      (acc, cur) => (acc += this.commentBox(cur)),
      ""
    )} </div> <form id="comment-write-container" class="comment-write-container"> <input class="comment-write-input"/> <button class="btn sub-btn comment-write-btn">작성</button></form> <div>`;
  }

  render() {
    this.onWillUpdate();
    this.dom.innerHTML = this.template();
    new Header($("#header"));
    this.onDidUpdate();
  }
}
