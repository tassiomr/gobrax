import { FormLabel, TextField, TextFieldProps as MUIInputProps, Box } from "@mui/material";
import React from "react";

type InputProps = {
  labelText: string
} & MUIInputProps;

const InputText = React.forwardRef((props: InputProps, ref) => {
  return (
    <Box display='flex'
      flexDirection={'row'}
      gap={4}
      justifyContent={'flex-end'}
      flex={1}
      width={'100%'} >
      <FormLabel>{props.labelText}</FormLabel>
      <TextField sx={{ width: '75%' }} {...props} ref={ref} />
    </Box>
  )
})

export default InputText;
