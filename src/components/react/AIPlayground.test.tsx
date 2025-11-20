import { fireEvent, render, screen } from '@testing-library/react';
import AIPlayground, { type Idea } from './AIPlayground';

const ideas: Idea[] = [
  {
    id: 'one',
    title: 'Idea One',
    description: 'First idea description',
    impact: 'Impact one'
  },
  {
    id: 'two',
    title: 'Idea Two',
    description: 'Second idea description',
    impact: 'Impact two'
  }
];

describe('AIPlayground', () => {
  it('cycles through ideas', () => {
    render(<AIPlayground ideas={ideas} />);
    expect(screen.getByText('Idea One')).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText('Next AI idea'));
    expect(screen.getByText('Idea Two')).toBeInTheDocument();
  });
});
