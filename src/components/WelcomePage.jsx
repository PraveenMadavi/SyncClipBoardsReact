import { React, useState } from "react";
import { Container, Input, FormFeedback, FormGroup, Label, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/MainStyle.css";

const WelcomePage = () => {
    const [name, setName] = useState("");
    const [touched, setTouched] = useState(false);
    const navigate = useNavigate();

    // Validate Name: Should not be empty and must be at least 3 characters
    const isValid = name.trim().length >= 3;

    // Handle Change: Allow only letters and spaces
    const handleChange = (event) => {
        const _name = event.target.value;
        if (/^[a-zA-Z ]*$/.test(_name)) {
            setName(_name);
        }
    };

    // Handle Form Submission
    const handleSubmit = async () => {
        setTouched(true); // Mark as touched
        if (!isValid) return; // Prevent navigation if invalid

        try {
            const response = await fetch("http://localhost:8080/session/set-user", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body:name
            });
            // console.log(JSON.stringify({name}))
            console.log("Sending name: " + name)
            
            if (response.ok) {
                navigate("/LinkerBoard"); // Navigate only after successful request
            } else {
                alert("Failed to send name. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong.");
        }
    };

    return (
        <div>
            <Container className="mt-5 text-center">
                <h1 className="mb-3">Sync Clipboards</h1>
                <p>Welcome to our clipboard linker app.</p>
                <p>To sync both system clipboards, first provide your name to know who you are for others.</p>

                <FormGroup className="w-50 mx-auto">
                    <Label for="name">Enter your Name</Label>
                    <Input
                        type="text"
                        id="name"
                        placeholder="Enter your Name"
                        className="mb-3"
                        value={name}
                        onChange={handleChange}
                        onBlur={() => setTouched(true)}
                        invalid={touched && !isValid}
                    />
                    <FormFeedback>Name must be at least 3 characters long and is required.</FormFeedback>

                    <div>
                        <Button color="primary" className="cta-button" onClick={handleSubmit}>
                            Go
                        </Button>
                    </div>
                </FormGroup>
            </Container>
        </div>
    );
};

export default WelcomePage;
