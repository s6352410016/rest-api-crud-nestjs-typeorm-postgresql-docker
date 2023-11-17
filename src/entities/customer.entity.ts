import { Entity , PrimaryGeneratedColumn , Column , CreateDateColumn , UpdateDateColumn } from 'typeorm';

@Entity({name: "customer_tb"})
export class Customer{
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar")
    cust_name: string;

    @Column("varchar")
    cust_address: string;

    @Column("varchar")
    cust_tel: string;

    @Column("int")
    cust_salary: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}