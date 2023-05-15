import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Box, Grid, TextField, MenuItem, Button } from '@mui/material';
import { ProductType } from '../../../types/ProductType';

const ProductsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<ProductType>();

  const onSubmit: SubmitHandler<ProductType> = (data) => console.log(data);
  console.log(errors);

  const handleCancel = () => {
    reset();
  };

  const MenuItems = [
    { label: 'Pizza', value: 'pizza' },
    { label: 'Soup', value: 'soup' },
    { label: 'Sandwich', value: 'sandwich' },
  ];

  return (
    <Box component='form' onSubmit={handleSubmit(onSubmit)} noValidate>
      <Grid container spacing={3} marginBottom={3}>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id='name'
            label='Dish name'
            type='text'
            {...register('name', { required: true, minLength: 1 })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id='preparation_time'
            label='Preparation Time'
            type='time'
            inputProps={{
              step: 1,
            }}
            InputLabelProps={{ shrink: true }}
            {...register('preparation_time', { required: true })}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            control={control}
            name='type'
            rules={{ required: true }}
            defaultValue={''}
            render={({ field }) => (
              <TextField
                select
                fullWidth
                id='type'
                label='Dish Type'
                {...field}>
                {MenuItems.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button fullWidth variant='outlined' onClick={handleCancel}>
            Cancel
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button fullWidth variant='contained' type='submit'>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductsForm;
