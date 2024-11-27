import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configure Swagger
  const config = new DocumentBuilder()
    .setTitle('API Documentation') // Set the title of the documentation
    .setDescription('API for the application') // Add a description
    .setVersion('1.0') // Specify the version
    .addBearerAuth() // Optional: Include Bearer Token for authentication
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Swagger UI available at /api

  // Start the server
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
