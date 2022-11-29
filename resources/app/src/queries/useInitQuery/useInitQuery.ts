import axios, { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';

import { Package } from 'types/interfaces/Package';

interface Response {
  packages: Package[],
  user: {
    email: string,
  } | null,
}

const getInitData = async () => {
  const { data } = await axios.get<Response>('/api/init');

  return data;
};

export const useInitQuery = () => {
  return useQuery<Response, AxiosError>('init', getInitData)
};
