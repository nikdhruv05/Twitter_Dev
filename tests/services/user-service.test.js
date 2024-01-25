import UserService from '../../src/services/user-service.js';
import UserRepository from '../../src/repository/user-repository.js';

jest.mock('../../src/repository/user-repository.js');

describe('user service signup test', () => {
    test('Should successfully create an user', async() => {
        const data = {
            email: 'a@b.com',
            password: '123456'
        };
        (UserRepository.prototype.create).mockReturnValue({...data, createdAt: '2024-01-20', updatedAt: '2024-01-20'});
        const service = new UserService();
        const response = await service.signup();
        expect(response.email).toBe(data.email);
    });
});

