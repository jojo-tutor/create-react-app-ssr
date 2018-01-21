import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  DataTable,
  TableHeader,
  TableBody,
  TableRow,
  TableColumn,
  TablePagination,
} from 'react-md';
import loremIpsum from 'lorem-ipsum';

const headers = [...new Array(6)].map((_, i) => ({
  id: i,
  name: `Column ${i + 1}`
}));
const data = [...new Array(350)].map((_, i) => ({
  key: i,
  cell1: loremIpsum({ count: 5, units: 'words' }),
  cell2: loremIpsum({ count: 5, units: 'words' }),
  cell3: loremIpsum({ count: 5, units: 'words' }),
  cell4: loremIpsum({ count: 5, units: 'words' }),
  cell5: loremIpsum({ count: 5, units: 'words' }),
  cell6: loremIpsum({ count: 5, units: 'words' }),
}));
const rows = data.length;

class SimplePagination extends PureComponent {
  static propTypes = {
    mobile: PropTypes.bool,
  };

  state = { slicedData: data.slice(0, 10), ascending: false, sortBy: null };

  handlePagination = (start, rowsPerPage) => {
    this.setState({ slicedData: data.slice(start, start + rowsPerPage) });
  };

  handleSort(id) {
    this.setState({
      sortBy: id,
      ascending: id !== this.state.sortBy && !this.state.ascending ? true : false
    })
  }

  render() {
    const { slicedData, sortBy, ascending } = this.state;
    const rowsPerPageLabel = this.props.mobile ? 'Rows' : 'Rows per page';
    return (
      <DataTable baseId="simple-pagination">
        <TableHeader>
          <TableRow selectable={false}>
            {headers.map(({ id, name }) =>
              (<TableColumn
                grow
                id={id}
                key={id}
                sorted={ascending && sortBy === id}
                role='button'
                onClick={() => this.handleSort(id)}
              >
                  { name }
              </TableColumn>)
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {slicedData.map(({ key, cell1, cell2, cell3, cell4, cell5, cell6 }) => (
            <TableRow key={key} selectable={false}>
              <TableColumn>{cell1}</TableColumn>
              <TableColumn>{cell2}</TableColumn>
              <TableColumn>{cell3}</TableColumn>
              <TableColumn>{cell4}</TableColumn>
              <TableColumn>{cell5}</TableColumn>
              <TableColumn>{cell6}</TableColumn>
            </TableRow>
          ))}
        </TableBody>
        <TablePagination rows={rows} rowsPerPageLabel={rowsPerPageLabel} onPagination={this.handlePagination} />
      </DataTable>
    );
  }
}
export default SimplePagination;
