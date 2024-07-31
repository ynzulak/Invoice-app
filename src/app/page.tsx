"use client"
import FileCreator from "../../components/FileCreator";
import InvoiceFile from "../../components/InvoiceFile";

import "./styles/globals.scss"

export default function Home() {
  return (
    <div className="container">
      <FileCreator />
      <InvoiceFile />
    </div>
  );
}
