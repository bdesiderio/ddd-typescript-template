import { UserCreateCommand } from "./user-create.command";
import { inject, injectable } from "inversify";
import { IUserRepository, IUserRepositorySymbol } from "example-domain-core";

@injectable()
export class UserCreateHandler {
    constructor(@inject(IUserRepositorySymbol) private _userRepository: IUserRepository) {

    }

    async exec(payload: UserCreateCommand) {
        await this._userRepository.add({ id: "" });
    }
}