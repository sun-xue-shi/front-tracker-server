import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Performance } from './entities/performance.entity';
import { UserAction } from './entities/userAction.entity';
import { Custom } from './entities/custom.entity';
import { CreateTrackerDto } from './dto/create-tracker.dto';

@Injectable()
export class TrackerService {
  @InjectModel(Performance.name)
  private PerformanceModel: Model<Performance>;

  @InjectModel(UserAction.name)
  private UserActionModel: Model<UserAction>;

  @InjectModel(Custom.name)
  private CustomModel: Model<Custom>;

  @InjectModel(Error.name)
  private ErrorModel: Model<Error>;

  async saveTrackedData(createTrackedDataDto: CreateTrackerDto) {
    const { type, data, appId, userId, extra, time } = createTrackedDataDto;

    if (type === 'performance') {
      const performanceData = await this.PerformanceModel.create({
        ...data,
        extra,
        appId,
        userId,
        time,
      });
      if (performanceData) return console.log('performance data send success');
      else return console.log('performance data sendfail');
    }

    if (type === 'userAction') {
      const userActionData = await this.UserActionModel.create({
        ...data,
        extra,
        appId,
        userId,
        time,
      });
      if (userActionData) return console.log('userAction data send success');
      else return console.log('userAction data sendfail');
    }

    if (type === 'custom') {
      const customData = await this.CustomModel.create({
        data,
        extra,
        appId,
        userId,
        time,
      });
      if (customData) return console.log('custom data send success');
      else return console.log('custom data sendfail');
    }

    if (type === 'error') {
      const errorData = await this.ErrorModel.create({
        ...data,
        extra,
        appId,
        userId,
        time,
      });
      if (errorData) return console.log('error data send success');
      else return console.log('error data sendfail');
    }
  }
}
