import { useCallback, useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  styled,
  useMediaQuery,
  Drawer,
  Stack,
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { Buttons } from '..';
import constants from '../../../app/configs/constants';
import { Route } from '../../../domain/types/routes';
import { compareUrl } from '../../../app/utils';
import { MenuRounded } from '@mui/icons-material';
import { Theme } from '../../theme';

type LinkButton = {
  label: string;
  route: Route;
};

const LogoHeader = styled(Box)({
  justifyContent: 'flex-end',
  alignItems: 'center',
  display: 'flex',
  padding: 8,
});

const LogoDrawer = styled(LogoHeader)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
    width: 200,
    height: 100,
    padding: 0,
  },
}));

export default function Bar() {
  const { routes } = constants.appConfig;
  const [linkButtons, setLinkButtons] = useState<Array<LinkButton>>([]);
  const { pathname } = useLocation();
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md'),
  );

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const createLinkButtons = useCallback(() => {
    const keys = Object.keys(routes);

    const buttons: Array<LinkButton> = [];
    keys.forEach((key) => {
      buttons.push({ label: routes[key as Route], route: key as Route });
    });

    return buttons;
  }, [routes]);

  useEffect(() => {
    setLinkButtons(createLinkButtons());
  }, [createLinkButtons]);

  return (
    <AppBar position="relative" elevation={0}>
      <Toolbar>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Box flex={1} display="flex" gap={1}>
            {!isMobile &&
              linkButtons.map(({ route, label }) => (
                <Buttons.Link
                  key={route}
                  route={`/${route}`}
                  label={label}
                  isActive={compareUrl(route, pathname)}
                />
              ))}
            {isMobile && (
              <Box p={2}>
                <MenuRounded
                  data-testid="mobile-menu-icon"
                  fontSize="large"
                  onClick={() => {
                    setIsDrawerOpen(true);
                  }}
                />
              </Box>
            )}
            {isMobile && (
              <Drawer
                elevation={0}
                anchor={'left'}
                open={isDrawerOpen}
                onClose={() => {
                  setIsDrawerOpen(false);
                }}
              >
                <Stack px={4} py={4}>
                  <LogoDrawer>
                    <img
                      width="50%"
                      height="25%"
                      src={Logo}
                      alt="Logo da aplicação"
                    />
                  </LogoDrawer>
                  {linkButtons.map(({ route, label }) => (
                    <Buttons.NavLink
                      key={route}
                      route={`/${route}`}
                      label={label}
                      isActive={compareUrl(route, pathname)}
                    />
                  ))}
                </Stack>
              </Drawer>
            )}
          </Box>
          <LogoHeader>
            <img width="50%" height="25%" src={Logo} alt="Logo da aplicação" />
          </LogoHeader>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
