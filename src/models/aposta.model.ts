import { type } from "os";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity('apostas')
export class Aposta {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ name: "valor_aposta", type: "decimal", precision: 2, scale: 2 })
    valor_aposta: number

    @Column({ name: 'data_aposta', type: 'datetime', nullable: true, })
    data_aposta: string

    @Column({ name: "user_id", type: 'uuid' })
    user_id: number

    @UpdateDateColumn()
    criado_em: Date;

    @UpdateDateColumn()
    atualizado_em: Date;


}

