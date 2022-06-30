import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux-states/configureStore';

import Rockets from '../rockets/Rockets';

describe('Testing Mission component', () => {
  render(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  );
  test('Testing the dom for success rendering elements on Mission component', () => {
    expect(screen.queryByTestId('rocketid')).toBeInTheDocument();
  });

  test('Testing the dom for non existing elemente on the page after rendering', () => {
    expect(screen.queryByTestId('nothing')).not.toBeInTheDocument();
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Rockets page="just for test">Rockets</Rockets>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
