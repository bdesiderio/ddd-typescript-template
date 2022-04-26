export * from "./services/publisher.service";
export * from "./user/create/user-create.command";

import { DIConfig } from "./diconfig/di.config";
DIConfig.config();