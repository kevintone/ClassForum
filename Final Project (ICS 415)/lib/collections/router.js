


Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', function(){
    this.render('aboutTemplate');
    title: "ICS 415 | About"
});

Router.route('/index', function(){
    this.render('indexTemplate');
    title: "ICS 415 | Forums"
});


Router.route('/generalDiscussions', function(){
    this.subscribe('posts');
    this.render('generalTemplate');
    title: "ICS 415 | General Discussions"
});

Router.route('/createPost', function() {
    this.render('createPost');
    title: "ICS 415 | Create A Post"
});

Router.route('/schedule', function() {
    this.render('scheduleTemplate');
    title: "ICS 415 | Schedule"
});


Router.route('/meetups',function(){
   this.render('meetupTemplate');
   title: "ICS 415 | Meetups"
});

Router.route('/createMeetup', function() {
   this.render('createMeetupForm');
    title: "ICS 415 | Create A Meetup"
});