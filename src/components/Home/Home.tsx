import { Paper, Typography } from '@mui/material';

const Home = () => {
  return (
    <Paper
      variant='outlined'
      sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
      <Typography component='h1' variant='h4' align='center' gutterBottom>
        Bite Buddy
      </Typography>
      Here will be form component
    </Paper>
  );
};

export default Home;
