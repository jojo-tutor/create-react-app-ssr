import React from 'react';
import PropTypes from 'prop-types';
import { Button, TableCardHeader } from 'react-md';

import FlatOrIconButton from './FlatOrIconButton';

const TableActions = ({ count, onAddClick, onRemoveClick }) => (
  <TableCardHeader
    title="Nutrition"
    visible={count > 0}
    contextualTitle={`${count} item${count > 1 ? 's' : ''} selected`}
    actions={[
      <Button
        icon
        key="add"
        onClick={onAddClick}
        tooltipLabel="Add more rows"
        tooltipDelay={300}
      >
        add
      </Button>,
      <Button
        icon
        key="delete"
        onClick={onRemoveClick}
        tooltipLabel="Remove selected rows"
        tooltipDelay={300}
        tooltipPosition="left"
      >
        delete
      </Button>,
    ]}
  >
    <FlatOrIconButton onClick={onAddClick} iconChildren="add">Add New</FlatOrIconButton>
  </TableCardHeader>
);

TableActions.propTypes = {
  count: PropTypes.number.isRequired,
  onAddClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
};

export default TableActions;