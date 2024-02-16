const express = require("express")
const router = express.Router()
const {registerVisitData} = require("../controllers/visiform")

router.route("/visitform").post(registerVisitData)

module.exports = router