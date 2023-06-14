import HttpClient from 'whyfetch';

class CustomerApi extends HttpClient {
  getCustomer = (id: string) => {
    return this.get<Customer>({
      apiPath: `/customers/${id}`
    });
  };

  getCustomers = () => {
    return this.get<Customer[]>({
      apiPath: '/customers'
    });
  };
}

const customerApi = new CustomerApi('https://api.example.com/v1');

export default customerApi;
