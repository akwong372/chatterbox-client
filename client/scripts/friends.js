var Friends = {
  toggleStatus: function () {
    if ($(this).hasClass('friend')) {
      Friends.friendlist.splice(Friends.friendlist.indexOf($(this).text()), 1);
    } else {
      Friends.friendlist.push($(this).text());
    }
    var $friends = $('.friends');
    $friends.empty();
    for (var i = 0; i < Friends.friendlist.length; i++) {
      $friends.append(`<h3>${Friends.friendlist[i]}</h3>`);
    }

    App.fetch();
  },
  friendlist: []

};