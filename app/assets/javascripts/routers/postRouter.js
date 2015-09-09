JournalApp.Routers.PostRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.collection = new JournalApp.Collections.Posts();
    this.collection.fetch();
  },

  routes: {
    "": "postIndex",
    "posts/new": "newForm", 
    "posts/:id": "postShow",
    "posts/:id/edit": "editForm"
  },

  postIndex: function() {
    var view = new JournalApp.Views.PostIndex();
    view.refreshPosts();
    this._swapView(view);
  },

  postShow: function(id) {
    debugger
    var post = this.collection.getOrFetch(id);
    var view = new JournalApp.Views.PostShow({model: post});
    this._swapView(view);
  },

  editForm: function(id) {
    var post = this.collection.getOrFetch(id);
    var view = new JournalApp.Views.PostForm({model: post});
    this._swapView(view)
  },

  newForm: function() {
    var blankPost = new JournalApp.Models.Post();
    var view = new JournalApp.Views.PostForm({model: blankPost, collection: this.collection});
    this._swapView(view);
  },

  _swapView: function(newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    this.$rootEl.html(newView.$el);
    newView.render();
  }
});
