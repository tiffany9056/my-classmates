// Import modules from React and Bootstrap
import React from "react";
import { Card, Button } from "react-bootstrap";

// Component to display each classmate's details
function ClassmateCard({ person, onLike}) {
  return (
    <Card className="mb-3 p-1 bg-light" style={{ width: "100%", wordBreak: "break-word", maxWidth: "100%" }}>
      <Card.Body>
        {/* Display the classmate's name as the card title */}
        <Card.Text>Name: {person.name}</Card.Text>
        <Card.Text>Favorite Color: {person.favoriteColor}</Card.Text>
        {/* Row for Favorite Food and Like Button */}
        <div className="d-flex justify-content-between align-items-center">
          {/* favorite food on the left */}
          <Card.Text className="text-wrap" style={{ maxWidth: "70%" }}>
            Favorite Food: {person.favoriteFood}
          </Card.Text>
          {/* Like button on the right bottom */}
          <div className="mt-auto">
            <Button variant="dark" onClick={() => onLike(person.id)}>Like {person.likes}</Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ClassmateCard;
