import prisma from "@/lib/db";

export default async function getNavLinks(){
    const res = await prisma.category.findMany({
        orderBy: [
            {
                rank: 'asc'
            }
        ],
        include: {
            links: {
                orderBy: {
                    rank: 'asc'
                },
                where: {
                    public: true,
                    status: 1
                }
            }
        }
    })

    return res
}