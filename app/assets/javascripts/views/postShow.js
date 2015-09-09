JournalApp.Views.PostShow = Backbone.View.extend({
  template: JST['postShow'],

  render: function() {
    this.$el.html(this.template({ post: this.model }));

    return this; 
  }
});
