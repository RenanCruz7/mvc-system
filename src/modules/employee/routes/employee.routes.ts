import { Router } from "express";
import { erroHandler } from "../../../shared/errors/errorHandler";

const router = Router();

const employeeController = new EmployeeController();

router.post("/employee", (req, res, next) => employeeController.create(req, res, next));
router.get("/employee", (req, res, next) => employeeController.findByCompanyId(req, res, next));
router.get("/employee/:id", (req, res, next) => employeeController.findById(req, res, next));
router.put("/employee/:id", (req, res, next) => employeeController.update(req, res, next));
router.delete("/employee/:id", (req, res, next) => employeeController.delete(req, res, next));

router.use(erroHandler);

export default router;