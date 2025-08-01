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
router.post("/companies", (req, res, next) => companyController.create(req,res,next))
router.get("/companies", (req, res, next) => companyController.findAll(req, res, next))
router.get("/companies/:id", (req, res, next) => companyController.findById(req, res, next))
router.get("/companies/cnpj/:cnpj", (req, res, next) => companyController.findByCnpj(req, res, next))
router.put("/companies/:id", (req, res, next) => companyController.update(req, res, next))
router.delete("/companies/:id", (req, res, next) => companyController.delete(req, res, next))

export default router;