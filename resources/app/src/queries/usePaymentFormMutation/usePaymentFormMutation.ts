import axios, { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';

export interface Payload {
  package_id: number,
}

export interface Response {
  url: string
}

const getPaymentForm = async (payload: Payload) => {
  const { data } = await axios.post('/api/get-form', payload);

  return data;
};

export const usePaymentFormMutation = (options?: UseMutationOptions<Response, AxiosError, Payload, unknown>) => {
  return useMutation(
    getPaymentForm,
    options, 
  );
};
