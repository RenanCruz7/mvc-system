import { Request, Response } from 'express';
import { EmployeeService } from '../../../interfaces/EmployeeService';
export class EmployeeController {

    constructor(private readonly employeeService: EmployeeService) {}

    
}
