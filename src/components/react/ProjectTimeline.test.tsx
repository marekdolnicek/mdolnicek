import { render, screen, fireEvent } from '@testing-library/react';
import ProjectTimeline, { type TimelineEntry } from './ProjectTimeline';

const entries: TimelineEntry[] = [
  {
    id: 'one',
    year: '2023',
    title: 'First',
    summary: 'First summary',
    stack: ['Astro']
  },
  {
    id: 'two',
    year: '2024',
    title: 'Second',
    summary: 'Second summary',
    stack: ['React']
  }
];

describe('ProjectTimeline', () => {
  it('renders initial entry details', () => {
    render(<ProjectTimeline entries={entries} />);
    expect(screen.getByText('First summary')).toBeInTheDocument();
  });

  it('switches active entry when selecting a new milestone', () => {
    render(<ProjectTimeline entries={entries} />);
    fireEvent.click(screen.getByText('Second'));
    expect(screen.getByText('Second summary')).toBeInTheDocument();
  });
});
