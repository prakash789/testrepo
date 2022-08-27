// import React from "react";
// import clsx from "clsx";
// import { makeStyles, useTheme } from "@material-ui/core/styles";
// import {Drawer,List,CssBaseline,IconButton,ListItem,ListItemIcon,ListItemText,Divider }from "@material-ui/core";
// import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
// import { useHistory, Link } from "react-router-dom";

// import { primaryC } from "../Theme";

// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     position: "fixed",
//     top: 0,
//     bottom: 0,
//     left: 0,
//     right: 0,
//   },

//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//     whiteSpace: "nowrap",
//     borderRadius: "10px",
//   },
//   drawerOpen: {
//     width: drawerWidth,
//     background: primaryC,
//     transition: theme.transitions.create("width", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   drawerClose: {
//     background: primaryC,
//     transition: theme.transitions.create("width", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     overflowX: "hidden",
//     width: theme.spacing(7) + 1,
//     [theme.breakpoints.up("sm")]: {
//       width: theme.spacing(9) + 1,
//     },
//   },
//   toolbar: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "flex-end",
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     overflow: "scroll",
//   },

//   inputRoot: {
//     color: "inherit",
//   },
//   Icons : {
//     fontSize:"1.5rem",
//     paddingLeft:"28px",
//     marginTop:"15px"

//   }
// }));

// export default function MiniDrawer() {
//   const classes = useStyles();
//   const history = useHistory();
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);
//   const [drawerState, setDrawerState] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = async () => {
//     await setOpen(false);
//   };

//   const handleVariant = async () => {
//     if (drawerState) handleDrawerClose();
//     setDrawerState(!drawerState);
//   };

//   return (
//     <div className={classes.root}>
//       <CssBaseline />

//       <Drawer
//         variant="permanent"
//         backgroundColor={primaryC}
//         open
//         className={clsx(classes.drawer, {
//           [classes.drawerOpen]: open,
//           [classes.drawerClose]: !open,
//         })}
//         classes={{
//           paper: clsx({
//             [classes.drawerOpen]: open,
//             [classes.drawerClose]: !open,
//           }),
//         }}
//         onMouseLeave={drawerState ? null : handleDrawerClose}
//         onMouseOver={() => handleDrawerOpen()}>
//         <div className={classes.toolbar}>
//           <IconButton onClick={handleVariant}>
//             {theme.direction === "rtl" ? <PhoneIcon /> : <PhoneIcon />}
//           </IconButton>
//         </div>
//         <Divider />

//         <List>
//           {["All mail", "Trash", "Spam", "", "", ""].map((text, index) => (
//             <ListItem button key={text} className={classes.Icons}>
//               <ListItemIcon  >
//                 <PhoneIcon />
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//     </div>
//   );
// }
