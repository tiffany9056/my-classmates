// Import modules from React, Bootstrap, and external files
// import React from "react"; //HW3-L1
import React, {useState} from "react"; //HW3-L2
// import { Container, Row, Col } from "react-bootstrap"; //HW3-L1
// import { Container, Row, Col, Form, Button, Alert} from "react-bootstrap"; //HW3-L2
import { Container, Row, Col, Form, Button, Alert, Modal} from "react-bootstrap"; //HW3-L3/4
import PeopleData from "./components/PeopleData"; // Import People Array
import ClassmateCard from "./components/ClassMateCard"; // Import ClassMateCard component
import ClassmateTable from "./components/ClassmateTable";

// Main App Component
function App() {
  //HW3-L2
  // Initialize people state with a unique ID and likes count for each person
  const [people, setPeople] = useState(
    PeopleData.map(person => ({ ...person, id: Date.now() + Math.random(), likes: 0 }))
  );
  // State for input form fields
  const [name, setName] = useState("");
  const [favoriteColor, setFavoriteColor] = useState("");
  const [favoriteFood, setFavoriteFood] = useState("");
  const [error, setError] = useState("");
  // State for editing classmates
  const [editingPerson, setEditingPerson] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  // Function to add a new classmate
  const handleAddPerson = (e) => {
    e.preventDefault();
    if (!name || !favoriteColor || !favoriteFood) {
      setError("All fields are required!");
      return;
    }
    const newPerson = { id: Date.now().toString(), name, favoriteColor, favoriteFood ,likes: 0};
    setPeople([...people, newPerson]);
    setName(""); // Clear the input fields and error message
    setFavoriteColor("");
    setFavoriteFood("");
    setError("");
  };

  // HW3-L3/4 Handle Profile Deletion and Edit
  const handleDelete = (id) => {
    setPeople((prevPeople) => prevPeople.filter((person) => person.id !== id));
  };

  const handleEdit = (id) => {
    const personToEdit = people.find((person) => person.id === id);
    if (personToEdit) {
      setEditingPerson({ ...personToEdit }); // Correctly set the specific person
      setShowEditModal(true);
      setError(""); // Clear any previous error messages
    }
  };

  // HW3-L3/4 Handle Updating Profile
  const handleUpdateProfile = () => {
    if (!editingPerson.name || !editingPerson.favoriteColor || !editingPerson.favoriteFood) {
      setError("All fields are required!");
      return;
    }
    setPeople((prevPeople) =>
      prevPeople.map((person) => person.id === editingPerson.id ? { ...person, name: editingPerson.name, favoriteColor: editingPerson.favoriteColor, favoriteFood: editingPerson.favoriteFood } : person
      ));
    setShowEditModal(false);
    setError(""); 
  };

  const handleLike = (id) => {
    setPeople((prevPeople) =>
      prevPeople.map((person) =>
      person.id === id ? { ...person, likes: (person.likes || 0) + 1  } : person
      ));
  };

  return (
    <Container className="mt-4">
      {/* HW3-L1 Page Heading */}
      <h2 className="text-left">My Classmates</h2>

      {/* HW3-L2 Form to Add New Classmate */}
      <Form onSubmit={handleAddPerson} className="mb-4 p-3 border rounded bg-light">
        {/* Show error message */}
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
      {/* Display People Data as Cards */}
      <Row className="justify-content-center">
        {people.map((person, index) => (
          <Col key={index} xs={12}>
            <ClassmateCard
              person={person} 
              likes={person.likes} 
              onLike={() => handleLike(person.id)} 
            />
          </Col>
        ))}
      </Row>


      {/* HW3-L3/4 Display Classmates in a Table */}
      <ClassmateTable people={people} onEdit={(id) => handleEdit(id)} onDelete={handleDelete}/>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Classmate</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Show error message */}
          {error && <Alert variant="danger">{error}</Alert>}
          <Form>
            <Form.Group >
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" value={editingPerson?.name} onChange={(e) => setEditingPerson({...editingPerson, name: e.target.value})}/>
            </Form.Group>

            <Form.Group>
              <Form.Label>Favorite Color</Form.Label>
              <Form.Control type="text" value={editingPerson?.favoriteColor} onChange={(e) => setEditingPerson({...editingPerson, favoriteColor: e.target.value})}/>
            </Form.Group>

            <Form.Group >
              <Form.Label>Favorite Food</Form.Label>
              <Form.Control type="text" value={editingPerson?.favoriteFood} onChange={(e) => setEditingPerson({...editingPerson, favoriteFood: e.target.value})}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={handleUpdateProfile}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
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
