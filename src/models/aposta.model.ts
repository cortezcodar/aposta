import { type } from "os";
import { Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity('apostas')
export class Apostas {

    @PrimaryGeneratedColumn('increment')
    id: number

    @PrimaryGeneratedColumn('uuid')
    valorDaAposta: number

    @PrimaryGeneratedColumn('uuid')
    dataDaAposta: string

    @UpdateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}

