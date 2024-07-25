import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTrackerDto {
  @IsString({ message: 'type必须为字符串类型' })
  @IsNotEmpty({ message: '监控类型不能为空' })
  type: string;

  @IsNotEmpty({ message: '数据不能为空' })
  data: Record<string, any>;

  extra: Record<string, any>;

  @IsString({ message: 'appId必须为字符串类型' })
  @IsNotEmpty({ message: 'appId不能为空' })
  appId: string;

  @IsString({ message: 'userId必须为字符串类型' })
  userId: string;

  @IsNumber()
  @IsNotEmpty({ message: 'time不能为空' })
  time: number;
}
