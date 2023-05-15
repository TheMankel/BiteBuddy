import { useForm, SubmitHandler } from 'react-hook-form';
import { ProductType } from '../../../types/ProductType';

const ProductsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductType>();

  const onSubmit: SubmitHandler<ProductType> = (data) => console.log(data);
  console.log(errors);

  const handleCancel = () => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type='text'
        placeholder='Name'
        {...register('name', { required: true, minLength: 1 })}
      />
      <input
        type='time'
        placeholder='Preparation Time'
        step={1}
        {...register('preparation_time', { required: true })}
      />
      <select {...register('type', { required: true })}>
        <option value=''>Type</option>
        <option value='pizza'>Pizza</option>
        <option value='soup'>Soup</option>
        <option value='sandwich'>Sandwich</option>
      </select>
      <button type='button' onClick={handleCancel}>
        Cancel
      </button>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default ProductsForm;
