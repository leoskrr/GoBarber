import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import AuthenticateUserService from './AuthenticateUserService';
import CreateUserService from './CreateUserService';

describe('AuthenticateUser', () => {
    it('should be able to authenticate', async () => {
        const fakeUsersRepository = new FakeUsersRepository();

        const createUser = new CreateUserService(fakeUsersRepository);
        const authenticateUser = new AuthenticateUserService(
            fakeUsersRepository,
        );

        await createUser.execute({
            name: 'John Doe',
            email: 'johndoe@example.com',
            password: '12345',
        });

        const response = await authenticateUser.execute({
            email: 'johndoe@example.com',
            password: '12345',
        });

        expect(response).toHaveProperty('token');
    });
});
