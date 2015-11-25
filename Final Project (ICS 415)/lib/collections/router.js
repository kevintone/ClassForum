


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
    this.subscribe('posts');
    this.render('generalTemplate');
});

Router.route('/createPost', function() {
    this.render('createPost');
});