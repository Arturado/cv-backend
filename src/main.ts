import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*', // o ['http://localhost:5173'] para limitar
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
