import { DIService } from "example-domain-core";

export class PublisherService {
    constructor() {

    }

    public publish(domain: any) {
        const handler = DIService.container.get<any>(domain.constructor.name);
        handler.exec(domain);
    }
}