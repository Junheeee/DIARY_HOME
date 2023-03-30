import * as yup from 'yup';
import { useEffect, useState } from 'react';
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
  const [valiId, setValiId] = useState('');
  const [valiBd, setValiBd] = useState('');
  const [valiPhone2, setValiPhone2] = useState('');
  const [valiPhone3, setValiPhone3] = useState('');

  const schema = yup.object().shape({
    userId: yup
      .string()
      .trim()
      .required('ID를 입력해 주세요.')
      .matches(
        /^(?=.*[a-z])(?=.*[0-9])[a-z0-9]{6,15}$/,
        '6~15자리의 영문자, 숫자를 조합하여 입력해 주세요.'
      ),
    userPswd: yup
      .string()
      .trim()
      .required('비밀번호를 입력해 주세요.')
      .matches(
        new RegExp(
          `^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])(?!.*${valiId})(?!.*${valiPhone2})(?!.*${valiPhone3})(?!.*${valiBd})[A-Za-z0-9@$!%*#?&]{8,20}$`
        ),
        '8~20자리의 영문자, 숫자, 특수문자를 조합하여 입력해 주세요. 개인정보(ID, 전화번호, 생년월일)는 제외합니다.'
      ),
    userPhone1: yup
      .string()
      .trim()
      .required('휴대폰번호를 입력해 주세요.')
      .matches(/^(01[0-1])$/, '올바른 휴대폰번호를 입력해 주세요.'),
    userPhone2: yup
      .string()
      .trim()
      .required('휴대폰번호를 입력해 주세요.')
      .matches(/^([1-9][0-9]{3})$/, '올바른 휴대폰번호를 입력해 주세요.'),
    userPhone3: yup
      .string()
      .trim()
      .required('휴대폰번호를 입력해 주세요.')
      .matches(/^([0-9]{4})$/, '올바른 휴대폰번호를 입력해 주세요.'),
    userBd: yup
      .string()
      .trim()
      .required('생년월일을 입력해 주세요.')
      .matches(
        /^(19[0-9][0-9]|20\d{2})(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/,
        '올바른 생년월일을 입력해 주세요.'
      )
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm({
    defaultValues: {
      userId: '',
      userPswd: '',
      userPhone1: '',
      userPhone2: '',
      userPhone3: '',
      userBd: ''
    },
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    setValiId(watch('userId'));
    setValiBd(watch('userBd').substring(4, 8));
    setValiPhone2(watch('userPhone2'));
    setValiPhone3(watch('userPhone3'));
  }, [watch()]);

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
                id='userBd'
                label='생년월일'
                autoComplete='current-password'
                error={!!errors.userBd}
                {...register('userBd')}
                helperText={!!errors.userBd ? errors.userBd.message : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <div style={{ display: 'flex' }}>
                <TextField
                  required
                  fullWidth
                  id='userPhone1'
                  label='전화번호'
                  autoComplete='current-password'
                  // variant='standard'
                  error={!!errors.userPhone1}
                  {...register('userPhone1')}
                />
                <TextField
                  required
                  fullWidth
                  id='userPhone2'
                  label='전화번호'
                  autoComplete='current-password'
                  // variant='standard'
                  error={!!errors.userPhone2}
                  {...register('userPhone2')}
                />
                <TextField
                  required
                  fullWidth
                  id='userPhone3'
                  label='전화번호'
                  autoComplete='current-password'
                  // variant='standard'
                  error={!!errors.userPhone3}
                  {...register('userPhone3')}
                />
              </div>
              <span className='vali-phone'>
                {!!errors.userPhone1 ||
                !!errors.userPhone2 ||
                !!errors.userPhone3
                  ? errors.userPhone1?.message ||
                    errors.userPhone2?.message ||
                    errors.userPhone3?.message
                  : ''}
              </span>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id='userId'
                label='아이디'
                autoComplete='current-password'
                // variant='standard'
                error={!!errors.userId}
                {...register('userId')}
                helperText={!!errors.userId ? errors.userId.message : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id='userPswd'
                label='비밀번호'
                type='password'
                autoComplete='current-password'
                // variant='standard'
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
