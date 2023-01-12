import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useContext, useId, useMemo, useRef } from 'react';
import styles from './sidenav.module.css';
import LayoutContext from '../../../layout/layout.context';
import { toKebabCase } from '../../../helper/utility';
import { SideNavItem } from '../../../model/app';
import { Avatar, Collapse, Icon, useOutsideClick } from 'forging-react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/types';
import NavBar from '../NavBar';
import AccountPopup, {
  IAccountPopupInstance,
} from '../AccountPopup/AccountPopup';

const Profile = () => {
  const router = useRouter();
  const user = useSelector((store: RootState) => store.auth.user);
  const [state, dispatch] = useContext(LayoutContext);
  const onNavClick = () => dispatch({ fullSideNav: !state.fullSideNav });
  const accountPopupRef = useRef<IAccountPopupInstance>(null);

  const onClickOutside = useCallback((e: MouseEvent) => {
    accountPopupRef.current?.showPopup(false);
  }, []);

  const popupWrapperRef = useOutsideClick(onClickOutside);
  
  return (
    <div className="container">
      <div
        className={`${styles.main__sideNav} ${
          !state.fullSideNav ? styles.sideNav__collapsed : ''
        }`}
        style={{
          position: 'fixed',
          bottom: '0px',

        }}
      >
        <div
          className={`row rounded ${styles.main__sideNav} ${
            !state.fullSideNav ? styles.sideNav__collapsed : ''
          }`}
          style={{
            alignItems: 'center',
            bottom: '0px',
            margin: '0px',
            padding: '0px',
            height: '60px',
            marginBottom: '10px',
            width: '230px',
            background: 'linear-gradient(to right bottom, #6416ec, #33e0e0)',
          }}
        >
          <div
            className="col-lg-3"
            onClick={() => accountPopupRef.current?.showPopup((e) => !e)}
          >
            <Avatar
              name={user?.user_picture || ''}
              src={`${user?.path}${user?.user_picture}`}
              style={{
                fontSize: '2rem',
                height: '2.5rem',
                width: '2.5rem',
              }}
            />
          </div>
          <div className={`col-lg-6 mt-1 ${styles.userinfo}`}>
            <h6
              style={{
                marginTop: '10px',
                fontSize: '10px',
                color: '#fff',
                height: '1px',
                marginBottom: '0px',
              }}
            >
              {user?.user_name}
            </h6>
            <div className={`${styles.card_discription}`}>
              <p style={{ marginTop: '10px', fontSize: '10px', color: '#fff' }}>
                {user?.role_name}
              </p>
            </div>
          </div>
          <div className={`col-lg-2 ${styles.userinfo}`}>
            <Icon
              onClick={() => accountPopupRef.current?.showPopup((e) => !e)}
              style={{
                background: 'none',
                color: '#fff',
                textAlign: 'right',
              }}
              name="three-dots-vertical"
            />
          </div>
        </div>
      </div>
      <AccountPopup ref={accountPopupRef} />
    </div>
  );
};

export default Profile;
