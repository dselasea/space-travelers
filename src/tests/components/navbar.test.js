import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Navbar from '../../components/navbar/Navbar';

describe('Navbar', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
  });

  it('renders correctly', () => {
    const { navbar } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    expect(navbar).toMatchSnapshot();
  });

  it('links to the correct paths', () => {
    const rocketsLink = screen.getByText('Rockets');
    const missionsLink = screen.getByText('Missions');
    const profilesLink = screen.getByText('My Profile');

    expect(rocketsLink).toHaveAttribute('href', '/');
    expect(missionsLink).toHaveAttribute('href', '/missions');
    expect(profilesLink).toHaveAttribute('href', '/myprofile');
  });
});
