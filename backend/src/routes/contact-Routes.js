const router = require("express").Router();
const userControllers = require("../controllers/user-controllers");


router.post("/createcontact", userControllers.createcontact); 
router.get("/viewcontact", userControllers.viewcontact); 




module.exports = router;