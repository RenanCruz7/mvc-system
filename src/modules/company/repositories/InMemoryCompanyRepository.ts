import { CompanyRepository } from "../../../interfaces/repositories/CompanyRepository";
import { CreateCompanyDTO } from "../dtos/CreateCompanyDTO";
import { UpdateCompanyDTO } from "../dtos/UpdateCompanyDTO";
import { Company } from "../models/Company";
import { v4 as uuidv4 } from 'uuid';

export class InMemoryCompanyRepository implements CompanyRepository{
    private companys: Company[] = [];

    constructor() {
    }
    async findAll(): Promise<Company[]> {
        return this.companys;
    }

    async create(companyData: CreateCompanyDTO): Promise<Company> {
        const newCompany = {
            ...companyData,
            id: uuidv4(),
            createdAt: new Date(),
            updatedAt: new Date()
        }
        this.companys.push(newCompany);
        return newCompany;
    }

    async update(id: string, updateCompanyDTO: UpdateCompanyDTO): Promise<Company> {
        const companyIndex = this.companys.findIndex(company => company.id === id);
        if (companyIndex === -1) {
            throw new Error('Company does not exist');
        }
        const updatedCompany = {
            ...this.companys[companyIndex],
            ...updateCompanyDTO,
            updatedAt: new Date()
        };
        this.companys[companyIndex] = updatedCompany;
        return updatedCompany;
    }

    async findById(id: string): Promise<Company> {
        const company = this.companys.find(company => company.id === id);
        if (!company) {
            throw new Error('Company does not exist');
        }
        return company;
    }

    async delete(id: string): Promise<void> {
        const companyIndex = this.companys.findIndex(company => company.id === id);
        if (companyIndex === -1) {
            throw new Error('Company does not exist');
        }
        this.companys.splice(companyIndex, 1);
    }

    async findByCnpj(cnpj: string): Promise<Company> {
        const company = this.companys.find(company => company.cnpj === cnpj);
        if (!company) {
            throw new Error('Company does not exist');
        }
        return company;
    }
}