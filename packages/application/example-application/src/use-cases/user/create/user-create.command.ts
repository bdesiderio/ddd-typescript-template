import { ICommand } from "@extrimian/core";


export class UserCreateCommand implements ICommand<number> {

    constructor(public name: string) {

    }

}