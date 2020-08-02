/* eslint-disable camelcase */
import { getRepository, Repository, Not } from 'typeorm';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

import User from '../entities/User';

class UsersRepository implements IUsersRepository {
    private ormRepository: Repository<User>;

    constructor() {
        this.ormRepository = getRepository(User);
    }

    public async findById(id: string): Promise<User | undefined> {
        const user = await this.ormRepository.findOne(id);

        return user;
    }

    public async findByEmail(email: string): Promise<User | undefined> {
        const user = await this.ormRepository.findOne({
            where: {
                email,
            },
        });

        return user;
    }

    public async findAllProviders(except_user_id?: string): Promise<User[]> {
        let users: User[];

        if (except_user_id) {
            users = await this.ormRepository.find({
                where: {
                    id: Not(except_user_id),
                },
            });
        } else {
            users = await this.ormRepository.find();
        }

        return users;
    }

    public async create({
        email,
        name,
        password,
    }: ICreateUserDTO): Promise<User> {
        const user = this.ormRepository.create({
            email,
            name,
            password,
        });

        await this.ormRepository.save(user);

        return user;
    }

    public save(user: User): Promise<User> {
        return this.ormRepository.save(user);
    }
}

export default UsersRepository;
