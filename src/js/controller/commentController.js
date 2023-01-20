import api from "../../api";

export default {
  writeComment: async (postId, content) => {
    try {
      const response = await api.writeComment(postId, { content });
      if (response.data.code !== 201) throw Error();
      return response.data.data;
    } catch (e) {}
  },
  deleteComment: async (commentId) => {
    try {
      const response = await api.deleteComment(commentId);
      if (response.data.code !== 200) throw Error();
      return response.data.data;
    } catch (e) {}
  },
};
