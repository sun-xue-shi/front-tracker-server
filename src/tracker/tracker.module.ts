import { TrackerService } from './tracker.service';
import { TrackerController } from './tracker.controller';
import { Module } from '@nestjs/common';
import { UserAction, UserActionSchema } from './entities/userAction.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { PerformanceSchema } from './entities/performance.entity';
import { ErrorSchema } from './entities/error.entity';
import { Custom, CustomSchema } from './entities/custom.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Performance.name, schema: PerformanceSchema },
      { name: UserAction.name, schema: UserActionSchema },
      { name: Custom.name, schema: CustomSchema },
      { name: Error.name, schema: ErrorSchema },
    ]),
  ],
  controllers: [TrackerController],
  providers: [TrackerService],
})
export class TrackerModule {}
