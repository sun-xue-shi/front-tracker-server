import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';

@Schema()
export class UserAction {
  @Prop()
  pageInformation: {
    href: string;
    origin: string;
    protocol: string;
    host: string;
    hostname: string;
    port: string;
    pathname: string;
    search: string;
    hash: string;
    title: string;
    language: string;
    userAgent: Record<string, any>;
    winScreen: string;
    docScreen: string;
  };

  @Prop([
    raw({
      referrer: String,
      type: String,
    }),
  ])
  originInformation: {
    referrer: string;
    type: string;
  };

  @Prop()
  routerChangeRecord: Array<{
    jumpType: string;
    pageInfo: {
      href: string;
      origin: string;
      protocol: string;
      host: string;
      hostname: string;
      port: string;
      pathname: string;
      search: string;
      hash: string;
      title: string;
      language: string;
      userAgent: Record<string, any>;
      winScreen: string;
      docScreen: string;
    };
    time: number;
  }>;

  @Prop()
  domBehaviorRecord: Record<
    string,
    Array<{
      tagInfo: {
        id: string;
        classList: string[];
        tagName: string;
        text: string | null;
      };
      pageInfo: {
        href: string;
        origin: string;
        protocol: string;
        host: string;
        hostname: string;
        port: string;
        pathname: string;
        search: string;
        hash: string;
        title: string;
        language: string;
        userAgent: Record<string, any>;
        winScreen: string;
        docScreen: string;
      };
      time: number;
    }>
  >;

  @Prop()
  httpRecord: Array<{
    method: string;
    url: string | URL;
    body: Document | XMLHttpRequestBodyInit | null | undefined | ReadableStream;
    requestTime: number;
    requestTimeFormat: string;
    responseTime: number;
    responseTimeFormat: string;
    status: number;
    statusText: string;
    response?: any;
  }>;

  @Prop({ type: Object })
  extra: Record<string, any>;

  @Prop({ type: String, required: true })
  appId: string;

  @Prop(String)
  uid: string;

  @Prop({ type: Number, required: true })
  time: number;
}

export const UserActionSchema = SchemaFactory.createForClass(UserAction);
