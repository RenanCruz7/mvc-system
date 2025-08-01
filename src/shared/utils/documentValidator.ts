import { cpf , cnpj } from 'cpf-cnpj-validator';

export class DocumentValidator {
    static validateCPF(value: string): boolean {
        return cpf.isValid(value);
    }

    static validateCNPJ(value: string): boolean {
        return cnpj.isValid(value);
    }
}