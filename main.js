var widgetTemplate = $('#user-widget').html();
var userWidget = Handlebars.compile(widgetTemplate);

var sidebarTemplate = $('#sidebar-nav').html();
var sidebarNav = Handlebars.compile(sidebarTemplate);

var users = userDetails;

Handlebars.registerHelper('roundAvatar', function(url) {
  var imgUrl = Handlebars.escapeExpression(url);
  return new Handlebars.SafeString(
    '<img src=' + imgUrl + ' alt="avatar-image" class="img-circle img-padded"/>'
  );
});

Handlebars.registerHelper('coverImage', function(url) {
  var imgUrl = Handlebars.escapeExpression(url);
  return new Handlebars.SafeString(
    '<img src=' + imgUrl + ' alt="user-cover-image"/>'
  );
});

$('body').append(sidebarNav(users["1"]));
$('body').append(userWidget(users["2"]));

$('.menu-item').on("click", function(event){
  addActiveClass(event);
});

$('#like-button').on("click", function(event){
  toggleLiked(event);
});

// toggle red heart for liking/unliking user
function toggleLiked(event) {
  event.preventDefault();
  var button = event.currentTarget;
  if (button.className === "liked") {
    button.className = "";
  }
  else {
    button.className = "liked";
  }
}

// set currently selected menu item
function addActiveClass(event) {
  event.preventDefault();
  var currentlySelected = document.getElementsByClassName('current-item')[0];
  var justPressed = event.currentTarget.getElementsByTagName('li')[0];
  if (currentlySelected !== justPressed) {
    currentlySelected.className = currentlySelected.className.replace("current-item", "");
    justPressed.className += " current-item";
  }
}
