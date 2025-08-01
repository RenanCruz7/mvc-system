import { CompanyRepository } from "../../../interfaces/repositories/CompanyRepository";
import { CompanyService } from "../../../interfaces/services/CompanyService";
import { NotFoundError } from "../../../shared/errors/AppError";
import { CreateCompanyDTO } from "../dtos/CreateCompanyDTO";
import { UpdateCompanyDTO } from "../dtos/UpdateCompanyDTO";
import { Company } from "../models/Company";

export class CompanyServiceImpl implements CompanyService {

  constructor(private readonly companyRepository: CompanyRepository) {}
    async createCompany(createCompanyDTO: CreateCompanyDTO): Promise<any> {
        const company = await this.companyRepository.create(createCompanyDTO);
        return company;
    }
    async findAll(): Promise<Company[]> {
        const companys = await this.companyRepository.findAll();
        return companys;
    }
    async findByCnpj(cnpj: string): Promise<Company> {
        const company = await this.companyRepository.findByCnpj(cnpj);
        return company;
    }
    async findById(id: string): Promise<Company> {
        return await this.companyRepository.findById(id);
    }
    async delete(id: string): Promise<void> {
        const company = await this.companyRepository.findById(id);
        if (!company) {
            throw new NotFoundError('Company does not exist');
        }
        return await this.companyRepository.delete(id);
    }
    async update(id: string, updateCompanyDTO: UpdateCompanyDTO): Promise<Company> {
        const company = await this.companyRepository.findById(id);
        if (!company) {
            throw new NotFoundError('Company does not exist');
        }
        return await this.companyRepository.update(id, updateCompanyDTO);
    }

}