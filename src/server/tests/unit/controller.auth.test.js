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
      success: false
    });
  });

  test('should 401 when password is missing', async () => {
    const req = mockRequest({ username: 'siwakorn.ruenrit@gmail.com' });
    const res = mockResponse();
    await auth.login(req, res);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      status: 401,
      success: false
    });
  });

  test('should 401 when username is incorrect', async () => {
    const req = mockRequest({ username: 'siwakorn.ruenrit@gmail.com', password: '123456789' });
    const res = mockResponse();

    const spy = jest.spyOn(auth.login, 'models.User.findOne').mockResolvedValue(null)
    await auth.login(req, res);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      status: 401,
      success: false
    });
  });
});
