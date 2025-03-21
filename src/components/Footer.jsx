import React from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <Container>
        <p className="mb-0">&copy; {new Date().getFullYear()} Link_it. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
