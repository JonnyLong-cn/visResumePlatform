import React, { useEffect } from 'react';
import { shell } from 'electron';
import { RootContainer } from './style';
import Logo from '@assets/images/logo.png';
import { useHistory } from 'react-router';
import { ROUTER_ENTRY } from '@common/constants/router';
import { isHttpOrHttpsUrl } from '@src/common/utils/router';
import { useSelector, useDispatch } from 'react-redux';

function Root() {
  const dispatch = useDispatch();
  const appName = useSelector((state: any) => state.globalModel.appName);

  useEffect(() => {
    setTimeout(() => {
      console.log('3s后被修改');
      const action = {
        type: 'globalModel/setStore',
        payload: {
          key: 'appName',
          values: 'visResumePlatform'
        }
      };
      dispatch(action);
    }, 3000);
  }, []);

  useEffect(() => {
    console.log('appName = ', appName);
  }, [appName]);

  const history = useHistory();
  const onRouterToLink = (router: TSRouter.Item) => {
    if (!isHttpOrHttpsUrl(router.url)) {
      history.push(router.url);
    } else {
      // electron 提供一个 shell 模块，它模块提供与桌面集成相关的功能
      // 通过 shell 模块，打开默认浏览器，进入 github
      shell.openExternal(router.url);
    }
  }
  return (
    <RootContainer className="id">
      <div className="container">
        <img src={Logo} alt="" />
        <div className="title">龙猫简历</div>
        <div className="tips">一个模板简历制作平台, 让你的简历更加出众 ~</div>
        <div className="action">
          {
            ROUTER_ENTRY.map((router: TSRouter.Item) => {
              return (
                <div
                  key={router.key}
                  className="item"
                  onClick={() => onRouterToLink(router)}
                >
                  {router.text}
                </div>
              )
            })
          }
        </div>
        <footer>
          <p className="copyright">
            Copyright © 2018-{new Date().getFullYear()} All Rights Reserved. Made By Jonny Long.
          </p>
        </footer>
      </div>
    </RootContainer>
  )
}
export default Root;