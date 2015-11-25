/**
 * Created by Mianz on 11/23/15.
 */


//Creates a Database for Assignments
//Assignments = new Mongo.Collection("assignments");

//Creates a Database for
Meetups = new Mongo.Collection("meets");

//Create database for
Posts = new Mongo.Collection("posts");


//
//Schedule = new Mongo.Collection("schedule");


if (Meteor.isServer) {

}


if (Meteor.isClient) {
    /*Template.posts.helpers({
        posts: function(){
            return Posts.find();
        }
    });*/
}
