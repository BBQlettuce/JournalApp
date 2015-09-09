JournalApp.Views.PostIndex = Backbone.View.extend({
  initialize: function() {
    this.collection = new JournalApp.Collections.Posts();
    this.listenTo(this.collection, "remove", this.render);
    this.listenTo(this.collection, "reset", this.render);
  },

  events: {
    "click .new-post-button": "newPost"
  },

  template: JST['postIndex'],

  refreshPosts: function(callback) {
    this.collection.fetch({
      reset: true
    })
  },

  render: function() {
    this.$el.html(this.template());

    this.collection.each(function(post) {
      var postItem = new JournalApp.Views.PostIndexItem({model: post});
      this.$el.find('ul').append(postItem.render().$el);
    }.bind(this))
  },

  newPost: function() {
    Backbone.history.navigate("posts/new", { trigger: true });
  }
});
