import * as Yup from 'yup';

const validationSchema = Yup.object({
  UserCode: Yup.string().required('Please Enter a User Code'),
  Name: Yup.string().required('Please Enter your Full Name'),
  Email: Yup.string()
    .email()
    .required('Please Enter your Email'),
  Password: Yup.string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
    ),
  ConfirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref('Password'), null], 'Passwords must match'),
  SecurityGroupId: Yup.number().required('Please Select a Security Group'),
  EstablishmentId: Yup.number().required('Please Select an Establishment'),
});

const updateValidationSchema = Yup.object({
  UserCode: Yup.string(),
  Name: Yup.string().required('Please Enter your Full Name'),
  Email: Yup.string()
    .email()
    .required('Please Enter your Email'),
  EstablishmentId: Yup.number().required('Please Select an Establishment'),
  Password: Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/, ''),
  ConfirmPassword: Yup.string()
    .oneOf([Yup.ref('Password'), null], 'Passwords must match')
    .when('Password', (password, field) =>
      password ? field.required('Please Enter the confirmation of password') : field,
    ),
  SecurityGroupId: Yup.number().required('Please Select a Security Group'),
});

export { updateValidationSchema, validationSchema }
