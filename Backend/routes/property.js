const express = require("express")
const router = express.Router()
const {createProperty , getUserProperty ,getSingleproperty , getAllproperty} = require("../controllers/property")

router.route("/property").post(createProperty)
router.route("/property/:user_id").get(getUserProperty)
router.route("/singleproperty/:_id").get(getSingleproperty)
router.route("/property").get(getAllproperty)
module.exports = router