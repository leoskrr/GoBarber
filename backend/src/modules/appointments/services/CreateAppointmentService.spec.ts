import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

describe('CreateAppointments', () => {
    it('should be able to create a new appointment', async () => {
        const fakeAppointmentsRepository = new FakeAppointmentsRepository();
        const createAppointment = new CreateAppointmentService(
            fakeAppointmentsRepository,
        );

        const appointment = await createAppointment.execute({
            date: new Date(),
            provider_id: '21232435',
        });

        expect(appointment).toHaveProperty('id');
        expect(appointment.provider_id).toBe('21232435');
    });

    // it('should not be able to create to appontments on the same time', () => {
    //     expect().toBe();
    // });
});
