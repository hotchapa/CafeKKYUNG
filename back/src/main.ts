import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000, '0.0.0.0'); // 모든 네트워크 인터페이스에서 접속을 허용
}
bootstrap();
