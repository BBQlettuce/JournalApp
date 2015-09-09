JournalApp.Views.PostIndexItem = Backbone.View.extend({
  tagName: 'li',

  template: JST['postIndexItem'],

  events: {
    "click .delete-post": "deletePost"
  },

  render: function() {
    this.$el.html(this.template({post: this.model}));
    return this;
  },

  deletePost: function() {
    this.model.destroy();
  }
});
