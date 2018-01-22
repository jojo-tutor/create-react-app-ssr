import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  DataTable,
  TableHeader,
  TableBody,
  TableRow,
  TableColumn,
  TablePagination,
} from 'react-md';

class Table extends PureComponent {
  render() {
    const { header, total_count, data, properties, onSort, onPagination } = this.props
    const { sort_by, is_ascending, page } = properties
    return (
      <DataTable baseId='dataTable'>
        <TableHeader>
          <TableRow selectable={false}>
            {
              header.map(({ key, label }) => (
                <TableColumn
                  grow
                  id={key}
                  key={key}
                  sorted={is_ascending && sort_by === key}
                  role='button'
                  onClick={() => onSort(key)}
                >
                    { label }
                </TableColumn>))
            }
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            data.map(eachData => {
              return (<TableRow key={eachData.id} selectable={false}>
                {
                  header.map(({ key }, count) => {
                    return (<TableColumn key={`${{ key }}${count}`}>{eachData[key]}</TableColumn>)
                  })
                }
              </TableRow>)
            }
            )
          }
        </TableBody>
        <TablePagination
          page={page}
          rows={total_count}
          rowsPerPageLabel='Rows'
          onPagination={onPagination}
        />
      </DataTable>
    );
  }
}

Table.PropTypes = {
  header: PropTypes.array.required,
  properties: PropTypes.object.required
}

export default Table;
