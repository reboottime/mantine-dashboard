import { useQuery } from '@tanstack/react-query';

import customerApi from 'services/customers';

import { CUSTOMERS_QUERY_KEY } from './queryKey';

export const useGetCustomers = () => {
  return useQuery({
    queryKey: [...CUSTOMERS_QUERY_KEY],
    queryFn: customerApi.getCustomers
  });
};

export const useGetCustomer = (id: string) => {
  return useQuery({
    queryKey: [...CUSTOMERS_QUERY_KEY, id],
    queryFn: () => customerApi.getCustomer(id)
  });
};
