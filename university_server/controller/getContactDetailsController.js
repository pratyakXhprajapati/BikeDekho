import Contact from "../models/contact.js";

export const getContactDetails = async (req, resp) => {
  try {
    const { name, email, address, mobile, gender } = req.body;

    console.log(name, email);
    const newContact = new Contact({
      name: name,
      email: email,
      address: address,
      mobile: mobile,
      gender: gender,
    });
    const savedContact = await newContact.save();
    resp.status(201).json(savedContact);
  } catch (error) {
    console.error(error);
    resp.status(500).json({ message: "Internal Server Error" });
  }
};
