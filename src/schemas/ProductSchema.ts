import { object, string, number } from 'yup';

export const ProductSchema = object().shape({
  name: string().trim().required('Please provide a dish name').min(3),
  preparation_time: string()
    .required('Please provide a preparation time')
    .matches(
      /^(?:[01]\d|2[0-3]):(?:[0-5]\d):(?:[0-5]\d)$/,
      'Invalid time format',
    ),
  type: string()
    .required('Please select a dish type')
    .lowercase()
    .oneOf(['pizza', 'soup', 'sandwich'], 'Please select a dish type'),
  no_of_slices: number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .nullable()
    .when('type', {
      is: 'pizza',
      then: (schema) =>
        schema
          .required('Please provide a number of slices')
          .min(1, 'Must be at least one slice'),
    }),
  diameter: number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .nullable()
    .when('type', {
      is: 'pizza',
      then: (schema) =>
        schema
          .required('Please provide a diameter')
          .min(0.1, 'Must be at least 0,1'),
    }),
  spiciness_scale: number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .nullable()
    .when('type', {
      is: 'soup',
      then: (schema) =>
        schema
          .required('Please set preferable spiciness value')
          .min(1, 'Must be at least 1')
          .max(10, 'Must be less than 10'),
    }),
  slices_of_bread: number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .nullable()
    .when('type', {
      is: 'sandwich',
      then: (schema) =>
        schema
          .required('Please provide a number of slices')
          .min(1, 'Must be at least 1'),
    }),
});
