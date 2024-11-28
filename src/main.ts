import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);

    // Enabling CORS to allow cross-origin requests from the frontend
    app.enableCors({
      origin: 'http://localhost:3001', // Change this to your frontend URL (React dev server)
      methods: 'GET,POST,PATCH,DELETE', // Allowed HTTP methods
      allowedHeaders: 'Content-Type, Authorization', // Allowed headers
    });

    // Setting up Swagger documentation for the API
    const config = new DocumentBuilder()
      .setTitle('API Documentation')
      .setDescription('API description for the application')
      .setVersion('1.0')
      .addTag('API')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    // Apply global validation pipes to the app
    app.useGlobalPipes(new ValidationPipe());

    // Start the backend server
    await app.listen(process.env.PORT ?? 3000);
    console.log(`Backend is running on: ${process.env.PORT ?? 3000}`);
  } catch (error) {
    console.error('Error during application startup', error);
    process.exit(1); // Exit the process if an error occurs
  }
}

bootstrap();
