// Import modules from React, Bootstrap, and external files
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import People from "./components/PeopleData"; // Import People Array
import ClassmateCard from "./components/ClassMateCard"; // Import ClassMateCard component

 // Main App Component
function App() {
  return (
    <Container className="mt-4">
      {/* Page Heading */}
      <h2 className="text-left">My Classmates</h2>

      {/* Create a Bootstrap Row for layout */}
      <Row className="justify-content-center">
        {/* Map through the People array and generate a card for each classmate */}
        {People.map((person, index) => (
          <Col key={index} xs={12}>
            {/* Render the ClassmateCard component for each person */}
            <ClassmateCard person={person} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;

/*
xs={12} → Each card takes full width on small screens.
md={8} → Takes 8/12 (about 67%) of the screen on medium screens.
lg={6} → Takes 6/12 (half the screen width) on large screens.
mb-3	Margin-bottom: 1rem (16px) → Adds space below the element.
p-1	Padding: 0.25rem (4px) → Adds small inner spacing inside the element.
bg-light	Background color: Light gray (#f8f9fa) 
width: "100%"	Makes the element take up the full width of its container.
wordBreak: "break-word"	Forces long words to break into a new line if needed, preventing overflow.
maxWidth: "70%"	Limits the width to 70% of the parent container, preventing it from stretching too wide.
d-flex	Enables flexbox for the <div>.
justify-content-between	Distributes elements evenly: one on the left, one on the right.
align-items-center	Vertically centers the elements inside the div.
mt-4	Extra-large margin-top	1.5rem	24px
*/
