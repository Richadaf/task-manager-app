import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskManager from '../components/TaskManager';

describe('TaskManager', () => {
  test('renders the heading "Add Task"', () => {
    render(<TaskManager />);
    const heading = screen.getByRole('heading', { level: 2, name: /add task/i });
    expect(heading).toBeInTheDocument();
  });
});
