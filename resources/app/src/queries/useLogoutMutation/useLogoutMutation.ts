import axios, { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';

const logout = async () => {
  const { data } = await axios.post('/api/logout');

  return data;
};

export const useLogoutMutation = (options?: UseMutationOptions<null, AxiosError, void, unknown>) => {
  return useMutation(
    logout,
    options, 
  );
};
