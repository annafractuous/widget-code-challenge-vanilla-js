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

userWidget.display(userDetails["2"]);
sidebarNav.display(userDetails["1"]);

$('.menu-item').on("click", function(event){
  sidebarNav.addActiveClass(event);
});

$('#like-button').on("click", function(event){
  userWidget.toggleLiked(event);
});
