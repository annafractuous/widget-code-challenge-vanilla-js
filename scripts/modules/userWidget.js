var userWidget = {
  display: function(user) {
    var template = $('#user-widget').html();
    var widget = Handlebars.compile(template);
    $('body').append(widget(user));
  },

  toggleLiked: function(event) {
    event.preventDefault();
    var button = event.currentTarget;
    if (button.className === "liked") {
      button.className = "";
    }
    else {
      button.className = "liked";
    }
  }
}
