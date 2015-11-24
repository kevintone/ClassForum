/**
 * Created by Mianz on 11/23/15.
 */


//Creates a Database for Assignments
//Assignments = new Mongo.Collection("assignments");

//Creates a Database for
//Meetups = new Mongo.Collection("meetups");

//Create database for
Posts = new Mongo.Collection("posts");

//
//Schedule = new Mongo.Collection("schedule");


if (Meteor.isServer) {

}


if (Meteor.isClient) {
    Template.posts.helper({
        posts:function(){
            return Posts.find();
        }
    });
}

Meteor.startup(function(){
    if (Posts.find().count() === 0) {
        for(var i = 0; i < 1; i++) {
            Posts.insert({title: "A dummy post"});
        }
    }
});