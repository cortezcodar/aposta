import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn, } from "typeorm";


@Entity("usuarios")
export class User {


    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'varchar' })
    name: string

    @Column({ type: 'varchar', unique: true })
    email: string

    @Column({ type: 'varchar', unique: true })
    caminhodafoto: string

    @Column({ type: 'varchar' })
    genero: string

    @Column({ type: 'varchar' })
    password: string

    @UpdateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;





}