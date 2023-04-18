import prismaClient from "../../prisma";


interface OrderRequest {
    order_id: string;
}

class RemoveOrderService {

    async execute({order_id}: OrderRequest){
        
        const orderDelete = await prismaClient.order.delete({
            where: {
                id: order_id
            }
        })

        return orderDelete;
    }

}

export { RemoveOrderService }