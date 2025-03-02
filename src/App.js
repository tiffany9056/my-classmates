// Import modules from React, Bootstrap, and external files
// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import PeopleData from "./components/PeopleData"; // Import People Array
// import ClassmateCard from "./components/ClassMateCard"; // Import ClassMateCard component

import React, {useState} from "react";
import { Container, Row, Col, Form, Button, Alert} from "react-bootstrap";
import PeopleData from "./components/PeopleData"; // Import People Array
import ClassmateCard from "./components/ClassMateCard"; // Import ClassMateCard component

// Main App Component
function App() {
  // Use state to manage people data and form inputs
  const [people, setPeople] = useState(PeopleData);
  const [name, setName] = useState("");
  const [favoriteColor, setFavoriteColor] = useState("");
  const [favoriteFood, setFavoriteFood] = useState("");
  const [error, setError] = useState("");

  // Function to handle form submission
  const handleAddPerson = (e) => {
    e.preventDefault();

    if (!name || !favoriteColor || !favoriteFood) {
      setError("All fields are required!");
      return;
    }

    // Add new classmate to the list
    const newPerson = { name, favoriteColor, favoriteFood };
    setPeople([...people, newPerson]);

    // Clear the input fields and error message
    setName("");
    setFavoriteColor("");
    setFavoriteFood("");
    setError("");
  };

  // return (
  //   <Container className="mt-4">
  //     {/* Page Heading */}
  //     <h2 className="text-left">My Classmates</h2>

  //     {/* Create a Bootstrap Row for layout */}
  //     <Row className="justify-content-center">
  //       {/* Map through the People array and generate a card for each classmate */}
  //       {PeopleData.map((person, index) => (
  //         <Col key={index} xs={12}>
  //           {/* Render the ClassmateCard component for each person */}
  //           <ClassmateCard person={person} />
  //         </Col>
  //       ))}
  //     </Row>
  //   </Container>
  // );
  return (
    <Container className="mt-4">
      {/* Page Heading */}
      <h2 className="text-left">My Classmates</h2>

      {/* Form to Add New Classmate */}
      <Form onSubmit={handleAddPerson} className="mb-4 p-3 border rounded bg-light">
        {error && <Alert variant="danger">{error}</Alert>}
        <Form.Group controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="favoriteColor" className="mt-2">
          <Form.Label>Favorite Color:</Form.Label>
          <Form.Control type="text" value={favoriteColor} onChange={(e) => setFavoriteColor(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="favoriteFood" className="mt-2">
          <Form.Label>Favorite Food:</Form.Label>
          <Form.Control type="text" value={favoriteFood} onChange={(e) => setFavoriteFood(e.target.value)} />
        </Form.Group>

        <Button type="submit" variant="primary" className="mt-3">Add Classmate</Button>
      </Form>

      {/* Display Classmates */}
      <Row className="justify-content-center">
        {people.map((person, index) => (
          <Col key={index} xs={12}>
            <ClassmateCard person={person} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;

/*
<Container> in App.js
className="mt-4" → Adds margin-top for better spacing.

Form Styling in App.js
className="mb-4 p-3 border rounded bg-light"
mb-4 → Adds bottom margin for spacing between form and list.
p-3 → Adds padding inside the form.
border rounded → Adds a border and rounded corners.
bg-light → Sets a light gray background.

Row className="justify-content-center" → Centers the classmates list.

*/
/*
Bootstrap classes and CSS properties
Bootstrap Grid System
xs={12} → Each card takes full width on small screens.
md={8} → Takes 8/12 (about 67%) of the screen on medium screens.
lg={6} → Takes 6/12 (half the screen width) on large screens.
Bootstrap Spacing Classes
mb-3	Margin-bottom: 1rem (16px) Adds space below the element.
mt-4	Extra-large margin-top	1.5rem	24px
p-1	Padding: 0.25rem (4px) Adds small inner spacing inside the element.
Background & Width
bg-light Background color: Light gray (#f8f9fa) 
width: "100%""	Makes the element take up the full width of its container.
maxWidth: "70%"	Limits the width to 70% of the parent container, preventing it from stretching too wide.
Text & Word Wrapping
wordBreak: "break-word"	Forces long words to break into a new line if needed, preventing overflow.
Flexbox Properties
d-flex Enables flexbox for the <div>.
justify-content-between	Distributes elements evenly: one on the left, one on the right.
align-items-center Vertically centers the elements inside the div.
*/
