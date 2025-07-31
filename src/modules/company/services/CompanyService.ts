import { CompanyRepository } from "../../../interfaces/repositories/CompanyRepository";
import { CompanyService } from "../../../interfaces/services/CompanyService";
import { CreateCompanyDTO } from "../dtos/CreateCompanyDTO";
import { UpdateCompanyDTO } from "../dtos/UpdateCompanyDTO";
import { Company } from "../models/Company";

export class CompanyServiceImpl implements CompanyService {

  constructor(private readonly companyRepository: CompanyRepository) {}
    createCompany(createCompanyDTO: CreateCompanyDTO): Promise<any> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<any[]> {
        throw new Error("Method not implemented.");
    }
    findByCnpj(cnpj: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    update(id: string, data: Partial<UpdateCompanyDTO>): Promise<any> {
        throw new Error("Method not implemented.");
    }

}