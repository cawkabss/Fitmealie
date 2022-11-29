import axios, { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';

export interface Payload {
  email: string,
  password: string,
}

export interface Response {
  user: {
    email: string,
  }
}

const login = async (payload: Payload) => {
  const { data } = await axios.post('/api/login', payload);

  return data;
};

export const useLoginMutation = (options?: UseMutationOptions<Response, AxiosError, Payload, unknown>) => {
  return useMutation(
    login,
    options, 
  );
};
