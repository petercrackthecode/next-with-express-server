const router = require("express").Router()

router.get("/movies", (_, res) => {
  res.end("We made it! And it's great")
})

module.exports = router
