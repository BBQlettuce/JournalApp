JournalApp.Views.PostIndexItem = Backbone.View.extend({
  tagName: 'li',

  template: JST['postIndexItem'],

  render: function() {
    this.$el.html(this.template({post: this.model}));
    return this;
  }
});
