/*Router.route('/AboutUs', {
    name: 'AboutUs',
    template: 'AboutUs'
});


Router.route('/', {
    //options for the route
    name: 'home',
    template: 'home'
});*/

Router.map(function () {
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
    });
});
