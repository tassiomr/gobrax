export type ReturnFunction<T = unknown> = {
  statusCode: number;
  message: string;
  data?: T;
};
