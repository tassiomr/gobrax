import { Stack } from '@mui/material';
import { Buttons } from '..';

type ActionsProps = {
  cancelAction: () => void;
  disabled: boolean;
  isLoading: boolean;
};

export default function Actions({
  cancelAction,
  disabled,
  isLoading,
}: ActionsProps) {
  return (
    <Stack direction={'row'} justifyContent={'flex-end'} useFlexGap spacing={2}>
      <Buttons.Cancel onClick={cancelAction} />
      <Buttons.Confirm
        type="submit"
        disabled={disabled || isLoading}
        isLoading={isLoading}
      />
    </Stack>
  );
}
