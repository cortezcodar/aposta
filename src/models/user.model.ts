import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn, } from "typeorm";


@Entity("usuarios")
export class User {


    @PrimaryGeneratedColumn()
    id: number

    @Column({ name: 'name', type: 'varchar' })
    name: string

    @Column({ name: 'email', type: 'varchar', unique: true })
    email: string

    @Column({ name: 'caminho_da_foto', nullable: true, unique: true })
    caminho_da_foto: string

    @Column({ name: 'genero', nullable: true, })
    genero: string

    @Column({ name: 'password', type: 'varchar', nullable: true })
    password: string

    @CreateDateColumn()
    criado_em: Date;

    @UpdateDateColumn()
    atualizado_em: Date;





}