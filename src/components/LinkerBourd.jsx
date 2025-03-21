import { React, useEffect, useState } from "react";
import { Container, Input, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const LinkerBourd = () => {
    const [connectionKey, setConnectionKey] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/linker/key")
            .then(response => response.json())
            .then(data => setConnectionKey(data))
            .catch(error => console.error("Error fetching connection key:", error));
    }, []);

  const checkConnectionKey = (connection) => {
    
  };

    
    return (
        <div>
            <Container className="mt-5 text-center">
                <h1 className="mb-3">Sync clipboards</h1>
                <p>Welcome to our LinkerPanel!</p>
                <p>To sync both system clipboards, others must enter your connection key.</p>

                <p className="fw-bold">Your connection key: {connectionKey || "Loading..."}</p>

                <p>or</p>
                <p>Enter partner's connection key to sync clipboard with them.</p>

                <Input type="text" placeholder="Enter connection key" className="mb-3 w-50 mx-auto" />

                <Button color="primary">Sync</Button>
            </Container>
           
        </div>
    );
};

export default LinkerBourd;