import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Header from '../../components/header/Header';

describe('Header', () => {
  it('renders correctly', () => {
    const { header } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    expect(header).toMatchSnapshot();
  });
});
