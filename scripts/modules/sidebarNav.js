var sidebarNav = {
  display: function(user) {
    var template = $('#sidebar-nav').html();
    var widget = Handlebars.compile(template);
    $('body').append(widget(user));
  },

  addActiveClass: function(event) {
    event.preventDefault();
    var currentlySelected = document.getElementsByClassName('current-item')[0];
    var justPressed = event.currentTarget.getElementsByTagName('li')[0];
    if (currentlySelected !== justPressed) {
      currentlySelected.className = currentlySelected.className.replace("current-item", "");
      justPressed.className += " current-item";
    }
  }
}
