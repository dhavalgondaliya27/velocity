import mongoose, { Schema } from "mongoose";

// Define a sub-schema for the services
const serviceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    checked: {
        type: Boolean,
        required: true
    }
});

// Define the main contact schema
const contactSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        validate: {
            validator: function (v) {
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
            },
            message: (props) => `${props.value} is not a valid email!`
        }
    },
    company: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    role: {
        type: String
    },
    message: {
        type: String
    },
    termsAndCondition: {
        type: Boolean,
        required: true
    },
    selectedCheckboxes: [{
        name: {
            type: String,
            required: true
        },
        checked: {
            type: Boolean,
            required: true
        },
        services: [serviceSchema]
    }]
}, { timestamps: true });

export const Contact = mongoose.model("Contact", contactSchema);


