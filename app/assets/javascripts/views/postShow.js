JournalApp.Views.PostShow = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, "sync", this.render)
  },

  events: {
    "click .edit-post": "editPost",
    "click .delete-post": "deletePost",
    "dblclick .title": "editTitle",
    "dblclick .body": "editBody",
    "blur .title": "updateAttribute",
    "blur .body": "updateAttribute"
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
    $input.attr("type", "text").attr("name", "title").val($title.html());
    $title.html($input);
  },

  editBody: function(e) {
    e.preventDefault();
    var $body = $(e.currentTarget);
    var $textarea = $("<textarea>");
    $textarea.attr("name", "body").val($body.html());
    $body.html($textarea);
  },

  updateAttribute: function(e) {
    e.preventDefault();
    var attrName = $(e.target).attr('name');
    var newAttr = $(e.target).val();
    if (attrName === "title") {
      this.model.save({ title: newAttr });
    } else {
      this.model.save({ body: newAttr });
    };
  }

});
