//Base imports
import React from 'react';
import clsx from 'clsx';
import { A } from 'hookrouter';

//Material UI components
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Drawer,
  Button,
  List,
  ListItem,
  Hidden,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

//Page styling theme
import pageHeaderTheme from './PageHeader.theme';

const useStyles = makeStyles(pageHeaderTheme);

const headerLinksData = [
  {
    color: 'textPrimary',
    href: '/home',
    variant: 'button',
    text: 'Home',
  },
];

const PageHeader = () => {
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);
  const classes = useStyles();
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <React.Fragment>
      <AppBar className={classes.appBar} color="default" position="fixed">
        <Toolbar>
          <div className={classes.title}>
            <A href={'/'}>
              <img alt={'Logo'} className={classes.logo} />
            </A>
          </div>
          <nav>
            <Hidden smDown>
              {headerLinksData.map((link) => {
                return link.external && link.external === true ? (
                  <a
                    className={clsx(classes.link, classes.linkMargin)}
                    color={link.color}
                    href={link.href}
                    key={link.text}
                    rel="noopener noreferrer"
                    target="_blank"
                    variant={link.variant}>
                    {link.text}
                  </a>
                ) : (
                  <A
                    className={clsx(classes.link, classes.linkMargin)}
                    href={link.href}
                    key={link.text}>
                    {link.text}
                  </A>
                );
              })}
            </Hidden>
          </nav>
          <Hidden mdUp>
            <Button
              onClick={toggleDrawer(true)}
              style={{ padding: '0', minWidth: 'unset', marginLeft: '1rem' }}>
              <MenuIcon style={{ color: '#fff' }} />
            </Button>
            <Drawer
              anchor="right"
              onClose={toggleDrawer('right', false)}
              open={isDrawerOpen}>
              <div
                role="presentation"
                style={{
                  width: '250px',
                  backgroundColor: '#3c3d41',
                  height: '100%',
                }}>
                <List>
                  {headerLinksData.map((link) => {
                    return link.external && link.external === true ? (
                      <a
                        className={classes.link}
                        color={link.color}
                        href={link.href}
                        key={link.text}
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}
                        rel="noopener noreferrer"
                        target="_blank"
                        variant={link.variant}>
                        <ListItem color="secondary">{link.text}</ListItem>
                      </a>
                    ) : (
                      <A
                        className={classes.link}
                        href={link.href}
                        key={link.text}
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}>
                        <ListItem color="secondary">{link.text}</ListItem>
                      </A>
                    );
                  })}
                </List>
              </div>
            </Drawer>
          </Hidden>
        </Toolbar>
      </AppBar>
      <div className={classes.appBarSpacer} />
    </React.Fragment>
  );
};

export default PageHeader;
