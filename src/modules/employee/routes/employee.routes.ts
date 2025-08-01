import { Router } from "express";
import { erroHandler } from "../../../shared/errors/errorHandler";
import { EmployeeServiceImpl } from "../services/EmployeeService";
import { EmployeeController } from "../controller/EmployeeController";
import { CompanyServiceImpl } from '../../company/services/CompanyService';
import { InMemoryEmployeeRepository } from "../repositories/InMemoryEmployeeRepository";

const router = Router();


const companyService = new CompanyServiceImpl(employeeRepository);

const employeeRepository = new InMemoryEmployeeRepository
const employeeService = new EmployeeServiceImpl(employeeRepository, companyService);
const employeeController = new EmployeeController(employeeService);

router.post("/employee", (req, res, next) => employeeController.create(req, res, next));
router.get("/employee", (req, res, next) => employeeController.findByCompanyId(req, res, next));
router.get("/employee/:id", (req, res, next) => employeeController.findById(req, res, next));
router.put("/employee/:id", (req, res, next) => employeeController.update(req, res, next));
router.delete("/employee/:id", (req, res, next) => employeeController.delete(req, res, next));

router.use(erroHandler);

export default router;