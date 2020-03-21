const jwt           = require('jsonwebtoken');
const requiredAuth  = require('../../middleware/requiredAuth');

const mockRequest = headers => ({
  headers
});

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe('requiredAuth middleware', () => {
  test('should 401 when authorization header is missing', async () => {
    const req = mockRequest({});
    const res = mockResponse();
    requiredAuth(req, res, () => {});
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      status: 401,
      success: false
    });
  });

  test('should 401 when jwt token is missing', async () => {
    const headers = {
      authorization: 'Bearer'
    };
    const req = mockRequest(headers);
    const res = mockResponse();
    requiredAuth(req, res, () => {});
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      status: 401,
      success: false
    });
  });

  test('should 401 when jwt verify is failed', async () => {
    const headers = {
      authorization: 'Bearer jwt-token'
    };
    const req = mockRequest(headers);
    const res = mockResponse();
    jwt.verify = jest.fn().mockImplementation(() => {
      throw new Error();
    });
    requiredAuth(req, res, () => {});
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      status: 401,
      success: false
    });
  });

  test('should go to main function when jwt token is correct', async () => {
    const headers = {
      authorization: 'Bearer jwt-token'
    };
    const req = mockRequest(headers);
    const res = mockResponse();
    jwt.verify = jest.fn();
    requiredAuth(req, res, () => {});
    expect(jwt.verify).toHaveBeenCalledTimes(1);
  });
});
