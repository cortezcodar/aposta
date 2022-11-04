import { type } from "os";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity('apostas')
export class Aposta {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ name: "valor_aposta", type: "decimal", precision: 2, scale: 2 })

    @Column({ name: 'data_aposta', type: 'datetime', nullable: true, })

    @UpdateDateColumn()
    "criado em": Date;

    @UpdateDateColumn()
    "atualizado_em": Date;


}

