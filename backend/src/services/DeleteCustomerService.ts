import prismClient from "../prisma"

interface DeleteCustomerProps {
    id: string;
}

class DeleteCustomerService {
    async execute({id}: DeleteCustomerProps) {

        if (!id) {
            throw new Error("Solicitação Invalída.")
        }

        const findCustomer = await prismClient.customer.findFirst({
            where: {
                id: id
            }
        })

        if(!findCustomer) {
            throw new Error("Cliente nao existe!")
        }

        await prismClient.customer.delete({
            where: {
                id: findCustomer.id
            }
        })

        return {message: "Deletado com sucesso!"}
    }
}

export { DeleteCustomerService } 