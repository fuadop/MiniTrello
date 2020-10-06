import {Schema, model} from "mongoose";

const User = new Schema ({
    firstname: {
        type: String,
        minlength: 2,
        required: true
    },
    lastname: {
        type: String,
        minlength: 2,
        required: true
    },
    email: {
        type: String,
        minlength: 8,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        required: true,
        unique: true
    },
    password: {
        type: String,
        minlength: 6,
        required: true
    },
    boards: {
        
    }
});

export default model("User", User);