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
    posts: Posts.find({}, {sort: {date: -1}})
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

            $('#postTitle').val('');
            $('#postBody').val('');

            Router.go('/generalDiscussions')
        }



    }
});

Template.createMeetupForm.events({
    'click #submit': function(event) {
        event.preventDefault();
        var title = $('#meetupTitle').val();
        var purpose = $('#meetupBody').val();
        var time = $('#meetupTime').val();
        var meetingDate = $('#meetupDate').val();
        var place =$('#meetupPlace').val();
        var currentDate = new Date();
        var defaultOne = 1;

        if(title == '' || purpose == '' || time == ''|| place == '') {

        } else {
            Meetups.insert({
                title: title,
                username: Meteor.user().username,
                meetingDate: meetingDate,
                date: moment(currentDate).format('dddd, MMMM Do YYYY, h:mm:ss a'),
                purpose: purpose,
                time:time,
                number: defaultOne,
                place:place
            });

        }

        $('#meetupTitle').val('');
        $('#meetupBody').val('');
        $('#meetupPurpose').val('');
        $('#meetupDate').val('');
        $('#meetupTime').val('');
        $('#meetupPlace').val('');

        Router.go('/meetups')
    }
});

Template.getMeetups.events({
    'mouseover #joinMeetup': function(event) {
        var selected = this._id;
        Session.set('selectedMeetup', selected);
    },

});

Template.joinMeetupButton.events({
    'click #joinMeetup': function(event) {
        // var selectedMeet = Session.get('selectedMeetup');
        Meetups.update(Session.get('selectedMeetup'), {$inc: {number:1}});
    }
});