import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
  screen,
  waitFor
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';
import {
  ProductCreationModalForm,
  ProductUpdateModalForm
} from '../components/ProductActions';

describe('ProductCreationModalForm Component', () => {
  const props = {
    addProduct: jest.fn()
  };
  console.warn = jest.fn();

  afterEach(cleanup);

  test('should call addProduct one time when the form was filled correctly', async () => {
    render(<ProductCreationModalForm {...props} />);
    fireEvent.click(screen.getByText('Add Product'));
    fireEvent.change(screen.getByLabelText('Name'), {
      target: { value: 'Product Name' }
    });
    fireEvent.change(screen.getByLabelText('Price'), {
      target: { value: 84000 }
    });
    await act(async () => {
      fireEvent.click(screen.getByText('Submit'));
    });
    expect(props.addProduct).toHaveBeenCalledTimes(1);
  });

  test('should show error message when product name is missing', async () => {
    render(<ProductCreationModalForm {...props} />);
    fireEvent.click(screen.getByText('Add Product'));
    fireEvent.change(screen.getByLabelText('Name'), {
      target: { value: '' }
    });
    fireEvent.change(screen.getByLabelText('Price'), {
      target: { value: 10.25 }
    });
    await act(async () => {
      fireEvent.click(screen.getByText('Submit'));
    });
    await waitFor(() => {
      expect(
        screen.queryAllByText('Please input product name!')
      ).not.toBeNull();
    });
  });

  test('should show error message when product price is missing', async () => {
    render(<ProductCreationModalForm {...props} />);
    fireEvent.click(screen.getByText('Add Product'));
    fireEvent.change(screen.getByLabelText('Name'), {
      target: { value: 'SomeName' }
    });
    await act(async () => {
      fireEvent.click(screen.getByText('Submit'));
    });
    await waitFor(() => {
      expect(
        screen.queryAllByText('Please input product price!')
      ).not.toBeNull();
    });
  });
});

describe('ProductUpdateModalForm Component', () => {
  const props = {
    updateProduct: jest.fn(),
    data: {
      id: 1,
      name: 'PRS SE Custom 24 35th Anniversary',
      price: 31430,
      description: 'PRS-designed 85/15 TCI S humbucking pickups',
      createdAt: '2020-03-18T19:49:21.921Z',
      updatedAt: '2020-03-18T19:49:21.921Z'
    }
  };
  console.warn = jest.fn();

  afterEach(cleanup);

  test('should call updateProduct one time when the form was filled correctly', async () => {
    render(<ProductUpdateModalForm {...props} />);
    fireEvent.click(screen.getByText('Edit'));
    fireEvent.change(screen.getByLabelText('Name'), {
      target: { value: 'Product Name' }
    });
    fireEvent.change(screen.getByLabelText('Price'), {
      target: { value: 84000 }
    });
    await act(async () => {
      fireEvent.click(screen.getByText('Submit'));
    });
    expect(props.updateProduct).toHaveBeenCalledTimes(1);
  });

  test('should show error message when product name is missing', async () => {
    render(<ProductUpdateModalForm {...props} />);
    fireEvent.click(screen.getByText('Edit'));
    fireEvent.change(screen.getByLabelText('Price'), {
      target: { value: 84000 }
    });
    await act(async () => {
      fireEvent.click(screen.getByText('Submit'));
    });
    await waitFor(() => {
      expect(
        screen.queryAllByText('Please input product name!')
      ).not.toBeNull();
    });
  });

  test('should show error message when product price is missing', async () => {
    render(<ProductUpdateModalForm {...props} />);
    fireEvent.click(screen.getByText('Edit'));
    fireEvent.change(screen.getByLabelText('Name'), {
      target: { value: 'SomeName' }
    });
    await act(async () => {
      fireEvent.click(screen.getByText('Submit'));
    });
    await waitFor(() => {
      expect(
        screen.queryAllByText('Please input product price!')
      ).not.toBeNull();
    });
  });
});
