import prismClient from "../prisma";

interface CreateCustumerProps{
    name: string;
    email: string;
}

class CreateCustomerServices{
    async execute({name, email}: CreateCustumerProps)  {
        
        if(!name || !email) {
            throw new Error("Preencha todos os campos")
        }

        const customer = await prismClient.customer.create({
            data:{
                name,
                email,
                status: true
            }
        })

        return customer
    }
}

export {CreateCustomerServices}