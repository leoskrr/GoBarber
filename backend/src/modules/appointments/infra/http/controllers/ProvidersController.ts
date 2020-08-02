import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProvidersService from '@modules/appointments/services/ListProvidersService';

export default class ProvidersController {
    public async index(
        request: Request,
        response: Response,
    ): Promise<Response> {
        // eslint-disable-next-line camelcase
        const user_id = request.user.id;

        const listProviders = container.resolve(ListProvidersService);

        const providers = await listProviders.execute({
            user_id,
        });

        return response.json(providers);
    }
}
