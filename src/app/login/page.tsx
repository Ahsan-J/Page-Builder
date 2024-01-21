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
    <div className={styles.mainlogindiv}>

      <div className="container">
        <div className="row mt-5 mb-5">
          <div className="text-center">
            <Image
              className="logo-img"
              src={'images/arc-logo.gif'}
              style={{ width: '15%' }}
              alt=""
            />
          </div>
        </div>
        <div className="row" style={{ marginTop: '100px' }}>
          <div className="col-lg-2"></div>
          <div className={`col-lg-3 ${styles.logimgdiv}`}>
            <Image
              src="/images/minibot.png"
              className="img-fluid"
              style={{ height: '400px' }}
              alt=""
            />
          </div>
          <div className={`col-lg-5 ${styles.formdiv}`}>
            <form onSubmit={onLogin} className={styles.loginform}>
              <div className="row">
                <div className="col-lg-12">
                  <h5 className={`text-center ${styles.loginsigninheading}`}>
                    <span style={{ color: 'white', fontWeight: '300' }}>
                      {' '}
                      Welcome to The
                    </span>{' '}
                    ARC-CRM
                  </h5>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-10">
                  <div style={{ marginLeft: '60px' }}>
                    <label className={styles.inputlabel}>Email</label>
                    <Input
                      className={styles.inputfield}
                      name="email"
                      defaultValue="admin@ai.com"
                      htmlType="email"
                    />
                  </div>
                </div>
              </div>

              <div className="row" style={{marginTop:'30px'}}>
                <div className={`col-lg-10 ${styles.abcdef}`}>
                  <div style={{ marginLeft: '60px' }}>
                    <label className={styles.inputlabel}
                      style={{borderBottom:"none"}}
                    >Password</label>
                    <Input
                      className={styles.inputfield}
                      name="password"
                      defaultValue="aicrm2022"
                      htmlType="password"
                      floating
                    />
                  </div>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-lg-10">
                  <div style={{ marginLeft: '60px' }}>
                    <div className="text-center">
                      {' '}
                      <Button
                        className={styles.loginbtn}
                        htmlType="submit"
                      >
                        Login
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="col-lg-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
