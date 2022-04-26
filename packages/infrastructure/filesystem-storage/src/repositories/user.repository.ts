import { IUserRepository, IUserRepositorySymbol, User } from "example-domain-core";
import { Injectable, ServiceScope } from "@extrimian/core";

@Injectable(IUserRepositorySymbol, ServiceScope.Transient)
export class UserRepository implements IUserRepository {
    async add(user: User): Promise<any> {
        console.log("ADD USER TO FILESYSTEM");
        return 1;
    }
}