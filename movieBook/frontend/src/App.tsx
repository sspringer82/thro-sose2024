import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { List } from './List';
import { Form } from './Form';

const router = createBrowserRouter([
  {
    path: '/',
    element: <List />,
  },
  {
    path: '/create',
    element: <Form />,
  },
  {
    path: '/edit/:id',
    element: <Form />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
