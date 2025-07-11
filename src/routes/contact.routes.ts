import {Router} from "express";
import {getAllContacts, saveContact} from "../controller/contact.controller";

const contactRouter:Router = Router();

contactRouter.post("/save", saveContact);
contactRouter.get("/all", getAllContacts);

export default contactRouter