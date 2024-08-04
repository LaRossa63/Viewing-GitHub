import { FC, ReactNode } from 'react';
import { Link as MuiLink, LinkProps } from '@mui/material';

interface ILinkProps extends LinkProps {
  href: string;
  children: ReactNode;
}

export const Link: FC<ILinkProps> = ({ href, children }) => {
  return (
    <MuiLink
      href={href}
      target="_blank"
      sx={{ color: '#0064EB !important', textDecoration: 'none' }}
    >
      {children}
    </MuiLink>
  );
};
