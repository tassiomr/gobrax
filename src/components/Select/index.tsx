import {
  Stack,
  FormLabel,
  MenuItem,
  TextField,
  TextFieldProps,
} from '@mui/material';
import constants from '../../configs/constants';

type SelectorProps = {
  composeObject: (data: any) => {
    label: string;
    key: string;
    value: string;
  };
  options: Array<any>;
  selectProps: TextFieldProps;
  labelText: string;
};

export default function Selector({
  options,
  labelText,
  selectProps,
  composeObject,
}: SelectorProps) {
  console.log(options);
  return (
    <Stack display="flex" flexDirection={'column'} spacing={1} width={'100%'}>
      <FormLabel>{labelText}</FormLabel>
      <TextField defaultValue="" select sx={{ width: '100%' }} {...selectProps}>
        <MenuItem key="default" value={''}>
          {constants.components.select.noOptions}
        </MenuItem>
        {options.map((obj) => {
          const item = composeObject(obj);
          return (
            <MenuItem key={item.key} value={item.value}>
              {item.label}
            </MenuItem>
          );
        })}
      </TextField>
    </Stack>
  );
}
