import { DIService } from "example-domain-core"
import { UserCreateHandler } from "../user/create/user-create.handler";
export class DIConfig {
    static config() {
        DIService.container.bind<UserCreateHandler>("UserCreateCommand").to(UserCreateHandler);
    }
}