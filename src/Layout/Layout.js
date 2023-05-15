import React from "react";
import TopHeader from "../Components/TopHeader/TopHeader";
import MainLayout from "../Components/MainLayout/MainLayout";

const Layout = ({isClass, setClassName}) => {
    return(
        <>
          <TopHeader setClassName={setClassName} />
          <MainLayout isClass={isClass} setClassName={setClassName} />
        </>
    )
}

export default Layout;          