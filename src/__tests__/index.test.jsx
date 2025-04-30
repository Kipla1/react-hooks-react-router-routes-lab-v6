import '@testing-library/jest-dom';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { routes } from '../routes';


test('renders the Home component on route "/"', async () => {
  const router = createMemoryRouter(routes);
  render(<RouterProvider router={router} />);
  expect(await screen.findByText(/Home Page/)).toBeInTheDocument();
});

test('renders the Movie component on route "/movie/:id"', async () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ['/movie/1']
  });
  render(<RouterProvider router={router} />);
  expect(await screen.findByText(/Doctor Strange/)).toBeInTheDocument();
});