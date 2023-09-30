import React from 'react';
import Card from '../Card/Card';

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
      <td key={idx}>
        <Card
          imageSrc={element.imageSrc}
          description={element.description}
          link={element.link}
        />
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
