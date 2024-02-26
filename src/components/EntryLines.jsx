import React from 'react';
import { Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import EntryLine from './EntryLine';

function EntryLines({ entries }) {
  return (
    <Container>
      {entries.map((entry) => {
        return <EntryLine {...entry} key={entry.id} />;
      })}
    </Container>
  );
}

EntryLines.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
};

export default EntryLines;
