import { render, screen } from '@testing-library/react';
import Content from './Content';

test('initial render', () => {
  render(
    <Content>
      <div>test</div>
    </Content>,
  );

  expect(screen.getByText(/test/i)).toBeInTheDocument();
});
