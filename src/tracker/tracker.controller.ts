import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TrackerService } from './tracker.service';
import { CreateTrackerDto } from './dto/create-tracker.dto';
import { UpdateTrackerDto } from './dto/update-tracker.dto';

@Controller('tracker')
export class TrackerController {
  constructor(private readonly trackerService: TrackerService) {}
}
