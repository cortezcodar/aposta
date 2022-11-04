import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn, } from "typeorm";


@Entity("usuarios")
export class User {


    @PrimaryGeneratedColumn()
    id: number

    @Column({ name: 'userId/user_id', type: 'int', unique: true })

    @Column({ name: 'name', type: 'varchar' })

    @Column({ name: 'email', type: 'varchar', unique: true })

    @Column({ name: 'caminho_da_foto', type: 'varchar', unique: true })

    @Column({ name: 'genero', type: 'varchar' })

    @Column({ name: 'password', type: 'varchar' })

    @UpdateDateColumn()
    "criado em": Date;

    @UpdateDateColumn()
    "atualizado_em": Date;





}