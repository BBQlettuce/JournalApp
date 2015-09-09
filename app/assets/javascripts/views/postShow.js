JournalApp.Views.PostShow = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, "sync", this.render)
  },

  events: {
    "click .edit-post": "editPost",
    "click .delete-post": "deletePost",
    "dblclick .title": "editTitle",
    "dblclick .body": "editBody",
    "blur .title": "updateTitle",
    "blur .body": "updateBody"
  },

  template: JST['postShow'],

  render: function() {
    this.$el.html(this.template({ post: this.model }));

    return this;
  },

  editPost: function() {
    Backbone.history.navigate("posts/" + this.model.id + "/edit", { trigger: true });
  },

  deletePost: function() {
    this.model.destroy();
    Backbone.history.navigate("", {trigger: true})
  },

  editTitle: function(e) {
    e.preventDefault();
    var $title = $(e.currentTarget);
    var $input = $("<input>");
    $input.attr("type", "text").attr("name", "post[title]").val($title.html());
    $title.html($input);
  },

  editBody: function(e) {
    e.preventDefault();
    var $body = $(e.currentTarget);
    var $textarea = $("<textarea>");
    $textarea.attr("name", "post[body]").val($body.html());
    $body.html($textarea);
  },

  updateTitle: function(e) {
    debugger 
    e.preventDefault();
    var newTitle = $(e.target).val();

    this.model.save({ title: newTitle });
  },

  updateBody: function(e) {
    debugger
    e.preventDefault();
    var newBody = $(e.target).val();

    this.model.save({ body: newBody });
  }
});
