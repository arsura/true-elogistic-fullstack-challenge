const bcrypt  = require('bcrypt');
const models  = require('../../models');
const user    = require('../../controller/user');
const schema  = require('../../schema/controller.user');

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
  test('should 400 when schema validation failed', async () => {
    const mockUser = {
      firstName: 'siwakorn',
      lastName: 'ruenrit',
      email: 'siwakorn@gmail.com',
      password: '123456789'
    };
    const req = mockRequest(mockUser);
    const res = mockResponse();
    schema.create.validateAsync = jest.fn(() => Promise.reject('error'));
    bcrypt.hash = jest.fn();
    models.User.create = jest.fn();
    await user.create(req, res);
    expect(bcrypt.hash).toHaveBeenCalledTimes(0);
    expect(models.User.create).toHaveBeenCalledTimes(0);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      status: 400,
      success: false,
      error: 'error'
    });
  });

  test('should 400 when create failed', async () => {
    const mockUser = {
      firstName: 'siwakorn',
      lastName: 'ruenrit',
      email: 'siwakorn@gmail.com',
      password: '123456789'
    };
    const req = mockRequest(mockUser);
    const res = mockResponse();
    schema.create.validateAsync = jest.fn(() => Promise.resolve('pass'));
    bcrypt.hash = jest.fn().mockReturnValue('hash');
    models.User.create = jest.fn(() => Promise.reject('error'));
    await user.create(req, res);
    expect(bcrypt.hash).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      status: 400,
      success: false,
      error: 'error'
    });
  });

  test('should 201 when create success', async () => {
    const mockUser = {
      firstName: 'siwakorn',
      lastName: 'ruenrit',
      email: 'siwakorn@gmail.com',
      password: '123456789'
    };
    const req = mockRequest(mockUser);
    const res = mockResponse();
    schema.create.validateAsync = jest.fn(() => Promise.resolve('pass'));
    bcrypt.hash = jest.fn().mockReturnValue('hash');
    models.User.create = jest.fn(() => Promise.resolve('inserted'));
    await user.create(req, res);
    expect(bcrypt.hash).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      status: 201,
      success: true,
      data: mockUser
    });
  });
});
