import { screen, cleanup, render } from '@testing-library/react';
import renderer from 'react-test-renderer'
import Todo from '../Todo';

afterEach(()=>{
  cleanup();
})

test("todo item should be false =>", () => {
  const todo = { id: 0, title: 'wash dishes', complete: false };
  render(<Todo todo={todo}/>);
  const todoElement = screen.getByTestId('todo-0');
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent('wash dishes');
})

test("todo item should be true =>", () => {
  const todo = { id: 1, title: 'wash car', complete: true };
  render(<Todo todo={todo}/>);
  const todoElement = screen.getByTestId('todo-1');
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent('wash car');
})

test("matches snapshot", ()=> {
  const todo = { id: 1, title: 'wash car', complete: true };
  const tree = renderer.create(<Todo todo={todo} />);
  expect(tree).toMatchSnapshot();
})