import { Router } from "express";
import { createContact, getContacts } from "../controllers/contact.controller.js";
const router = Router()
router.route("/contact/createcontact").post(createContact)
router.route("/contact/getcontact").get(getContacts)
export default router