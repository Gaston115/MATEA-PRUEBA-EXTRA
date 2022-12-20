const router = require("express").Router();

router.use("/contacts", require("./contact-Routes"));


module.exports = router;
