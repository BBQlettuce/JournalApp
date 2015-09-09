JournalApp.Views.PostShow = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, "sync", this.render)
  },

  events: {
    "click .edit-post": "editPost"
  },

  template: JST['postShow'],

  render: function() {
    this.$el.html(this.template({ post: this.model }));

    return this;
  },

  editPost: function() {
    Backbone.history.navigate("posts/" + this.model.id + "/edit", { trigger: true });
  }
});
