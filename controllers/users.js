"use strict";

const path = require('path');
var User= require (path.join(__dirname, '../models/user'));


var createUser = function (req, res) {

    var user = new User(req.body);
    console.log("User Req",req.body);
    user.save(function (err, user) {
        if (err) { res.status(500).send({err:err}); }
        //res.status(200).send({user:user});
        res.redirect('/users/');
    });
}


var getUsers = function (req, res) {
    User.find(function (err, users) {
        if (err) { res.status(500).send({err:err}); }
        //res.status(200).send({users:users});
        res.render('users', {users:users});
    });
}


var getRegisterPage= function(req, res){
    res.render('register');
}


module.exports = {
    createUser,
    getUsers,
    getRegisterPage
}