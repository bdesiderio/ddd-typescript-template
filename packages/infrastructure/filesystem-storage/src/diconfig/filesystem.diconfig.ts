import { DIService, IUserRepository, IUserRepositorySymbol } from "example-domain-core";
import { UserRepository } from "../repositories/user.repository";

export class FilesysteDIConfig {
    static init() {
        DIService.container.bind<IUserRepository>(IUserRepositorySymbol).to(UserRepository);
    }
}