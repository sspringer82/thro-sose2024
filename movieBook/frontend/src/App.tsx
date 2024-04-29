import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { List } from './Movies/List';
import { Form } from './Movies/Form';
import Login from './Auth/Login';

type Props = {
  children: React.ReactNode;
};

function CheckAuth({ children }: Props) {
  const token = localStorage.getItem('access_token');
  if (token) {
    return <>{children}</>;
  } else {
    return <Login />;
  }
}

const router = createBrowserRouter([
  {
    path: '/list',
    element: (
      <CheckAuth>
        <List />
      </CheckAuth>
    ),
  },
  {
    path: '/',
    element: (
      <CheckAuth>
        <List />
      </CheckAuth>
    ),
  },
  {
    path: '/create',
    element: (
      <CheckAuth>
        <Form />
      </CheckAuth>
    ),
  },
  {
    path: '/edit/:id',
    element: (
      <CheckAuth>
        <Form />
      </CheckAuth>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
