import { DIService } from "../services/dependency-injection.service";
import { ICommand } from "./icommand";
import { ICommandHandler } from "./ihandler";

export class Mediator {
    async send<TEntity extends ICommand<TResult>, TResult>(command: TEntity): Promise<TResult> {
        const cm = DIService.container.get(command.constructor.name) as ICommandHandler<TEntity, TResult>;
        return await cm.handle(command);
    }
}