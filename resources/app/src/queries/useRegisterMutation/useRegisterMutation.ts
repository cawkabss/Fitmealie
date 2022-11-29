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

const register = async (payload: Payload) => {
  const { data } = await axios.post('/api/login', payload);

  return data;
};

export const useRegisterMutation = (options?: UseMutationOptions<Response, AxiosError, Payload, unknown>) => {
  return useMutation(
    register,
    options, 
  );
};
