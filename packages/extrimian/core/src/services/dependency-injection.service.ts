import { Container } from "inversify";
import { ICommand } from "../cqrs/icommand";
import { ICommandHandler } from "../cqrs/ihandler";

export class DIService {
    static container = new Container();

    static addCommand<TResult, TCommand extends ICommand<TResult>,
        TCommandHandler extends ICommandHandler<TCommand, TResult>>(
            command: new (...args: never[]) => TCommand,
            handler: new (...args: never[]) => TCommandHandler) {
        DIService.container.bind<TCommandHandler>(command.name).to(handler);        
    }
}