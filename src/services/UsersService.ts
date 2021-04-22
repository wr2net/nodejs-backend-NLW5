import {getCustomRepository, Repository} from "typeorm";
import {UsersRepository} from "../repositories/UsersRepository";
import {User} from "../entities/User";

class UsersService {

    private usersRepository: Repository<User>

    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository)
    }

    async create(email: string) {

        const userExists = await this.usersRepository.findOne({
            email
        })

        if (userExists) {
            return userExists
        }

        const user = this.usersRepository.create({
            email
        })

        await this.usersRepository.save(user)

        return user
    }

    async list() {
        const list = await this.usersRepository.find()
        return list
    }

    async findById(id: string) {

        const show = await this.usersRepository.findOne({
            id
        })

        return show
    }

    async findByEmail(email: string) {

        const show = await this.usersRepository.findOne({
            email
        })

        return show
    }
}

export {UsersService}