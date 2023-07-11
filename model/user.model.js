/*
    this will hold schema for the user

    this explain the diffrent field of user and how it will be stored in mongo db

*/

const mongoose = require('mongoose');

const userschema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 10,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8

    },
    usertype: {
        type: String,
        required: true,
        default: "CUSTOMER",
        enum: ["CUSTOMER", "ADMIN"]
    }

}, { timestamps: true });

/* 
    define the collection where it will be stored;

*/
module.exports = mongoose.model("user", userschema);