import { Body, Controller , Delete, Get, Param, Post, Put} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from 'src/entities/customer.entity';
import { CreateCustomerDto } from 'src/dtos/create-customer.dto';
import { UpdateCustomerDto } from 'src/dtos/update-customer.dto';
import { ResMsg } from 'src/interfaces/res-msg';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService){}

    @Post("create") 
    async create(@Body() createCustomerDto: CreateCustomerDto): Promise<Customer>{
        return this.customerService.create(createCustomerDto);
    }
    
    @Get("getall")
    async getAll(): Promise<Customer[] | ResMsg>{
        return this.customerService.getAll();
    }

    @Get("get/:id")
    async getById(@Param("id") id: number): Promise<Customer | ResMsg>{
        return this.customerService.getById(id);
    }

    @Put("update/:id")
    async update(@Body() updateCustomerDto: UpdateCustomerDto , @Param("id") id: number): Promise<Customer | ResMsg>{
        return this.customerService.update(updateCustomerDto , id);
    }

    @Delete("delete/:id")
    async delete(@Param("id") id: number): Promise<ResMsg>{
        return this.customerService.delete(id);
    }
}
