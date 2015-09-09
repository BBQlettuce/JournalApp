JournalApp.Models.Post = Backbone.Model.extend({
  urlRoot: "/posts/",

  toJSON: function() {
    return { post: this.attributes }
  }
})
