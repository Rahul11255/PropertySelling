const express = require('express')
const router = express.Router()
const {registerFormData ,loginUserData} = require("../controllers/auth")

router.route("/auth/register").post(registerFormData)
router.route("/auth/login").post(loginUserData)

module.exports = router