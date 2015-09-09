JournalApp.Views.PostForm = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  events: {
    "submit form": "editPost"
  },

  template: JST['postForm'],

  render: function() {
    this.$el.html(this.template({post: this.model}));
    return this;
  },

  editPost: function(e) {
    e.preventDefault();

    var $form = $(e.currentTarget);
    var formInputs = $form.serializeJSON();

    this.model.save(formInputs.post, {
      success: function() {
        Backbone.history.navigate("posts/" + this.model.id, {trigger: true})
      }.bind(this)
      // failure: function() {
      //
      // }
    });

  }

})
