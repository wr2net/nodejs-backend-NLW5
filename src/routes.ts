import { Router } from "express"
import {SettingsController} from "./controllers/SettingsController";

const routes = Router()
const settingsController = new SettingsController()

routes.get("/", (request, response) => {
    return response.json({
        status: 200,
        message: "It`s working!"
    })
})

routes.post("/settings", settingsController.create)

export { routes }