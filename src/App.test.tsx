import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Application tests', () => {
  it('renders page', () => {
    render(<App />);
    expect(screen.getByText('Onboarding Tracker')).toBeInTheDocument();
  });

  it('redirects to user/1', () => {
    render(<App />);
    expect(window.location.pathname).toBe('/users/1');
  });

})