import React from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
import { APP_NAME } from "Lib";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { AppState } from "App/reducers";

interface Props {
  title: string;
  isLoading?: boolean;
  isError?: boolean;
  errorMessage?: string;
  children: React.ReactNode;
}

export function Template(props: Props) {
  const { title, isLoading, isError, errorMessage, children } = props;
  const isMobileMenu = useSelector(
    (state: AppState) => state.layoutState.isMobileMenu
  );

  return (
    <>
      <Helmet>
        <title>
          {title} | {APP_NAME}
        </title>
      </Helmet>
      <div className="position-relative">
        <Header />
        {!isMobileMenu && <div className="app">{children}</div>}
        <Footer />
      </div>
    </>
  );
}
