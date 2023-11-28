import { Link, Stack, Typography } from '@mui/material'
import { CaretLeft } from 'phosphor-react'
import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
import { RHFTextField } from '../../components/hook_form'
import ResetPasswordForm from '../../sections/auth/ResetPasswordForm'
const ResetPassword = () => {
  return (
    <Stack spacing={2} sx={{mb:5,position:"relative"}}>
        <Typography variant='h3' paragraph>
            Forget Your password
            </Typography>
            <Typography sx={{color:"text.secondary",mb:5}} paragraph>
           Please enter the email address associated with your account and the We wiil email you a link to reset your password
            </Typography>
            {/* Reset Password form */}
            <ResetPasswordForm />
         <Link component={RouterLink} to='/auth/login' color={"inherit"} variant='subtitle2' sx={{mt:3,mx:"auto",alignItems:"center"}} >
          <CaretLeft /> Return to Sign in 
          </Link>
    </Stack>
  )
}

export default ResetPassword