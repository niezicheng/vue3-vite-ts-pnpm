import { defHttp } from '@/utils/http';

enum Api {
  // 测试接口
  Test = '/api/sug?code=utf-8&q=电脑',
  Get = '/api/get',
  Post = '/api/post'
}

/**
 * @description: 测试线上接口
 */
export const TestApi = () =>
  defHttp.request({
    url: Api.Test,
    method: 'GET'
  });

/**
 * @description: 测试 mock get 方法
 */
export const MockGet = () => defHttp.get({ url: Api.Get });

/**
 * @description: 测试 mock post 方法
 */
export const MockPost = () => defHttp.post({ url: Api.Post });
