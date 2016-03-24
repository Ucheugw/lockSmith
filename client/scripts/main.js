Router.configure({
    //options go here
    layoutTemplate: 'main'

});

// counter starts at 0
Session.setDefault('counter', 0);

/*Template.hello.helpers({
  counter: function () {
    return Session.get('counter');
  }
});

Template.hello.events({
  'click button': function () {
    // increment the counter when button is clicked
    Session.set('counter', Session.get('counter') + 1);
  }
});*/

if (Meteor.isClient) {
  // This code only runs on the client
  Template.main.events({
      'click a': function(template){
          console.log((event.target).closest("a").name);
          var currentChoice = $(event.target).closest("a");

          currentChoice.addClass("active");
          $(".menu a").not(currentChoice).removeClass("active");
      }
                   });
}
