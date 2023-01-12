import moment from 'moment';
import { NextPage } from 'next';
import React, { useCallback, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppThunkDispatch } from '../redux/types';
import styles from '../styles/Login.module.css';
import { Input, Button, IButtonRef, Video, Spinner } from 'forging-react';
import { login } from '../api/auth';
// import '../../public/css/bootstrap.min.css';
// import ReactPlayer from 'react-player';

const Login: NextPage = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const formRef = useRef<HTMLFormElement>(null);
  const loginBtn = useRef<HTMLButtonElement & IButtonRef>(null);
  const [isLoading, setLoading] = useState<Boolean>(false);
  const onLogin: React.FormEventHandler = useCallback(
    async (e) => {
      setLoading(true);
      if (formRef.current) {
        try {
          const params = {
            data: new FormData(formRef.current),
          };
          const response = await dispatch(login(params));
          setLoading(false);
        } catch (e: unknown) {
          console.error(e);
          setLoading(false);
        }
      }
    },
    [dispatch]
  );
  if (isLoading) {
    return (
      <div
        className="d-flex justify-cntent-center align-items-center"
        style={{ height: '100vh' }}
      >
        <Spinner loader />
      </div>
    );
  }
  return (
    <div className={styles.mainlogindiv}>
      <video
        loop
        autoPlay
        muted
        src={'/videos/bgvideo.mp4'}
        style={{
          position: 'absolute',
          zIndex: '-1',
          width: '100%',
          objectFit: 'cover',
          height: '100%',
        }}
      />

      <div className="container">
        <div className="row mt-5 mb-5">
          <div className="text-center">
            <img
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
            <img
              src="/images/minibot.png"
              className="img-fluid"
              style={{ height: '400px' }}
            />
          </div>
          <div className={`col-lg-5 ${styles.formdiv}`}>
            <form ref={formRef} onSubmit={onLogin} className={styles.loginform}>
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
                      type="floating"
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
                        htmlType="button"
                        ref={loginBtn}
                        onClick={onLogin}
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
