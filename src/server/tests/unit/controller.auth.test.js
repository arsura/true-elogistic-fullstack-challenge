const bcrypt  = require('bcrypt');
const jwt     = require('jsonwebtoken');
const auth    = require('../../controller/auth');
const models  = require('../../models');

const mockRequest = body => ({
  body
});

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe('login', () => {
  test('should 401 when username is missing', async () => {
    const req = mockRequest({ password: '123456789' });
    const res = mockResponse();
    await auth.login(req, res);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      status: 401,
      success: false,
      message: 'username or password is missing'
    });
  });

  test('should 401 when password is missing', async () => {
    const req = mockRequest({ username: 'siwakorn.ruenrit@gmail.com' });
    const res = mockResponse();
    await auth.login(req, res);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      status: 401,
      success: false,
      message: 'username or password is missing'
    });
  });

  test('should 401 when username is incorrect', async () => {
    const req = mockRequest({ username: 'siwakorn.ruenrit@gmail.com', password: '123456789' });
    const res = mockResponse();
    models.User.findOne = jest.fn().mockReturnValue(null);
    await auth.login(req, res);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      status: 401,
      success: false,
      message: "username or password is incorrect"
    });
  });

  test('should 401 when password is incorrect', async () => {
    const req = mockRequest({ username: 'siwakorn.ruenrit@gmail.com', password: '123456789' });
    const res = mockResponse();
    models.User.findOne = jest.fn().mockReturnValue('siwakorn');
    bcrypt.compare = jest.fn().mockReturnValue(false);
    await auth.login(req, res);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      status: 401,
      success: false,
      message: "username or password is incorrect"
    });
  });

  test('should 200 when username and password is correct', async () => {
    const req = mockRequest({ username: 'siwakorn.ruenrit@gmail.com', password: '123456789' });
    const res = mockResponse();
    models.User.findOne = jest.fn().mockReturnValue('siwakorn');
    bcrypt.compare = jest.fn().mockReturnValue(true);
    jwt.sign = jest.fn().mockReturnValue('sometoken');
    await auth.login(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      status: 200,
      success: true,
      token: "sometoken"
    });
  });
});