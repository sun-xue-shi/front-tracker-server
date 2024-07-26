import { Controller, Post, Req } from '@nestjs/common';
import { TrackerService } from './tracker.service';
import { Request } from 'express';

@Controller('tracker')
export class TrackerController {
  constructor(private readonly trackerService: TrackerService) {}

  @Post()
  trackedDataReport(@Req() request: Request) {
    const buffers = [];
    request.on('data', (chunk) => {
      buffers.push(chunk);
    });
    request.on('end', () => {
      const bufferData = buffers.concat(buffers);
      const data = JSON.parse(bufferData.toString());
      this.trackerService.saveTrackedData(data);
    });
  }
}
