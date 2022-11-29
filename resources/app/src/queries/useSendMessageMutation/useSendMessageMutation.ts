import axios, { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';

export interface Payload {
  name: string,
  email: string,
  message: string,
}

const sendMessage = async (payload: Payload) => {
  const { data } = await axios.post('/api/send-message', payload);

  return data;
};

export const useSendMessageMutation = (options?: UseMutationOptions<null, AxiosError, Payload, unknown>) => {
  return useMutation(
    sendMessage,
    options, 
  );
};
