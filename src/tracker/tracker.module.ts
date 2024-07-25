import { TrackerService } from './tracker.service';
import { TrackerController } from './tracker.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [TrackerController],
  providers: [TrackerService],
})
export class TrackerModule {}
