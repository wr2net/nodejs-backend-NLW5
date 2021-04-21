import {Request, Response} from "express"
import {UsersService} from "../services/UsersService";
import {SettingsService} from "../services/SettingsService";

class UsersController {
    async create(request: Request, response: Response): Promise<Response> {
        const {email} = request.body

        const usersService = new UsersService()

        const user = await usersService.create(email)

        return response.json(user)
    }

    async findAll(request: Request, response: Response) {
        const usersService = new UsersService()
        const list = await usersService.list()
        return response.json(list)
    }

    async show(request: Request, response: Response) {
        const {id} = request.params
        const usersService = new UsersService()
        const show = await usersService.findById(id)
        return response.json(show)
    }
}

export {UsersController}