import { asyncHandler } from './../../../shared/errors/errorHandler';
import { Router } from "express";
import { CompanyController } from "../controller/CompanyController";
import { erroHandler } from "../../../shared/errors/errorHandler";
import { InMemoryCompanyRepository } from '../repositories/InMemoryCompanyRepository';
import { CompanyServiceImpl } from '../services/CompanyService';

const router = Router();

const companyRepository = new InMemoryCompanyRepository();
const companyService = new CompanyServiceImpl(companyRepository);
const companyController = new CompanyController(companyService);

// Removendo o prefixo /company das rotas, pois será adicionado no servidor principal
router.post("/companies", asyncHandler(companyController.create.bind(companyController)));
router.get("/companies", asyncHandler(companyController.findAll.bind(companyController)));
router.get("/companies/:id", asyncHandler(companyController.findById.bind(companyController)));
router.get("/companies/cnpj/:cnpj", asyncHandler(companyController.findByCnpj.bind(companyController)));
router.put("/companies/:id", asyncHandler(companyController.update.bind(companyController)));
router.delete("/companies/:id", asyncHandler(companyController.delete.bind(companyController)));

export default router;