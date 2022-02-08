import React from 'react';
import { render, screen } from '@testing-library/react';
import { Task } from './index';

describe('Task component tests', () => {
  it('renders task', () => {
    render(<Task title='Test title' isCompleted={false} />);
    expect(screen.getByText('Test title')).toBeInTheDocument();
  });
  
  it('call onComplete', () => {
    let isCompleted = false
    const onComplete = () => {
      isCompleted = true
    }
    render(<Task title='Test title' isCompleted={isCompleted} onComplete={onComplete} />);
    const checkbox = screen.getByTestId('task-status-switcher')
    checkbox.click()
    expect(isCompleted).toBe(true)
  });

})