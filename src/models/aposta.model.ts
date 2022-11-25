
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity('aposta')
export class Aposta {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ name: "valor_aposta", type: "decimal", precision: 7, scale: 2 })
    valor_aposta: number

    @Column({ name: "data_aposta", type: 'datetime', nullable: true, })
    data_aposta: string

    @Column({ name: "user_id", type: 'int', unique: true })
    user_id: number

    @CreateDateColumn()
    criado_em: Date;

    @UpdateDateColumn()
    atualizado_em: Date;


}

