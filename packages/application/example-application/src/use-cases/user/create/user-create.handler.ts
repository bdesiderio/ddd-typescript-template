import { UserCreateCommand } from "./user-create.command";
import { inject, injectable } from "inversify";
import { IUserRepository, IUserRepositorySymbol } from "example-domain-core";
import { ICommandHandler, Injectable, Inject, InjectableHandler } from "@extrimian/core";

@InjectableHandler(UserCreateCommand)
export class UserCreateHandler implements ICommandHandler<UserCreateCommand, number> {

    constructor(@Inject(IUserRepositorySymbol) private _userRepository: IUserRepository) {

    }

    async handle(command: UserCreateCommand): Promise<number> {
        //implement handler
        this._userRepository.add({ name: command.name })

        //return created user id
        return 0;
    }
}