"use client"
import { DataProvider } from "../../components/DataProvider";

import FileCreator from "../../components/FileCreator";
import InvoiceFile from "../../components/InvoiceFile";

import "./styles/globals.scss"

export default function Home() {
  return (
    <DataProvider>
      <div className="container">
        <FileCreator />
        <InvoiceFile />
      </div>
    </DataProvider>
  );
}
