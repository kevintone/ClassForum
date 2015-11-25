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


Template.postTemplate.helpers({
    posts: Posts.find({})
})

Template.generalTemplate.events({
    'click #createTopic': function() {
        Router.go('/createPost')
    }
})

Template.createPost.events({
    'click #submit': function(event) {
        event.preventDefault();
        var title = $('#postTitle').val();
        var body = $('#postBody').val();

        if(title == '' || body == '') {

        } else {
            Posts.insert({
                title: title,
                username: Meteor.user().username,
                body: body
            });
        }

        $('#postTitle').val('');
        $('#postBody').val('');
    }
});