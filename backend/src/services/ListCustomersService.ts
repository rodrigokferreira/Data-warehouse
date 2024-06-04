import prismClient  from "../prisma";

class ListCustomersService{
    async execute(){
        const customers = await prismClient.customer.findMany();
        return customers;
    }
}

export {ListCustomersService};