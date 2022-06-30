import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "../../../redux-states/configureStore";

import Missions from '../Missions';

describe('Testing Mission component', () => {
  render(<Provider store={store}>
    <Missions />
  </Provider>);
  test('Testing the dom for success rendering elements on Mission component', () => {
    expect(screen.queryByTestId('missionsContent')).toBeInTheDocument();
  });

})