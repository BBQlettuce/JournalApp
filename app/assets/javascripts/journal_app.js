window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new JournalApp.Routers.PostRouter({$rootEl: $(".main")});
    Backbone.history.start();
  }
};

$(document).ready(function(){
  JournalApp.initialize();
});
