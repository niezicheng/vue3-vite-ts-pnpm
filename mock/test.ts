// mock.ts
import { MockMethod } from 'vite-plugin-mock';
export default [
  {
    url: '/api/get',
    method: 'get',
    response: ({ query }) => {
      return {
        code: 0,
        data: {
          name: 'test get'
        }
      };
    }
  },
  {
    url: '/api/post',
    method: 'post',
    timeout: 2000,
    response: {
      code: 0,
      data: {
        name: 'test post'
      }
    }
  }
] as MockMethod[];
