import instance from "./axios";

export default {
  getPosts: () => instance.get("/posts"),
  getPost: (postId) => instance.get(`/post/${postId}`),
  updatePost: (postId, data) => instance.patch(`/post/${postId}`, data),
  deletePost: (postId) => instance.delete(`/post/${postId}`),
  writeComment: (postId, data) => instance.post(`/comment/${postId}`, data),
  deleteComment: (commentId) => instance.delete(`/comment/${commentId}`),
};
