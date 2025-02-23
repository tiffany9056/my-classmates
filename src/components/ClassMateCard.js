// Import modules from React and Bootstrap
import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

// Component to display each classmate's details
function ClassmateCard({ person }) {
  const [likes, setLikes] = useState(0); // useState hook to manage the count for each card
  return (
    <Card className="mb-3 p-1 bg-light" style={{ width: "100%", wordBreak: "break-word", maxWidth: "70%" }}>
      <Card.Body>
        {/* Display the classmate's name as the card title */}
        <Card.Text>Name: {person.name}</Card.Text>
        <Card.Text>Favorite: {person.favoriteColor}</Card.Text>
        {/* Row for Favorite Food and Like Button */}
        <div className="d-flex justify-content-between align-items-center">
          {/* favorite food on the left */}
          <Card.Text className="text-wrap" style={{maxWidth: "70%" }}>
            Favorite Food: {person.favoriteFood}
          </Card.Text>
          {/* Like button on the right bottom */}
          <div className="mt-auto">
          <Button variant="dark" onClick={() => setLikes(likes + 1)}>Like {likes}</Button>
        </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ClassmateCard;
