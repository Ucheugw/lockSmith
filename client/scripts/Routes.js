/*Router.route('/AboutUs', {
    name: 'AboutUs',
    template: 'AboutUs'
});


Router.route('/', {
    //options for the route
    name: 'home',
    template: 'home'
});*/

/*Router.map(function () {
    this.route('/AboutUs', {
        name: 'AboutUs',
        template: 'AboutUs'
    });

    this.route('/', {
        //options for the route
        name: 'home',
        template: 'home'
    });

    this.route('/ContactUs', {
        //options for the route
        name: 'ContactUs',
        template: 'ContactUs'
    });

    this.route('/OurProduct', {
        //options for the route
        name: 'OurProduct',
        template: 'OurProduct'
    });*/

/*Router.route('/',  {
    name: 'home',
    template: 'home'
});*/

Router.route('/', function () {
    this.layout('main');
    this.render('home');
}, {
  // provide a custom name
  name: 'home'
});

Router.route('/AboutUs', function () {
    this.layout('main');
    this.render('AboutUs');
}, {
  // provide a custom name
  name: 'AboutUs'
});

Router.route('/ContactUs', function () {
    this.layout('main');
    this.render('ContactUs');
}, {
  // provide a custom name
  name: 'ContactUs'
});

//I know there is a way to fix this
//work on it after the demo with Craig and Joe
//
Router.route('/OurProduct', function () {
    this.layout('ProductLayout');
    this.render('OurProduct');
    this.render('summary', {to: 'scontent'});
}, {
  // provide a custom name
  name: 'OurProduct'
});


Router.route('/OurProduct/Consolidation', function() {
    this.layout('ProductLayout');
    this.render('Consolidation', {to: 'scontent'});
}, {
  // provide a custom name
  name: 'Consolidation'
});

Router.route('/OurProduct/Economical', function() {
    this.layout('ProductLayout');
    this.render('Economical', {to: 'scontent'});
}, {
  // provide a custom name
  name: 'Economical'
});

Router.route('/OurProduct/Visible', function() {
    this.layout('ProductLayout');
    this.render('Visible', {to: 'scontent'});
}, {
  // provide a custom name
  name: 'Visible'
});

Router.route('/OurProduct/Space', function() {
    this.layout('ProductLayout');
    this.render('Space', {to: 'scontent'});
}, {
  // provide a custom name
  name: 'Space'
});

Router.route('/OurProduct/Organization', function() {
    this.layout('ProductLayout');
    this.render('Organization', {to: 'scontent'});
}, {
  // provide a custom name
  name: 'Organization'
});

Router.route('/OurProduct/Unlimited', function() {
    this.layout('ProductLayout');
    this.render('Unlimited', {to: 'scontent'});
}, {
  // provide a custom name
  name: 'Unlimited'
});
