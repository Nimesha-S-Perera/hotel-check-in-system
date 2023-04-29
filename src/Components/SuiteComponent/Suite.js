import "../App.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import NavBar from "../NavBar";

import SuiteTable from "./SuiteTable";
import DialogForm from './SuiteModal';
import React, { useEffect, useState } from "react";

export default function Suite() {
  const [started, setStarted] = useState(false);

  return (
    <div className="wrapper">
        <NavBar/>
      <div className="grid surface-200">
        <div className="col-12 md:col-6 lg:col-3">
          <h1 className="text-2xl font-semibold ml-3">ABC Hotel</h1>
        </div>
        <div className="col-12 md:col-6 lg:col-6">
          <h2 className="flex text-xl font-normal mx-auto justify-content-center">
            ABC Hotel - Check-In System
          </h2>
        </div>
        <div className="col-12 md:col-6 lg:col-3 "></div>
      </div>
      <div className="grid">
        <div className=" col-12 md:col-6 lg:col-6 flex flex-row align-items-center gap-3">
          <p className="text-xl ml-3">Suites & Prices</p>
          <DialogForm
            label="Add New Suite"
            size="small"
            onClick={() => setStarted(true)}
          />
        </div>
        <div className="col-12 md:col-6 md:justify-content-end lg:col-6 flex lg:justify-content-end align-items-center pl-4"></div>
      </div>
      <SuiteTable started={started} />
      <footer className="footer surface-200 mt-auto">
        <label className="text-xs font-medium text-center flex justify-content-center p-4">
          Copyright 2023 | ABC HOTEL GROUP
        </label>
      </footer>
    </div>
  );
}