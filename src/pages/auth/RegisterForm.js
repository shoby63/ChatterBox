import FormProvider from "../../components/hook_form/FormProvider";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import FormProvider from '../../components/hook_form/FormProvider'
import {
  Alert,
  Button,
  IconButton,
  InputAdornment,
  Link,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import { RHFTextField } from "../../components/hook_form";
import { Eye, EyeSlash } from "phosphor-react";
const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const LoginSchema = Yup.object().shape({
    firstName: Yup.string().required("first Name is required"),
    lastName: Yup.string().required("last name is required"),
    email: Yup.string().required("Email is required").email("Email must be a valid email address"),
    password: Yup.string().required("Password is required"),
  });
  const defaulValues = {
    email: "demo@tawk.com",
    password: "demo@123",
  };
  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaulValues,
  });
  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccesful },
  } = methods;
  const onSubmit = async (data) => {
    try {
    } catch (error) {
      console.log(error);
      reset();
      setError("afterSubmit", {
        ...error,
        message: error.message,
      });
    }
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}
        <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
          <RHFTextField name="firstName" label="First Name" />
          <RHFTextField name="lastName" label="Last Name" />
        </Stack>
        <RHFTextField name="email" label="Email address" />
        <RHFTextField
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <Eye /> : <EyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Stack alignItems={"flex-end"} sx={{ my: 3 }}>
        <Link variant="body2" color="inherit" underline="always">
          Forget Password?
        </Link>
      </Stack>
      <Button
        fullWidth
        color={"inherit"}
        size="large"
        type="submit"
        variant="contained"
        sx={{
          bgcolor: "text.primary",
          color: "white",
          "&:hover": {
            color: "black",
          },
        }}
      >
          Create Account
      </Button>
      
    </FormProvider>
  );
};

export default RegisterForm;
