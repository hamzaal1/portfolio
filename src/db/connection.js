const { PrismaClient } = require("@prisma/client");

export default new PrismaClient({
    log: ['query', 'info', 'warn'],
})


