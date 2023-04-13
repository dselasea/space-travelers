import React from 'react';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import missionsReducer from '../../redux/missions/missionsSlice';
import rocketsReducer from '../../redux/rockets/rocketsSlice';

export default function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = configureStore({
      reducer: {
        missions: missionsReducer,
        rockets: rocketsReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
