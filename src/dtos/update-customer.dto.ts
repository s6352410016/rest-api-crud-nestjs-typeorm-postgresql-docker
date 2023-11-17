import { IsNotEmpty , IsString , IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateCustomerDto{
    @IsString()
    cust_name: string;

    @IsString()
    cust_address: string;

    @IsString()
    cust_tel: string;

    @Type(() => Number)
    @IsInt()
    cust_salary: number;
}