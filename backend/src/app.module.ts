import { Module } from '@nestjs/common';
import { VideosController } from './controllers/videos.controller';

@Module({
  imports: [],
  controllers: [VideosController],
  providers: [],
})
export class AppModule {}
