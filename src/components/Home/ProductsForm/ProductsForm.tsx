import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Grid, TextField, MenuItem, Button } from '@mui/material';
import { ProductType } from '../../../types/ProductType';
import { ProductSchema } from '../../../schemas/ProductSchema';

const ProductsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors },
  } = useForm<ProductType>({
    resolver: yupResolver(ProductSchema),
  });
  const selectedType = watch('type');

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
    <Box component='form' mt={2} onSubmit={handleSubmit(onSubmit)} noValidate>
      <Grid container spacing={3} marginBottom={3}>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id='name'
            label='Dish name'
            type='text'
            {...register('name', { required: true, minLength: 1 })}
            error={!!errors.name?.message}
            helperText={errors.name?.message}
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
            error={!!errors.preparation_time?.message}
            helperText={errors.preparation_time?.message}
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
                error={!!errors.type?.message}
                helperText={errors.type?.message}
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
        {selectedType === 'pizza' && (
          <>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id='no_of_slices'
                label='Number Of Slices'
                type='number'
                inputProps={{ min: 1 }}
                {...register('no_of_slices', { required: true, min: 1 })}
                error={!!errors.no_of_slices?.message}
                helperText={errors.no_of_slices?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id='diameter'
                label='Diameter'
                type='number'
                inputProps={{ min: 0.1, step: 0.1 }}
                {...register('diameter', { required: true, min: 0.1 })}
                error={!!errors.diameter?.message}
                helperText={errors.diameter?.message}
              />
            </Grid>
          </>
        )}
        {selectedType === 'soup' && (
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id='spiciness_scale'
              label='Spiciness Scale'
              type='number'
              inputProps={{ min: 1, max: 10 }}
              {...register('spiciness_scale', {
                required: true,
                min: 1,
                max: 10,
              })}
              error={!!errors.spiciness_scale?.message}
              helperText={errors.spiciness_scale?.message}
            />
          </Grid>
        )}
        {selectedType === 'sandwich' && (
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id='slices_of_bread'
              label='Number Of Slices'
              type='number'
              inputProps={{ min: 1 }}
              {...register('slices_of_bread', { required: true, min: 1 })}
              error={!!errors.slices_of_bread?.message}
              helperText={errors.slices_of_bread?.message}
            />
          </Grid>
        )}
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
