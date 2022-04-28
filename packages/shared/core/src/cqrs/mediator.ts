import { Injectable } from "../dependency-injection/decorators/diconfig.decorator";
import { DIService } from "../services/dependency-injection.service";
import { ICommand } from "./icommand";
import { ICommandHandler } from "./icommand.handler";
import { INotification } from "./inotification";
import { INotificationHandler } from "./inotification.handler";

export abstract class IMediator {
    abstract send<TCommand extends ICommand<TResult>, TResult>(command: TCommand): Promise<TResult>;
    abstract notify<TNotification extends INotification>(command: TNotification): Promise<void>;
}

@Injectable(IMediator)
export class Mediator {
    async send<TCommand extends ICommand<TResult>, TResult>(command: TCommand): Promise<TResult> {
        const handlers = await DIService.container.getAllAsync(command.constructor.name) as ICommandHandler<TCommand, TResult>[];
        return await handlers[handlers.length - 1].handle(command);
    }

    async notify<TNotification extends INotification>(notification: TNotification): Promise<void> {
        const handlers = await DIService.container.getAllAsync(notification.constructor.name) as INotificationHandler<TNotification>[];
        handlers.forEach(x => x.handle(notification));
    }
}