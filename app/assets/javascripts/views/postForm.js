JournalApp.Views.PostForm = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  events: {
    "submit form": "editOrCreatePost"
  },

  template: JST['postForm'],

  render: function() {
    this.$el.html(this.template({post: this.model}));
    return this;
  },

  editOrCreatePost: function(e) {
    e.preventDefault();

    var $form = $(e.currentTarget);
    var formInputs = $form.serializeJSON();

    this.model.save(formInputs.post, {
      success: function() {
        this.collection.add(this.model);
        Backbone.history.navigate("posts/" + this.model.id, {trigger: true});
      }.bind(this),

      error: function(model, response) {
        this.$el.append(response.responseText);
      }.bind(this),

      wait: true
    });

  }

})
