import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import moment from "moment";
import { Image, Stack, Text } from "@chakra-ui/react";
import { primaryAppHeaderC } from "../../Theme";
import MediledgeIcon from "../../Images/side-bar-icons/sidebarLogo.png";
import MediledgeFullLogo from "../../Images/side-bar-icons/medLogo.png";
import { SideBarData } from "../sideBarData";
import { useHistory } from "react-router";
import { doLoginAction } from "../../Screens/Login/Action";
import { useDispatch, useSelector } from "react-redux";
import { doloadGlobalTitle } from "./action";
import { useMediaQuery } from '@chakra-ui/react'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  appBar: {
    // zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    padding: theme.spacing(0, 8),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    padding: theme.spacing(0, 0),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    
    
   
    background: primaryAppHeaderC,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    borderRadius: "20px",
    marginLeft: "5px",
    background: primaryAppHeaderC,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  toolbarOpen: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(0),

    // necessary for content to be below app bar
  },
  toolbarBottom: {
    marginTop: theme.spacing(5),
  },
  toolbarBottomInner: {
    marginTop: theme.spacing(2),
  },
  toolbarBottomInnerText: {
    color: "#fff",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
    overflow: "scroll",
  },
}));

export default function Header({ children }) {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [drawerState, setDrawerState] = React.useState(false);
  const [clockIntervel, setClockintervel] = useState(moment().format("h:mm a"));
  const curentDate = moment().format("DD/MM/YYYY");
  const AppTitle = useSelector((s) => s.Title);
  console.log(AppTitle, "aaaaaaaaaaaaaaaaaaaaaaaaaaa");

  useEffect(() => {
    let Timer = setInterval(() => {
      setClockintervel(moment().format("h:mm a"));
    }, 1000);

    return () => clearInterval(Timer);
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = async () => {
    await setOpen(false);
  };

  const handleRouting = async (item) => {
    if (item === "Dashboard") {
      await dispatch(doloadGlobalTitle(item));
      history.push("/dashboard");
    } else if (item === "Onboarding") {
      await dispatch(doloadGlobalTitle(item));
      history.push("/onboarding");
    } else if (item === "MR Onboarding") {
      await dispatch(doloadGlobalTitle(item));
      history.push("/mr-onboarding");
    } else if (item === "Patient Information") {
      await dispatch(doloadGlobalTitle(item));
      history.push("/patient-information");
    } else if (item === "Messanger") {
      await dispatch(doloadGlobalTitle(item));
      history.push("/messanger");
    }else if (item === "Lab Onboarding") {
      await dispatch(doloadGlobalTitle(item));
      history.push("/lab-onboarding");
    }else if (item === "Webvitals") {
    await dispatch(doloadGlobalTitle(item));
    history.push("/webvitals");
    }else if (item === "Logout") {
      await localStorage.removeItem("userData");
      await dispatch(doLoginAction([]))
      history.push("/login");
    }
  };
  const [isLessThan700] = useMediaQuery('(max-width: 700px)');

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="#fff"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}>
        <Toolbar>
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
              
            })}>
            <EmailIcon />
          </IconButton> */}

          <Stack
            direction={{ base: "", md: "row" }}
            display={{ base: "", md: "flex" }}
            width={{ base: "auto", md: "auto" }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 0, md: 0 }}>
            <Text
              letterSpacing={"tighter"}
              bgGradient={primaryAppHeaderC}
              bgClip="text"
                fontSize={isLessThan700 ? "30px" : "40px"}
              >
              {AppTitle}
            </Text>
            <Text>{""}</Text>
            <Text>{""}</Text>
            <Text display={isLessThan700 ? "none" :""}>Welcome! ADMIN</Text>
            <Text display={isLessThan700 ? "none" :""}>|</Text>
            <Text display={isLessThan700 ? "none" :""}>{curentDate}</Text>
            <Text display={isLessThan700 ? "none" :""}>|</Text>
            <Text display={isLessThan700 ? "none" :""}>{clockIntervel}</Text>
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,


          
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        onMouseLeave={drawerState ? null : handleDrawerClose}
        onMouseOver={() => handleDrawerOpen()}>
        <div className={open ? classes.toolbarOpen : classes.toolbar}>
          {/* <IconButton onClick={handleVariant} > */}
          {
            open ? (

              <Image src={MediledgeFullLogo} />
            ) : (
              <Image src={MediledgeIcon} />
            )
            /* } */
          }
          {/* </IconButton> */}
        </div>
        {/* <Divider /> */}

        {/* <Divider /> */}
        <List className={classes.toolbarBottom}>
          {SideBarData.map((item, index) => (
            <ListItem
              button
              key={item.name}
              className={classes.toolbarBottomInner}
              onClick={() => handleRouting(item.name)}>
              <ListItemIcon>
                <Image src={item.icon} />
              </ListItemIcon>
              <ListItemText
                primary={item.name}
                className={classes.toolbarBottomInnerText}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}
