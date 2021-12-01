/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import axios from 'axios'

declare module 'axios' {
  interface AxiosInstance<ResultData> {
    (config: AxiosRequestConfig): Promise<ResultData>
  }
}
/* eslint-enable @typescript-eslint/no-explicit-any */
