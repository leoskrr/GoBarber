/* eslint-disable camelcase */
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderDayAvailability from '@modules/appointments/services/ListProviderDayAvailabilityService';

export default class ProvidersController {
    public async index(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { provider_id } = request.params;

        const { day, month, year } = request.query;

        const listProviderDayAvailability = container.resolve(
            ListProviderDayAvailability,
        );

        const availability = await listProviderDayAvailability.execute({
            provider_id,
            day: Number(day),
            month: Number(month),
            year: Number(year),
        });

        return response.json(availability);
    }
}
