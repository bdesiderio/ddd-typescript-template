import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FilesystemDIConfig } from "example-infrastructure-filesystem-storage";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  FilesystemDIConfig.init();
  await app.listen(3000);
}
bootstrap();
