// USER WIDGET
var userInfo = userDetails["1"];

// html to render from user info
var name      =   (userInfo["firstName"] + '<br>' + userInfo["lastName"]).toUpperCase();
var avatar    =   '<img src=' + userInfo["image"] + ' alt="avatar-image" class="img-circle img-padded"/>';
var followers =   userInfo["followers"] + ' followers';

// dynamically set content
document.getElementById('sidebar-name').innerHTML = name;
document.getElementById('sidebar-profile-img').innerHTML = avatar;
document.getElementById('sidebar-followers').innerHTML = followers;

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


// SIDEBAR WIDGET
var userInfo = userDetails["2"];

// html to render from user info
var name      =   userInfo["firstName"] + ' ' + userInfo["lastName"];
var avatar    =   '<img src=' + userInfo["image"] + ' alt="avatar-image" class="img-circle img-padded"/>';
var cover     =   '<img src=' + userInfo["coverImage"] + ' alt="user-cover-image"/>';
var tagline   =   userInfo["tagline"];
var views     =   userInfo["profileViews"];
var comments  =   userInfo["comments"];
var likes     =   userInfo["likes"];

// dynamically set content
document.getElementById("user-widget-cover-img").innerHTML = cover;
document.getElementById('user-widget-profile-img').innerHTML = avatar;
document.getElementById('user-widget-name').innerHTML = name;
document.getElementById('user-widget-tagline').innerHTML = tagline;
document.getElementById('user-widget-views').innerHTML += views;
document.getElementById('user-widget-comments').innerHTML += comments;
document.getElementById('user-widget-likes').innerHTML += likes;

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
