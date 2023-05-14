import { Box, CssBaseline, Container } from '@mui/material';
import Footer from '../components/Utils/Footer/Footer';

interface IChildrenProps {
  children: JSX.Element;
}

const AppLayout = ({ children }: IChildrenProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}>
      <CssBaseline />
      <Container component='main' maxWidth='sm'>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default AppLayout;
