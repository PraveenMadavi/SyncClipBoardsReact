import { React, useEffect, useState } from "react";
import { Container, Input, Button, FormGroup, Label } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const SyncPanel = () => {
    const [connectionKey, setConnectionKey] = useState("");
    const [Key, setKey] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8080/linker/key", {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            if (!response.ok) {
                console.error(`Error fetching key: ${response.status} ${response.statusText}`);
                setTimeout(() => navigate("/mainpage"), 3000); // Redirect after 2s
                throw new Error("Failed to fetch connection key");
            }
            return response.json();
        })
        .then(data => setConnectionKey(data))
        .catch(error => {
            console.error("Error fetching connection key:", error);
            navigate("/mainpage"); // Immediate redirect if fetch fails
        });
    }, [navigate]);

    const handleSubmit = async () => {
        if (!Key.trim()) {
            alert("Connection key cannot be empty!");
            return;
        }

        try {
            const response = await fetch("http://localhost:8080/session/sync", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ key: Key }) // Fixed: Ensure JSON format
            });

            if (response.ok) {
                navigate("/workpanel"); // Navigate only after success
            } else {
                alert("Failed to sync clipboard. Please try again.");
            }
        } catch (error) {
            console.error("Error syncing clipboard with partner:", error);
            alert("Failed to sync clipboard with partner. Please try again.");
        }
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

                <FormGroup className="w-50 mx-auto">
                    <Label for="name">Key</Label>
                    <Input
                        type="text"
                        id="Key"
                        placeholder="Enter Connection key to connect"
                        className="mb-3"
                        value={Key}
                        onChange={(e) => setKey(e.target.value)}
                    />

                    <div>
                        <Button color="primary" className="cta-button" onClick={handleSubmit}>
                            Sync
                        </Button>
                    </div>
                </FormGroup>
            </Container>
        </div>
    );
};

export default SyncPanel;
