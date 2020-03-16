const product = require('../../controller/product');
const models  = require('../../models');

const mockRequest = (body, params) => ({
  body,
  params
});

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

const mockProduct = {
  name: 'PRS SE Custom 24 35th Anniversary',
  price: '31430.00',
  description: 'PRS-designed 85/15 TCI S humbucking pickups'
};

describe('find product', () => {
  test('should 200 when not found any product', async () => {
    const req = mockRequest({}, { id: 1 });
    const res = mockResponse();
    models.Product.findOne = jest.fn().mockReturnValue(null);
    await product.find(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      status: 200,
      success: true,
      data: null
    });
  });

  test('should 200 when found product', async () => {
    const req = mockRequest({}, { id: 1 });
    const res = mockResponse();
    models.Product.findOne = jest.fn().mockReturnValue(mockProduct);
    await product.find(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      status: 200,
      success: true,
      data: mockProduct
    });
  });
});

describe('findAll product', () => {
  test('should 200 when not found any products', async () => {
    const req = mockRequest({}, {});
    const res = mockResponse();
    models.Product.findAll = jest.fn().mockReturnValue([]);
    await product.findAll(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      status: 200,
      success: true,
      data: []
    });
  });

  test('should 200 when found products', async () => {
    const req = mockRequest({}, {});
    const res = mockResponse();
    models.Product.findAll = jest.fn().mockReturnValue([mockProduct]);
    await product.findAll(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      status: 200,
      success: true,
      data: [mockProduct]
    });
  });
});

describe('create product', () => {
  test('should 400 when create failed', async () => {
    const req = mockRequest(mockProduct, {});
    const res = mockResponse();
    models.Product.create = jest.fn(() => Promise.reject('error'));
    await product.create(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      status: 400,
      success: false,
      error: 'error'
    });
  });

  test('should 201 when create success', async () => {
    const req = mockRequest(mockProduct, {});
    const res = mockResponse();
    models.Product.create = jest.fn(() => Promise.resolve('inserted'));
    await product.create(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      status: 201,
      success: true
    });
  });
});

describe('update product', () => {
  test('should 400 when product id is undefined', async () => {
    const req = mockRequest(mockProduct, {});
    const res = mockResponse();
    await product.update(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      status: 400,
      success: false,
      message: 'id cannot be undefined'
    });
  });

  test('should 400 when update failed', async () => {
    const mockProduct = {
      id: 1,
      name: 'PRS SE Custom 24 35th Anniversary',
      price: '31430.00',
      description: 'PRS-designed 85/15 TCI S humbucking pickups'
    };
    const req = mockRequest(mockProduct, {});
    const res = mockResponse();
    models.Product.update = jest.fn(() => Promise.reject('error'));
    await product.update(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      status: 400,
      success: false
    });
  });

  test('should 204 when update success', async () => {
    const mockProduct = {
      id: 1,
      name: 'PRS SE Custom 24 35th Anniversary',
      price: '31430.00',
      description: 'PRS-designed 85/15 TCI S humbucking pickups'
    };
    const req = mockRequest(mockProduct, {});
    const res = mockResponse();
    models.Product.update = jest.fn(() => Promise.resolve('updated'));
    await product.update(req, res);
    expect(res.status).toHaveBeenCalledWith(204);
    expect(res.json).toHaveBeenCalledWith({
      status: 204,
      success: true
    });
  });
});

describe('remove product', () => {
  test('should 400 when remove failed', async () => {
    const req = mockRequest({}, { id: 1 });
    const res = mockResponse();
    models.Product.destroy = jest.fn(() => Promise.reject('error'));
    await product.remove(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      status: 400,
      success: false
    });
  });

  test('should 204 when remove success', async () => {
    const req = mockRequest({}, { id: 1 });
    const res = mockResponse();
    models.Product.destroy = jest.fn(() => Promise.resolve('removed'));
    await product.remove(req, res);
    expect(res.status).toHaveBeenCalledWith(204);
    expect(res.json).toHaveBeenCalledWith({
      status: 204,
      success: true
    });
  });
});