'use client'

import { NextPage } from 'next';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { AppThunkDispatch } from '@/redux';
import styles from './login.module.css';
import { Input, Button, Image } from 'forging-react';
import { login } from '../../api/auth';

const Login: NextPage = () => {
  const dispatch = useDispatch<AppThunkDispatch>();

  const onLogin: React.FormEventHandler<HTMLFormElement> = useCallback(async (e) => {
    e.preventDefault();
      if (e.currentTarget) {
        try {
          const params = {
            data: new FormData(e.currentTarget),
          };
          const response = await dispatch(login(params));
        } catch (e: unknown) {
          console.error(e);
        }
      }
    },
    [dispatch]
  );

  return (
    <div className='h-dvh w-dvw bg-light flex flex-row items-center justify-center'>
      <form className='h-[30rem] w-[25rem] shadow-lg shadow-gray-300 flex flex-col justify-between px-6 py-12'>
        <Image className='!w-60 !h-min self-center' src="/ba9a7cbd.jpg" alt="main_logo" />
        <div className='flex flex-col'>
          <Input floating label='Email address'/>
          <Input floating label='Password'/>
        </div>
        <div className='flex flex-row items-center justify-between'>
          <Button type='link' className='!px-1 hover:!bg-transparent hover:!text-dark'>Forgot Password?</Button>
          <Button>Login</Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
