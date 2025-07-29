import { Router } from "express";
import { CompanyController } from "../controller/CompanyController";
import { erroHandler } from "../../../shared/errors/errorHandler";


const router = Router();

const companyController = new CompanyController()

router.post("/", (req, res, next) => companyController.create(req,res,next))

router.use(erroHandler)

export default router;