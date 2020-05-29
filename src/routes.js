const routes = require("express").Router()

const authMiddlaware = require("./app/middleware/auth")

const SessionController = require("./app/controllers/sessionController")

routes.post("/sessions", SessionController.store)

routes.use(authMiddlaware)

routes.get("/dashboard", (req,res)=>{
    return res.status(200).send()
})


module.exports = routes;