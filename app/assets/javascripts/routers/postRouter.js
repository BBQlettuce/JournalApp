JournalApp.Routers.PostRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "postIndex",
    "posts/:id": "post"
  },

  postIndex: function() {
    var view = new JournalApp.Views.PostIndex();
    this._postIndex = view;
    this._swapView(view);
    this.$rootEl.html(view.$el);
  },

  post: function(id) {
    var post = this._postIndex.collection.getOrFetch(id);
    var view = new JournalApp.Views.PostShow({model: post});
    this._swapView(view);
    this.$rootEl.html(view.$el);
  },

  _swapView: function(newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    this.$rootEl.html(newView.$el);
    newView.render();
  }
});
