import { CompanyRepository } from "../../../interfaces/repositories/CompanyRepository";
import { CreateCompanyDTO } from "../dtos/CreateCompanyDTO";
import { UpdateCompanyDTO } from "../dtos/UpdateCompanyDTO";
import { Company } from "../models/Company";
import { v4 as uuidv4 } from 'uuid';


let companys: Company[] = [];
export class InMemoryCompanyRepository implements CompanyRepository{
   

    constructor() {
    }
    async findAll(): Promise<Company[]> {
        return companys;
    }

    async create(companyData: CreateCompanyDTO): Promise<Company> {
        const newCompany = {
            ...companyData,
            id: uuidv4(),
            createdAt: new Date(),
            updatedAt: new Date()
        }
        companys.push(newCompany);
        return newCompany;
    }

    async update(id: string, updateCompanyDTO: UpdateCompanyDTO): Promise<Company> {
        const companyIndex = companys.findIndex(company => company.id === id);
        if (companyIndex === -1) {
            throw new Error('Company does not exist');
        }
        const updatedCompany = {
            ...companys[companyIndex],
            ...updateCompanyDTO,
            updatedAt: new Date()
        };
        companys[companyIndex] = updatedCompany;
        return updatedCompany;
    }

    async findById(id: string): Promise<Company> {
        const company = companys.find(company => company.id === id);
        if (!company) {
            throw new Error('Company does not exist');
        }
        return company;
    }

    async delete(id: string): Promise<void> {
        const companyIndex = companys.findIndex(company => company.id === id);
        if (companyIndex === -1) {
            throw new Error('Company does not exist');
        }
        companys.splice(companyIndex, 1);
    }

    async findByCnpj(cnpj: string): Promise<Company | null> {
        const company = companys.find(company => company.cnpj === cnpj);
        return company || null;
    }
}