JournalApp.Views.PostIndexItem = Backbone.View.extend({
  tagName: 'li',

  template: JST['postIndexItem'],

  events: {
    "click .delete-post": "deletePost",
    "click .edit-post": "editPost"
  },

  render: function() {
    this.$el.html(this.template({post: this.model}));
    return this;
  },

  deletePost: function() {
    this.model.destroy();
  },

  editPost: function() {
    Backbone.history.navigate("posts/" + this.model.id + "/edit", {trigger: true});
  }
});
