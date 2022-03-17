const express = require("express")
const router = express.Router()
const jwt = require("express-jwt")
const jwks = require("jwks-rsa")
// const { withApiAuthRequired, getSession } = require("@auth0/nextjs-auth0")

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://dev-fh2bo4e4.us.auth0.com/.well-known/jwks.json",
  }),
  audience: "http://localhost:5000",
  issuer: "https://dev-fh2bo4e4.us.auth0.com/",
  algorithms: ["RS256"],
})

router.use(express.json())
router.use(express.urlencoded({ extended: true }))
router.use(require("helmet")())
// router.use(withApiAuthRequired(async (req, res) => {}))

router.get("/movies", jwtCheck, (req, res) => {
  // const { user } = getSession(req, res)
  res.status(200).json({ msg: "We made it! And it's great" })
})

module.exports = router
