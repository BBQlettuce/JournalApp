JournalApp.Collections.Posts = Backbone.Collection.extend({
  url: "/posts/",
  model: JournalApp.Models.Post,

  getOrFetch: function(id) {
    var collection = this;
    var post = collection.get(id);

    if (post) {
      post.fetch();
    } else {
      post = new collection.model({id: id});
      collection.add(post);
      post.fetch({
        error: function() {
          collection.remove(post);
        }
      });
    }

    return post;
  }

})
