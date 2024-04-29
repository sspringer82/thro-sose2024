import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Card, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

type LoginFormInputs = {
  username: string;
  password: string;
};

const Login: React.FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = async (data: LoginFormInputs) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      console.error('Login failed');
    } else {
      const { access_token } = await response.json();
      localStorage.setItem('access_token', access_token);
      navigate('/', { replace: true });
    }
  };

  return (
    <Card>
      <h1>Anmeldung</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="login">
        <TextField
          label="Username"
          {...register('username', { required: 'Username is required' })}
          error={!!errors.username}
          helperText={errors.username?.message}
        />
        <TextField
          label="Password"
          type="password"
          {...register('password', { required: 'Password is required' })}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
    </Card>
  );
};

export default Login;
