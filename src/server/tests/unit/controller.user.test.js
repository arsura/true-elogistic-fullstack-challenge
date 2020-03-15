const models  = require('../../models');
const user    = require('../../controller/user');

const mockRequest = body => ({
  body
});

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe('create user', () => {
  test('should 201 when created successfully', async () => {
    const mockUser = {
      firstName: 'siwakorn',
      lastName: 'ruenrit',
      email: 'siwakorn@gmail.com',
      password: '123456789'
    };
    const req = mockRequest(mockUser);
    const res = mockResponse();
    models.User.create = jest.fn()
    await user.create(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      status: 201,
      success: true,
      data: mockUser
    });
  });
});
