JournalApp.Views.PostIndex = Backbone.View.extend({
  initialize: function() {
    this.collection = new JournalApp.Collections.Posts();
    this.collection.fetch({
      success: this.render.bind(this)
    })
  },

  template: JST['postIndex'],

  render: function() {
    this.$el.html(this.template());

    this.collection.each(function(post) {
      var postItem = new JournalApp.Views.PostIndexItem({model: post});
      this.$el.find('ul').append(postItem.render().$el);
    }.bind(this))
  }
});
