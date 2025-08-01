import { Router } from "express";
import { asyncHandler, erroHandler } from "../../../shared/errors/errorHandler";
import { EmployeeServiceImpl } from "../services/EmployeeService";
import { EmployeeController } from "../controller/EmployeeController";
import { CompanyServiceImpl } from '../../company/services/CompanyService';
import { InMemoryEmployeeRepository } from "../repositories/InMemoryEmployeeRepository";
import { InMemoryCompanyRepository } from "../../company/repositories/InMemoryCompanyRepository";

const router = Router();

const companyRepository = new InMemoryCompanyRepository();
const companyService = new CompanyServiceImpl(companyRepository);

const employeeRepository = new InMemoryEmployeeRepository
const employeeService = new EmployeeServiceImpl(employeeRepository, companyService);
const employeeController = new EmployeeController(employeeService);

router.post("/employee", asyncHandler(employeeController.create.bind(employeeController)));
router.get("/employee", asyncHandler(employeeController.findByCompanyId.bind(employeeController)));
router.get("/employee/:id", asyncHandler(employeeController.findById.bind(employeeController)));
router.put("/employee/:id", asyncHandler(employeeController.update.bind(employeeController)));
router.delete("/employee/:id", asyncHandler(employeeController.delete.bind(employeeController)));

router.use(erroHandler);

export default router;