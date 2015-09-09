JournalApp.Routers.PostRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.collection = new JournalApp.Collections.Posts();
    this.collection.fetch();
  },

  routes: {
    "": "root",
    "posts": "postIndex",
    "posts/new": "newForm",
    "posts/:id": "postShow",
    "posts/:id/edit": "editForm"
  },

  root: function() {
    this._currentView && this._currentView.remove();
    this._currentView = null;
  },

  postIndex: function() {
    var view = new JournalApp.Views.PostIndex({ collection: this.collection });
    view.refreshPosts();
    this.$rootEl.find(".sidebar").html(view.render().$el);
  },

  postShow: function(id) {
    var post = this.collection.getOrFetch(id);
    var view = new JournalApp.Views.PostShow({model: post});
    this._swapView(view);
  },

  editForm: function(id) {
    var post = this.collection.getOrFetch(id);
    var view = new JournalApp.Views.PostForm({model: post, collection: this.collection});
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
    this.$rootEl.find(".content").html(newView.$el);
    newView.render();
  }
});
