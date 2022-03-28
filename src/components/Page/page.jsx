import React, { Fragment } from "react";
import "./page.css";
import Form from "../Form/form";
import Header from "../Header/header";
import useForecast from "../../Hooks/useForecast";
import Loader from "../Loader/loader";
import { Navigate } from "react-router-dom";
import Result from "../Result/result";

const Page = () => {
  const { isError, isLoading, forecast, submitLocation } = useForecast();

  const formValue = (value) => {
    submitLocation(value);
  };
  return (
    <Fragment>
      <Header />

      {!forecast && (
        <div className="box">
          {!isLoading && <Form submitSearch={formValue} />}
          {/* What I want, If the user request is loading, 
          show the loader component. If there is an error, 
          show the error component. Use Hooks to do that  */}
          {isError && <Navigate to="*"></Navigate>}
          {isLoading && <Loader />}
        </div>
      )}
      {forecast && <Result forecast = {forecast} />}
    </Fragment>
  );
};

export default Page;
