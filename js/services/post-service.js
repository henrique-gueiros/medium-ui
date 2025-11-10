app.factory('postService', function($http) {
  return {
    getPosts: function() {
      return $http.get(baseUrl + "posts/post_list?page=1");
    },
    getPost: function(postId) {
      return $http.get(baseUrl + "posts/" + postId);
    },
    createPost: function(postData){
      return $http.post(baseUrl + "posts/create", postData);
    },
    deletePost: function(postId) {
      return $http.delete(baseUrl + "posts/delete_post/" + postId);
    },
    updatePost: function(postId, postData) {
      return $http.put(baseUrl + "posts/update/" + postId, postData);
    },
    postLike: function(postId){
      return $http.post(baseUrl + "posts/like/" + postId); 
    },
    postDislike: function(postId){
      return $http.post(baseUrl + "posts/dislike/" + postId); 
    }
  };
});
