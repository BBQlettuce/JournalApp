JournalApp.Views.PostIndex = Backbone.View.extend({
  initialize: function() {
    this.collection = new JournalApp.Collections.Posts();
    this.collection.fetch({
      reset: true
    });

    this.listenTo(this.collection, "remove", this.render);
    this.listenTo(this.collection, "reset", this.render);
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
