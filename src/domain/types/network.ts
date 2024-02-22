export type ReturnFunction<T = unknown> = {
  status: Status;
  message: string;
  data?: T;
};

export type Status = 'info' | 'warning' | 'error' | 'success';
