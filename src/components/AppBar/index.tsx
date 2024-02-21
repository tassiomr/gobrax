import { ReactNode, useCallback, useEffect, useState } from 'react';
import { AppBar, Toolbar, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { Buttons } from "..";
import constants from "../../configs/constants";
import { Route } from "../../types/routes";
import { compareUrl } from "../../utils";

type BarProps = {
  actionComponent?: ReactNode
};

type LinkButton = {
  label: string, 
  route: Route
}

export default function Bar({ actionComponent }: BarProps) {
  const { routes } = constants.appConfig;
  const [linkButtons, setLinkButtons] = useState<Array<LinkButton>>([]);
  const { pathname } = useLocation();

  const createLinkButtons = useCallback(() => {
    const keys = Object.keys(routes);

    const buttons: Array<LinkButton> = []
    keys.forEach((key) => {
      buttons.push({ label: routes[key as Route], route: key as Route })
    });

    return buttons;
  }, [routes]);

  useEffect(() => {
    setLinkButtons(createLinkButtons())
  }, [createLinkButtons])

  return <AppBar position="relative" elevation={0}>
    <Toolbar>
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems={'center'}
        width={'100%'}
      >
        <Box flex={1} display={'flex'} gap={1}>
          {linkButtons.map(({ route, label }) => (
            <Buttons.LinkButton 
              key={route}
              route={`/${route}`} 
              label={label}
              isActive={compareUrl(route, pathname)}
            />
          ))}
        </Box>
        <Box
          display={'flex'}
          flex={1}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Link to="/" style={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img width='50%' height='25%' src={Logo} alt="Logo da aplicação" />
          </Link>
        </Box>
        <Box sx={{ pl: 8 }} flex={1} display="flex" justifyContent="flex-end">
          {actionComponent}
        </Box>
      </Box>
    </Toolbar>
  </AppBar>
}