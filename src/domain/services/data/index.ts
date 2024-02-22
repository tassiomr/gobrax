import { Status } from '../../types/network';

export default function formatBackendData<T>(
  statusCode: number,
  message: string,
  data?: T,
): {
  status: Status;
  message: string;
  data?: T;
} {
  let status: Status = 'info';

  switch (statusCode) {
    case 200:
    case 201:
      status = 'success';
      break;
    case 400:
    case 404:
    case 500:
      status = 'error';
      break;
    default:
      status = 'warning';
      break;
  }

  return {
    status,
    message,
    data,
  };
}
