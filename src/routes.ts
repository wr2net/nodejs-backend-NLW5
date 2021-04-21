import {Router} from "express"
import {SettingsController} from "./controllers/SettingsController"
import {UsersController} from "./controllers/UsersController"
import {MessagesController} from "./controllers/MessgesController"

const routes = Router()
const settingsController = new SettingsController()
const usersController = new UsersController()
const messagesController = new MessagesController()

// STATUS
routes.get("/", (request, response) => {
    return response.json({
        status: 200,
        message: "It`s working!"
    })
})

// SETTINGS
routes.post("/settings", settingsController.create)
routes.get("/settings", settingsController.findAll)
routes.get("/settings/:id", settingsController.show)

// USERS
routes.post("/users", usersController.create)
routes.get("/users", usersController.findAll)
routes.get("/users/:id", usersController.show)

// MESSAGES
routes.post("/messages", messagesController.create)
routes.get("/messages/:id", messagesController.showbyUser)

export {routes}