import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Performance } from './entities/performance.entity';
import { UserAction } from './entities/userAction.entity';
import { Custom } from './entities/custom.entity';

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
}
