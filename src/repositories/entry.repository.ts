import { prisma } from "../lib/prisma";

export class EntryRepository {
    async findActiveEntriesById(id: number) {
        return await prisma.entries.findMany({
            where: {
                categoryId: id,
                deletedAt: null,
            },
        });
    }

    async findActiveEntriesByCategory(id: number) {
        return await prisma.entries.findMany({
            where: {
                categoryId: id,
                deletedAt: null,
            },
        });
    }

    async findActiveEntries() {
        return await prisma.entries.findMany({});
    }

    async createEntry(
        user: number,
        category: number,
        value: number,
        description: string
    ) {
        return await prisma.entries.create({
            data: {
                userId: user,
                categoryId: category,
                value: value,
                description: description,
            },
        });
    }
}
