import { Router } from "express";
import { CompanyController } from "../controller/CompanyController";
import { erroHandler } from "../../../shared/errors/errorHandler";


const router = Router();

const companyController = new CompanyController()

router.post("/", (req, res, next) => companyController.create(req,res,next))
router.get("/", (req, res, next) => companyController.findAll(req, res, next))
router.get("/:id", (req, res, next) => companyController.findById(req, res, next))
router.get("/cnpj/:cnpj", (req, res, next) => companyController.findByCnpj(req, res, next))
router.put("/:id", (req, res, next) => companyController.update(req, res, next))
router.delete("/:id", (req, res, next) => companyController.delete(req, res, next))

router.use(erroHandler)

export default router;