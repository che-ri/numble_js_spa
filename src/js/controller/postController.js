import api from "../../api";

export default {
  getPost: async (postId) => {
    try {
      const response = await api.getPost(postId);

      if (response.data.success === false) throw Error();

      return response.data.data;
    } catch (e) {}
  },
  getImage: async () => {
    try {
      const response = await api.getImage();
      if (response.status != 200) throw Error();
      return response.data;
    } catch (e) {}
  },
  addPost: async ({ title, content, image }) => {
    const response = await api.addPost({ title, content, image });
    if (response.status != 201) throw Error();
    return response.data;
  },
  updatePost: async (postId, { title, content, image }) => {
    const response = await api.updatePost(postId, { title, content, image });
    if (response.status != 200) throw Error();
    return response.data;
  },
  deletePost: async (postId) => {
    try {
      const response = await api.deletePost(postId);

      if (response.data.success === false) throw Error();

      return response.data.data;
    } catch (e) {}
  },
};
