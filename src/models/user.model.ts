import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn, } from "typeorm";


@Entity("usuarios")
export class User {


    @PrimaryGeneratedColumn()
    id: number

    @Column({ name: 'name', type: 'varchar' })
    name: string

    @Column({ name: 'email', type: 'varchar', unique: true })
    email: string

    @Column({ name: 'caminho_da_foto', type: 'varchar', unique: true })
    caminho_da_foto: string

    @Column({ name: 'genero', type: 'varchar' })
    genero: string

    @Column({ name: 'password', type: 'varchar' })
    password: string

    @UpdateDateColumn()
    criado_em: Date;

    @UpdateDateColumn()
    atualizado_em: Date;





}