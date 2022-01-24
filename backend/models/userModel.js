const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
    username: {
        type: String,
        required: [true, "Please enter your username"],
        unique: true
    },

    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true
    },

    password: {
        type: String,
        required: [true, "Please enter your password"],
    },

    profilePic: {
        type: String,
        defaut: ""
    },

    isAdmin: {
        type: Boolean,
        default: false
    },


    },
    
    { timestamps: true }
);


module.exports = mongoose.model("User", userSchema); 