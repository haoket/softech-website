import Axios, { AxiosRequestConfig } from 'axios';

import URLS from '@/constants/URLS';
import _ from 'lodash';
import { format } from 'path';

export const axios = Axios.create({
  baseURL: URLS.baseApiUrl,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Basic 12C1F7EF9AC8E288FBC2177B7F54D',
    ApplicationName: 'Office',
  },
});

axios.interceptors.request.use((config: AxiosRequestConfig | any) => {
  // console.log("❤❤❤", config);
  return config;
});

axios.interceptors.response.use(
  (response) => {
    const replaceData = response.data.results?.map((c: any) => {
      return {
        ...c,
        imagePath: _.replace(c.imagePath, new RegExp('~/', 'g'), URLS.baseCdnUrl + '/'),
        mobileImagePath: _.replace(c.mobileImagePath, new RegExp('~/', 'g'), URLS.baseCdnUrl + '/'),
        body: _.replace(c.body, new RegExp('/ckfinder/', 'g'), URLS.baseCdnUrl + '/ckfinder/').replace(new RegExp('/UserFiles/', 'g'), URLS.baseCdnUrl + '/UserFiles/'),
        imageUrl: c.moduleID == 'e51325e9-cd4f-47af-ba0f-dd70d6946800' ? _.replace(c.imageUrl, new RegExp('~/Data/Members/Images/', 'g'), 'https://aptech-danang.edu.vn/Data/Members/Images/') : null,
      };
    });
    return replaceData;
  },
  (error) => {
    const message = error.response?.data?.message || error?.message;
    // console.error("😜💖💖😜", message);
    return Promise.reject(error);
  },
);
