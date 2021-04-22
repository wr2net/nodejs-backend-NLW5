import {Request, Response} from "express"
import {SettingsService} from "../services/SettingsService"

class SettingsController {
    async create(request: Request, response: Response) {
        const {chat, username} = request.body
        const settingsService = new SettingsService()

        try {
            const settings = await settingsService.create({chat, username})
            return response.json(settings)
        } catch (err) {
            return response.status(400).json({
                status: 400,
                message: err.message
            })
        }
    }

    async findAll(request: Request, response: Response) {
        const settingsService = new SettingsService()
        const list = await settingsService.list()
        return response.json(list)
    }

    async show(request: Request, response: Response) {
        const {id} = request.params
        const settingsService = new SettingsService()
        const show = await settingsService.findById(id)
        return response.json(show)
    }

    async findByUsername(request: Request, response: Response) {
        const {username} = request.params
        const settingsService = new SettingsService()
        const show = await settingsService.findByUsername(username)
        return response.json(show)
    }

    async update(request: Request, response: Response) {
        const {username} = request.params
        const {chat} = request.body
        const settingsService = new SettingsService()
        const show = await settingsService.update(username, chat)
        return response.json(show)
    }
}

export {SettingsController}