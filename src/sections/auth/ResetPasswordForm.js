import React from "react";
import FormProvider from "../../components/hook_form/FormProvider";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import FormProvider from '../../components/hook_form/FormProvider'
import {
  Alert,
  Button,
  Stack,
} from "@mui/material";
import { RHFTextField } from "../../components/hook_form";
const ResetPasswordForm = () => {
  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
  });
  const defaulValues = {
    email: "demo@tawk.com",
  };
  const methods = useForm({
    resolver: yupResolver(ResetPasswordSchema),
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
      <Stack spacing={3} p={3}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}
        <RHFTextField name="email" label="Email address" />
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
          marginLeft:3,
          width:"90%"
        }}
      >
        Reset Password
      </Button>
    </FormProvider>
  );
};

export default ResetPasswordForm;
