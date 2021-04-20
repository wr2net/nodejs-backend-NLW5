import { EntityRepository, Repository } from "typeorm";
import { Setting } from "../entities/Seting"

@EntityRepository(Setting)
class SettingsRepository extends Repository<Setting> {}

export {SettingsRepository}
