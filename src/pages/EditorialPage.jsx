import React from "react";
import Header from "../components/Navbar";
import Footer from "../components/Footer";
import Editorial from "../components/Editorial1";

function EditorialPage() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-4">
        <Editorial />
      </main>
      <Footer />
    </div>
  );
}

export default EditorialPage;
