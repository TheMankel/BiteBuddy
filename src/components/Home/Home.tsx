import { Paper, Typography } from '@mui/material';
import ProductsForm from './ProductsForm/ProductsForm';

const Home = () => {
  return (
    <Paper elevation={3} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
      <Typography
        component='h1'
        variant='h4'
        align='center'
        fontWeight={700}
        color='text.primary'>
        Bite Buddy
      </Typography>
      <Typography
        component='p'
        variant='h5'
        align='center'
        color='text.secondary'
        gutterBottom>
        Fill out the form to place your order
      </Typography>
      <ProductsForm />
    </Paper>
  );
};

export default Home;
