import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { DataModel, RateType } from '../types';

@Schema()
export class Performance {
  @Prop(raw({ name: String, value: Number, rating: String }))
  FCP: {
    name: string;
    value: number;
    rating: RateType;
  };

  @Prop(raw({ name: String, value: Number, rating: String }))
  LCP: {
    name: string;
    value: number;
    rating: RateType;
  };

  @Prop(raw({ name: String, value: Number, rating: String }))
  FID: {
    name: string;
    value: number;
    rating: RateType;
  };

  @Prop(raw({ name: String, value: Number, rating: String }))
  CLS: {
    name: string;
    value: number;
    rating: RateType;
  };

  @Prop(
    raw({
      DNS: raw({ start: Number, end: Number, value: Number }),
      SSL: raw({ start: Number, end: Number, value: Number }),
      TCP: raw({ start: Number, end: Number, value: Number }),
      TTFB: raw({ start: Number, end: Number, value: Number }),
      Trans: raw({ start: Number, end: Number, value: Number }),
      FP: raw({ start: Number, end: Number, value: Number }),
      DomParse: raw({ start: Number, end: Number, value: Number }),
      TTI: raw({ start: Number, end: Number, value: Number }),
      DomReady: raw({ start: Number, end: Number, value: Number }),
      Res: raw({ start: Number, end: Number, value: Number }),
      Load: raw({ start: Number, end: Number, value: Number }),
    }),
  )
  navigationTiming: {
    DNS: DataModel;
    SSL: DataModel;
    TCP: DataModel;
    TTFB: DataModel;
    Trans: DataModel;
    FP: DataModel;
    DomParse: DataModel;
    TTI: DataModel;
    DomReady: DataModel;
    Res: DataModel;
    Load: DataModel;
  };

  @Prop([
    raw({
      name: String,
      initiatorType: String,
      transferSize: Number,
      start: Number,
      end: Number,
      DNS: Number,
      TCP: Number,
      SSL: Number,
      TTFB: Number,
      Trans: Number,
    }),
  ])
  resourceFlow: Array<{
    name: string;
    initiatorType: string;
    transferSize: number;
    start: number;
    end: number;
    DNS: number;
    TCP: number;
    SSL: number;
    TTFB: number;
    Trans: number;
  }>;

  @Prop(
    raw({
      hitQuantity: Number,
      cacheHitRate: String,
    }),
  )
  cacheData: {
    hitQuantity: number;
    cacheHitRate: string;
  };

  @Prop({ type: Object })
  extra: Record<string, any>;

  @Prop({ type: String, required: true })
  appId: string;

  @Prop(String)
  uid: string;

  @Prop({ type: Number, required: true })
  time: number;
}

export const PerformanceSchema = SchemaFactory.createForClass(Performance);
