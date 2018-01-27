import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  DataTable,
  TableHeader,
  TableBody,
  TableRow,
  TableColumn,
  TablePagination,
} from 'react-md';
import TableActions from './TableActions'

class MainTable extends PureComponent {
  state = {
    selectedCount: 0
  }
  handleRowToggle = (index, value, selectedCount) => {
    this.setState({ selectedCount })
  }
  render() {
    const { header, total_count, data, properties, onSort, onPagination, onAddClick } = this.props
    const { selectedCount } = this.state
    const { sort_by, is_ascending, page } = properties
    return (
      <Card tableCard>
        <TableActions
          count={selectedCount}
          onAddClick={onAddClick}
          onRemoveClick={() => {}}
          onResetClick={() => {}}
        />
        <DataTable baseId='dataTable' onRowToggle={this.handleRowToggle}>
          <TableHeader>
            <TableRow>
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
                return (
                  <TableRow key={eachData.id}>
                    {
                      header.map(({ key }, count) => {
                        return (
                          <TableColumn key={`${{ key }}${count}`}>
                            {eachData[key]}
                          </TableColumn>
                        )
                      })
                    }
                  </TableRow>
                )
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
      </Card>
    );
  }
}

MainTable.propTypes = {
  header: PropTypes.arrayOf(PropTypes.object).isRequired,
  properties: PropTypes.object.isRequired
}

export default MainTable;
