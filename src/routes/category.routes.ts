import { FastifyInstance } from "fastify";
import { CategoryController } from "../controllers/category.controller";

export async function CategoryRoutes(app: FastifyInstance) {
    app.post("/categories", CategoryController.createCategory);
    app.get("/categories", CategoryController.getAllCategories);
}
