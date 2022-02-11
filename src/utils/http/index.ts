import type { AxiosRequestConfig } from 'axios';

import { merge } from 'lodash-es';
import { VAxios } from './Axios';
import { ContentTypeEnum } from './constant';

const createAxios = (opt?: Partial<AxiosRequestConfig>) => {
  return new VAxios(
    merge(
      {
        // baseURL: '',
        timeout: 10 * 1000,
        headers: { 'Content-Type': ContentTypeEnum.JSON }
      },
      opt || {}
    )
  );
};

// 类 VAxios 实例化
export const defHttp = createAxios();
