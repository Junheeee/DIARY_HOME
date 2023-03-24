import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LockIcon from '@mui/icons-material/Lock';
import IconButton from '@mui/material/IconButton';

export default function Validation() {
  const signUpSchema = yup.object().shape({
    userId: yup.string().trim().required('ID를 입력해 주세요.'),
    userPswd: yup
      .string()
      .trim()
      .required('비밀번호를 입력해 주세요.')
      .matches(
        /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,20}$/,
        '8 자 이상, 20 자 미만 영문자/숫자/특수문자(@$!%*#?&) 조합하여 입력해 주세요.'
      )
  });

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    defaultValues: {
      userId: '',
      userPswd: ''
    },
    resolver: yupResolver(signUpSchema)
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <IconButton>
          <LockIcon color='primary' />
        </IconButton>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <Box
          component='form'
          noValidate
          sx={{ mt: 3 }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id='userId'
                label='아이디'
                autoComplete='current-password'
                variant='standard'
                error={!!errors.userId}
                {...register('userId')}
                helperText={!!errors.userId ? errors.userId.message : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id='userPw'
                label='비밀번호'
                type='password'
                autoComplete='current-password'
                variant='standard'
                error={!!errors.userPswd}
                {...register('userPswd')}
                helperText={!!errors.userPswd ? errors.userPswd.message : ''}
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='outlined'
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
