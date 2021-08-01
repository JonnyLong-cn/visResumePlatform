import React from 'react';
import styled from 'styled-components';
import { ESButton } from './style';

export interface ButtonInterface {
  /**
   * @description 按钮大小
   */
  size?: 'middle' | 'big' | 'small';
  /**
   * @description 宽度
   */
  width?: number;
  /**
   * @description cursor是否失效
   */
  disabled?: boolean;
  /**
   * @description 自定义样式
   */
  style?: React.CSSProperties;
  /**
   * @description 子组件
   */
  children?: React.ReactNode | any;
  /**
   * @description 样式名
   */
  className?: string;
  /**
   * @description 点击事件
   */
  onClick?: Function;
  /**
   * @description 是否显示边框
   */
  border?: boolean;
}

function ResumeButton({
  size = 'small',
  style,
  width,
  disabled = true,
  children,
  className,
  onClick,
  border = true
}: ButtonInterface) {
  return (
    <ESButton
      style={{
        ...style,
        width: width + 'px'
      }}
      className={className}
      theme={{ size, disabled, border }}
      onClick={() => {
        onClick && onClick();
      }}
    >{children}</ESButton>
  );
}

export default ResumeButton;