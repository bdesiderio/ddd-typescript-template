import { IUserRepository, User } from "example-domain-core";
import { injectable } from "inversify";

@injectable()
export class UserRepository implements IUserRepository {
    async add(user: User): Promise<any> {
        console.log("ADD USER TO FILESYSTEM");
        return 1;
    }

}