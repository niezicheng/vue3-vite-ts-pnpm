import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from 'axios';
import axios from 'axios';

export class VAxios {
  private axiosInstance: AxiosInstance;

  private readonly options;

  constructor(options: any) {
    this.options = options;
    this.axiosInstance = axios.create(options);
    this.setupInterceptors();
  }

  private setupInterceptors() {
    // 请求拦截器
    this.axiosInstance.interceptors.request.use(
      config => {
        // TODO: 处理请求配置信息 如： config.headers.Authorization = `Bearer ${token}`;
        return config;
      },
      err => {
        return Promise.reject(err);
      }
    );

    // 响应拦截器
    this.axiosInstance.interceptors.response.use(
      response => {
        // TODO: 处理响应数据信息

        return response;
      },
      err => {
        const { response } = err;
        // TODO: 根据不同响应码给出相应错误提示信息

        return Promise.reject(response);
      }
    );
  }

  get<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'GET' });
  }

  post<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'POST' });
  }

  put<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'PUT' });
  }

  delete<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'DELETE' });
  }

  request<T = any>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.axiosInstance
        .request<any, AxiosResponse<any>>(config)
        .then(res => {
          resolve(res as unknown as Promise<T>);
        })
        .catch((err: Error | AxiosError) => {
          reject(err);
        });
    });
  }
}
