import { axios } from '@/libraries/axios';
import { DynamicQueryParamter, QueryParamter } from 'Types';

export const dynamicQuery = <T>(data: DynamicQueryParamter): Promise<T[]> => {
  return axios.options('/api/v1.0/dynamic/crud', {
    data,
  });
};

export const query = <T>(data: QueryParamter): Promise<T[]> => {
  return axios.post('/api/v1.0/dynamic/query', data);
};

export const first = <T>(data: QueryParamter): Promise<T[]> => {
  return axios.post('/api/v1.0/dynamic/query/first', data);
};
