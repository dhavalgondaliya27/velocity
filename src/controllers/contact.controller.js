import { Contact } from "../models/contact.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createContact = asyncHandler(async (req, res) => {
  const {
    firstName,
    email,
    company,
    lastName,
    phoneNumber,
    role,
    message,
    termsAndCondition,
    selectedCheckboxes
  } = req.body;

 
    // Create new contact
    const contact = await Contact.create({
      firstName,
      email,
      company,
      lastName,
      phoneNumber,
      role,
      message,
      termsAndCondition,
      selectedCheckboxes
    });

    return res
      .status(201)
      .json(new ApiResponse(200, contact, "Contact created successfully"));
  } 
);

const getContacts = asyncHandler(async (req, res) => {
  try {
    // Fetch all contacts
    const contacts = await Contact.find();

    return res
      .status(200)
      .json(new ApiResponse(200, contacts, "Contacts fetched successfully"));
  } catch (error) {
    throw new ApiError(500, "Error while fetching contacts", error);
  }
});

// You can add more controller functions like updateContact, deleteContact, etc. as needed

export { createContact, getContacts };
