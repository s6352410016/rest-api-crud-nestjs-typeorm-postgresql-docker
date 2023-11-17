import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCustomerDto } from 'src/dtos/create-customer.dto';
import { UpdateCustomerDto } from 'src/dtos/update-customer.dto';
import { Customer } from 'src/entities/customer.entity';
import { ResMsg } from 'src/interfaces/res-msg';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerService {
    constructor(@InjectRepository(Customer) private readonly customerRepository: Repository<Customer>){}

    async create(createCustomerDto: CreateCustomerDto): Promise<Customer>{
        try{
            const customer = this.customerRepository.create(createCustomerDto);
            return await this.customerRepository.save(customer);
        }catch(err){
            console.log(`error: ${err}`);
        }
    }

    async getAll(): Promise<Customer[] | ResMsg>{
        try{
            const customers = await this.customerRepository.find();
            if(customers.length === 0){
                return {
                    msg: "customer not found."
                }
            }

            return customers;
        }catch(err){
            console.log(`error: ${err}`);
        }
    }

    async getById(id: number): Promise<Customer | ResMsg>{
        const customer = await this.customerRepository.findOne({
            where: {
                id
            }
        });
        if(!customer){
            return {
                msg: "customer not found."
            }
        }

        return customer;
    }

    async update(updateCustomerDto: UpdateCustomerDto , id: number): Promise<Customer | ResMsg>{
        try{
            const customer = await this.customerRepository.findOne({
                where: {
                    id
                }
            });
            if(!customer){
                return {
                    msg: "customer not found."
                }
            }
            
            Object.assign(customer , updateCustomerDto);
            await this.customerRepository.update(id , updateCustomerDto);
            return customer;
        }catch(err){
            console.log(`error: ${err}`);
        }
    }

    async delete(id: number): Promise<ResMsg>{
        try{
            const customer = await this.customerRepository.findOne({
                where: {
                    id
                }
            });
            if(!customer){
                return {
                    msg: "customer not found."
                }
            }

            await this.customerRepository.delete(id);
            return {
                msg: "customer deleted successfully."
            }
        }catch(err){
            console.log(`error: ${err}`);
        }
    }
}
