import {getCustomRepository, Repository} from "typeorm"
import {SettingsRepository} from "../repositories/SettingsRepository"
import {Setting} from "../entities/Setting";

interface ISettingsCreate {
    chat: boolean
    username: string
}

class SettingsService {
    
    private settingsRepository: Repository<Setting>

    constructor() {
        this.settingsRepository = getCustomRepository(SettingsRepository)
    }
    
    async create({chat, username} : ISettingsCreate) {

        const userAlreadyExists = await this.settingsRepository.findOne({
            username
        })

        if (userAlreadyExists) {
            throw new Error("User already exists!")
        }

        const settings = this.settingsRepository.create({
            chat,
            username
        })

        await this.settingsRepository.save(settings)

        return settings
    }

    async list() {
        const list = await this.settingsRepository.find()
        return list
    }

    async findById(id: string) {
        const show = await this.settingsRepository.findOne({
            id
        })

        return show
    }

    async findByUsername(username: string) {
        const sett = await this.settingsRepository.findOne({
            username
        })
        return sett
    }

    async update(username: string, chat: boolean) {
        await this.settingsRepository.createQueryBuilder()
            .update(Setting)
            .set({chat})
            .where("username = :username", {
                username
            })
            .execute()
    }
}

export {SettingsService}