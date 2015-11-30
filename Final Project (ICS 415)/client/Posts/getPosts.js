/**
 * Created by Mianz on 11/23/15.
 */

Accounts.ui.config({
   passwordSignupFields: 'USERNAME_AND_EMAIL'
});

if (Meteor.isClient) {
    Template.generalTemplate.helpers({
       posts:function(){
           Posts.find();
       }
    });
}

Template.forumHeader.helpers({
    title: function(){
        return Router.current().route.options.title;
    }
});

Template.postTemplate.helpers({
    posts: Posts.find({})
});

Template.getMeetups.helpers({
    meets: Meetups.find({})
});

Template.generalTemplate.events({
    'click #createTopic': function() {
        Router.go('/createPost')
    }
});

Template.meetupTemplate.events({
   'click #createAMeetupButton': function() {
       Router.go('/createMeetup')
   }
});

Template.createPost.events({
    'click #submit': function(event) {
        event.preventDefault();
        var title = $('#postTitle').val();
        var body = $('#postBody').val();
        var currentDate = new Date();

        if(title == '' || body == '') {

        } else {
            Posts.insert({
                title: title,
                username: Meteor.user().username,
                date: moment(currentDate).format('dddd, MMMM Do YYYY, h:mm:ss a'),
                body: body
            });
        }

        $('#postTitle').val('');
        $('#postBody').val('');
    }
});

Template.createMeetupForm.events({
    'click #submit': function(event) {
        event.preventDefault();
        var title = $('#meetupTitle').val();
        var purpose = $('#meetupPurpose').val();
        var time = $('#meetupTime').val();
        var meetingDate = $('#meetupDate').val();
        var place =$('#meetupPlace').val();
        var currentDate = new Date();

        if(title == '' || purpose == '' || time == ''|| place == '') {

        } else {
            Meetups.insert({
                title: title,
                username: Meteor.user().username,
                meetingDate: meetingDate,
                date: moment(currentDate).format('dddd, MMMM Do YYYY, h:mm:ss a'),
                purpose:purpose,
                time:time,
                place:place
            });
        }

        $('#meetupTitle').val('');
        $('#meetupPurpose').val('');
        $('#meetupDate').val('');
        $('#meetupTime').val('');
        $('#meetupPlace').val('');
    }
});