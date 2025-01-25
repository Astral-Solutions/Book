import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LoadingBook from "./LoadingBook";

function Layout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {loading ? (
        <LoadingBook />
      ) : (
        <>
          <Navbar /> {/* Navbar is rendered only once */}
          <main className="flex-grow">{children}</main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default Layout;
