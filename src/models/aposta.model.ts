import { type } from "os";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity('apostas')
export class Apostas {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ name: "valor_aposta", type: "decimal", precision: 2, scale: 2 })
    valorDaAposta: number

    @Column({ type: 'varchar' })
    dataDaAposta: string

    @UpdateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}

