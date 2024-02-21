import { Stack } from "@mui/material";
import { Typographies } from "..";
import { ReactNode } from "react";

type HeaderPageProps = {
  title: string;
  rightAction?: ReactNode
}

export default function HeaderPage({ rightAction }: HeaderPageProps) {
  return (
    <Stack
      pb={1.5}
      alignItems={'center'}
      width="100%"
      direction={'row'}
      justifyContent={'space-between'}
    >
      <Typographies.Title>
        Veículos
      </Typographies.Title>
      {rightAction}
    </Stack>
  )
}
