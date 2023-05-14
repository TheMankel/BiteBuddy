import { Box } from '@mui/material';
import Copyright from '../Copyright/Copyright';

const Footer = () => {
  const authors = [
    { name: 'Jakub Jankowski', url: 'https://github.com/TheMankel' },
  ];

  return (
    <Box
      component='footer'
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[100],
      }}>
      <Copyright authors={authors} />
    </Box>
  );
};

export default Footer;
