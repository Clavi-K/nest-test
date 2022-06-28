import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ProductModule,
    MongooseModule.forRoot(`mongodb+srv://localhost:Y3Bu5RvKc0fDddLj@cluster0.j3uwp.mongodb.net/nest?retryWrites=true&w=majority`, {
      useNewUrlParser: true
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
