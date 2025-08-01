export interface CreateEmployeeDTO {
    email: string;
    name: string;
    position: string;
    salary: number;
    companyId: string;
    cpf: string;
    createdAt: Date;
    updatedAt: Date;
}