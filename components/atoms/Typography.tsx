import * as React from 'react';
import clsx from 'clsx';

interface TypographyProps {
  className?: string;
}

const Typography: React.FC<React.PropsWithChildren<TypographyProps>> = ({ children, className }) => (
  <p className={clsx(className)}>{children}</p>
);

export default Typography;
