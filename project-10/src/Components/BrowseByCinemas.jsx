import React from "react";
import { ListGroup } from "react-bootstrap";

const cinemas = [
  "PVR Cinemas",
  "INOX",
  "Carnival Cinemas",
  "Miraj Cinemas",
  "Rajhans Cinemas",
  "City Gold",
  "Mukta A2 Cinemas",
];

const BrowseByCinemas = ({ selectedCinema, setSelectedCinema }) => {
  return (
    <div className="mt-4">
      <h6 className="text-danger fw-bold mb-3">🏢 Browse by Cinemas</h6>
      <ListGroup>
        {cinemas.map((cinema) => (
          <ListGroup.Item
            key={cinema}
            active={selectedCinema === cinema}
            onClick={() =>
              setSelectedCinema(selectedCinema === cinema ? null : cinema)
            }
            style={{
              cursor: "pointer",
              backgroundColor:
                selectedCinema === cinema ? "#d32f2f" : "#fff",
              color: selectedCinema === cinema ? "#fff" : "#000",
              border: "1px solid #ccc",
            }}
          >
            {cinema}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default BrowseByCinemas;
