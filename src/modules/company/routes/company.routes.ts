import { Router } from "express";
import { CompanyController } from "../controller/CompanyController";
import { erroHandler } from "../../../shared/errors/errorHandler";


const router = Router();

const companyController = new CompanyController()

router.post("/company", (req, res, next) => companyController.create(req,res,next))
router.get("/company", (req, res, next) => companyController.findAll(req, res, next))
router.get("/company/:id", (req, res, next) => companyController.findById(req, res, next))
router.get("/company/cnpj/:cnpj", (req, res, next) => companyController.findByCnpj(req, res, next))
router.put("/company/:id", (req, res, next) => companyController.update(req, res, next))
router.delete("/company/:id", (req, res, next) => companyController.delete(req, res, next))

router.use(erroHandler)

export default router;