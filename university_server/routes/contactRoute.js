import express from "express";

import {getContactDetails} from "../controller/getContactDetailsController.js"

const router = express.Router();


router.post("/contactus",getContactDetails);

export default router;