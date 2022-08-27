import React, { useEffect, useState } from "react";
import { BrowserRouter, Redirect } from "react-router-dom";


//Routes Type
import PublicRoutes from "./Public-Routes";
import ProtectedRoutes from "./Protected-Routes";
import { useSelector, useDispatch } from "react-redux";
import { doLoginAction } from "../Screens/Login/Action";

const AppRouter = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    handelRefresh()

  }, [])

  const handelRefresh = async () => {

    let restoreData = await localStorage.getItem('userData');
    let newRestoredData = JSON.parse(restoreData, '222222222');
    console.log(newRestoredData, 'newRestoredDatanewRestoredData')
    await dispatch(doLoginAction(newRestoredData));
  }

  const Authorization = useSelector((s) => s.token);
  console.log(Authorization, '@@@@@@@@@@@@@')
  if (
    Authorization === null ||
    Authorization.length === 0 ||
    Authorization === undefined
  ) {
    return (
      <BrowserRouter>
        <PublicRoutes />
      </BrowserRouter>

    )
  } else {
    return (
      <BrowserRouter>
        {Authorization ? <ProtectedRoutes /> : <PublicRoutes />}
      </BrowserRouter>
    );
  }
};

export default AppRouter;
