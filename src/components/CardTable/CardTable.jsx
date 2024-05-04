import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import NavLink from 'react-bootstrap/NavLink';

const CardTable = ({ elements }) => {
  // Calculate the number of rows needed
  const numRows = Math.ceil(elements.length / 3);

  // Create an array of rows
  const rows = Array.from({ length: numRows }, (_, index) => {
    const startIndex = index * 3;
    const endIndex = startIndex + 3;
    const rowElements = elements.slice(startIndex, endIndex);

    // Render the Card components for each row
    const cards = rowElements.map((element, idx) => (
      <td key={idx} className="px-3 py-3">
        <NavLink href={element.link} target="_blank" rel="noreferrer">
          <Card style={{ width: '18rem', height: '18rem' }}>
            <Image variant="top" src={element.imageSrc} style={{ width: '18rem', height: '10rem' }} />
            <Card.Body>
              <Card.Title>{element.title}</Card.Title>
            </Card.Body>
          </Card>
        </NavLink>
      </td>
    ));

    return <tr key={index}>{cards}</tr>;
  });

  return (
    <table>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default CardTable;
