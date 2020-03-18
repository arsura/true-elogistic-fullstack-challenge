import React from 'react';
import { shallow } from 'enzyme';
import { render, fireEvent, screen } from '@testing-library/react';
import {
  ProductCreationModalForm,
  ProductUpdateModalForm
} from '../components/ProductActions';

describe('ProductCreationModalForm Component', () => {
  const props = {
    addProduct: jest.fn()
  };

  test('should render correctly', () => {
    const wrapper = shallow(<ProductCreationModalForm {...props} />);
    expect(wrapper.find('Button')).toHaveLength(2);
    expect(wrapper.find('Modal')).toHaveLength(1);
    expect(wrapper.find('Form')).toHaveLength(0);
    expect(wrapper.find('Form.Item')).toHaveLength(0);
  });

  test('user add new product', () => {
    render(<ProductCreationModalForm {...props} />);
    fireEvent.click(screen.getByText('Add Product'));
    fireEvent.change(screen.getByLabelText('Name'), {
      target: { value: 'SomeName' }
    });
    fireEvent.change(screen.getByLabelText('Price'), {
      target: { value: 10.25 }
    });
    fireEvent.click(screen.getByText('Submit'));
  });
});
