/**
 * Created by Mianz on 11/22/15.
 */


Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', function(){
    this.render('aboutTemplate');
});

Router.route('/index', function(){
    this.render('indexTemplate');
});


Router.route('/generalDiscussions', function(){
    this.render('generalTemplate');
});



/*Router.map(function(){
   this.route('About', {
       path: '/'
   })
});*/

