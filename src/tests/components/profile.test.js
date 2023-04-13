import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import MyProfile from '../../components/profile/MyProfile';
import renderWithProviders from './utils';

describe('Profile page', () => {
  beforeEach(() => {
    renderWithProviders(
      <MemoryRouter>
        <MyProfile />
      </MemoryRouter>,
    );
  });

  it('renders correctly', () => {
    const { profile } = renderWithProviders(
      <MemoryRouter>
        <MyProfile />
      </MemoryRouter>,
    );
    expect(profile).toMatchSnapshot();
  });

  it('headers are present in the document', () => {
    const missionsHeader = screen.getByText('My Missions');
    const rocketsHeader = screen.getByText('My Rockets');

    expect(missionsHeader).toBeInTheDocument();
    expect(rocketsHeader).toBeInTheDocument();
  });
});
