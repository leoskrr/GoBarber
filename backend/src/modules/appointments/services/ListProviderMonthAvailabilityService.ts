/* eslint-disable camelcase */
import { injectable, inject } from 'tsyringe';

// import User from '@modules/users/infra/typeorm/entities/User';

interface IRequest {
    user_id: string;
    month: number;
    year: number;
}

type IResponse = Array<{
    day: number;
    available: boolean;
}>;

@injectable()
class ListProviderMonthAvailabilityService {
    constructor() {}

    public async execute({
        user_id,
        year,
        month,
    }: IRequest): Promise<IResponse> {
        return [
            {
                day: 1,
                available: false,
            },
        ];
    }
}

export default ListProviderMonthAvailabilityService;
