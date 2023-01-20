import api from "../../api";

export default {
  getPost: async (postId) => {
    try {
      const response = await api.getPost(postId);

      if (response.data.success === false) throw Error();

      return response.data.data;
    } catch (e) {}
  },
};
