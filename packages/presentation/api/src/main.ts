import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FilesysteDIConfig } from "example-infrastructure-filesystem-storage";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  FilesysteDIConfig.init();
  await app.listen(3000);
}
bootstrap();
