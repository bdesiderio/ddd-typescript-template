import { User } from "../models/user";
import { injectable } from "inversify";

const TYPE = Symbol.for("IUserRepository");

interface IUserRepository {
    add(user: User): Promise<any>;
}

export { TYPE as IUserRepositorySymbol, IUserRepository }