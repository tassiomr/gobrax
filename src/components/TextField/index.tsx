import React, { ReactNode } from 'react';
import {
  FormLabel as MUIFormLabel,
  TextField,
  TextFieldProps as MUIInputProps,
  Stack,
  styled,
} from '@mui/material';
import { Typographies } from '..';

const FormLabel = styled(MUIFormLabel)({
  fontWeight: '500',
  textTransform: 'uppercase',
  fontSize: '0.8rem',
  alignSelf: 'flex-start',
});

type InputProps = {
  labelText: string;
  errorText?: string;
  icon?: ReactNode;
} & MUIInputProps;

const InputText = React.forwardRef((props: InputProps, ref) => {
  return (
    <Stack
      display="flex"
      flexDirection={'column'}
      spacing={1}
      justifyContent={'flex-end'}
      alignItems={'flex-end'}
      width={'100%'}
    >
      <FormLabel>{props.labelText}</FormLabel>
      <TextField
        InputProps={{
          startAdornment: props.icon ? props.icon : null,
        }}
        sx={{ width: '100%' }}
        //@ts-expect-error: Untypable code ref
        ref={ref}
        {...props}
      />
      <Typographies.Message status="error" sx={{ alignSelf: 'flex-start' }}>
        {props.errorText}
      </Typographies.Message>
    </Stack>
  );
});

export default InputText;
