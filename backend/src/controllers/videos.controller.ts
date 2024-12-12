import { Controller, Get } from '@nestjs/common';

@Controller('videos')
export class VideosController {
  @Get()
  getAllVideos() {
    return [
      { id: 1, title: 'First Video' },
      { id: 2, title: 'Second Video' },
    ];
  }
}
