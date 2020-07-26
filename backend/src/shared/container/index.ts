import { container } from 'tsyringe';

import '@modules/users/providers';
import './providers';

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

container.registerSingleton<IAppointmentsRepository>(
    'AppointmentsRepository', // ID
    AppointmentsRepository, // NAME
);

container.registerSingleton<IUsersRepository>(
    'UsersRepository', // ID
    UsersRepository, // NAME
);

container.registerSingleton<IUserTokensRepository>(
    'UserTokensRepository', // ID
    UserTokensRepository, // NAME
);
