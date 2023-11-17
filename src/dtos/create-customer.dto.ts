import { IsNotEmpty , IsString , IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCustomerDto{
    @IsNotEmpty()
    @IsString()
    cust_name: string;

    @IsNotEmpty()
    @IsString()
    cust_address: string;

    @IsNotEmpty()
    @IsString()
    cust_tel: string;

    @Type(() => Number)
    @IsInt()
    @IsNotEmpty()
    cust_salary: number;
}