import React from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
import classNames from "classnames";
import { APP_NAME } from "Lib";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Loader } from "UI";
import { AppState } from "App/reducers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  title?: string;
  isLoading?: boolean;
  // isError?: boolean;
  children: React.ReactNode;
}

export function Template(props: Props) {
  const { children, isLoading } = props;
  // above === title, isLoading, isError, errorMessage,
  const isMobileMenu = useSelector(
    (state: AppState) => state.layoutState.isMobileMenu
  );

  return (
    <>
      <Helmet>
        <title>
          {/* {title} | */}
          {APP_NAME}
        </title>
      </Helmet>
      <div className={classNames("")}>
        <Header />
        <div>
          {!isMobileMenu && (
            <div className="app">
              {isLoading ? (
                <>
                  <div className="fixed left-0 top-0  w-full h-full bg-white bg-opacity-50 z-50">
                    <div className="w-full h-full flex items-center justify-center">
                      <Loader />
                    </div>
                  </div>
                  {children}
                </>
              ) : (
                <>{children}</>
              )}
            </div>
          )}
        </div>
        <Footer />
        <ToastContainer />
      </div>
    </>
  );
}
