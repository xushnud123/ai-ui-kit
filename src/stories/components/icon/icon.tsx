import React from 'react';

import cls from './icon.module.scss';

export interface IconProps {
  children: React.ReactNode;
}

const Icon: React.FC<IconProps> = ({ children }) => (
  <div className={cls.wrapper}>{children}</div>
);

export default Icon;
