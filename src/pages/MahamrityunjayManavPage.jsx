import React from "react";
import Header from "../components/Navbar";
import Footer from "../components/Footer";
import MahamrityunjayManav from "../components/MahamrityunjayManav1";

function MahamrityunjayManavPage() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-4">
        <MahamrityunjayManav />
      </main>
      <Footer />
    </div>
  );
}

export default MahamrityunjayManavPage;
