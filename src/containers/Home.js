import React, { PureComponent } from 'react'
import loremIpsum from 'lorem-ipsum';
import MainTable from '../controls/MainTable'
import FullDialog from '../controls/FullDialog'
import HomeForm from '../components/forms/HomeForm'

class Home extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
      dialogVisible: false
    }

    this.TableProperties = {
      start: 0,
      rows: 10,
      page: 1,
      search: '',
      sort_by: 'col_1',
      is_ascending: false
    }
    this.TableHeader = [
      { key: 'col_1', label: 'Column 1' },
      { key: 'col_2', label: 'Column 2' },
      { key: 'col_3', label: 'Column 3' }
    ]

    this.TableData = [...new Array(350)].map((_, i) => ({
      id: i,
      col_1: loremIpsum({ count: 5, units: 'words' }),
      col_2: loremIpsum({ count: 5, units: 'words' }),
      col_3: loremIpsum({ count: 5, units: 'words' })
    }));
  }
  handleSort = (sort_by) => {
    const is_ascending = !this.TableProperties.is_ascending
    this.TableProperties = { ...this.TableProperties, sort_by, is_ascending }
    this.setState({ counter: this.state.counter++ })
  }
  handlePagination = (start, rows, page) => {
    this.TableProperties = { ...this.TableProperties, start, rows, page }
    this.setState({ counter: this.state.counter++ })
  }
  handleHideDialog = () => {
    this.setState({ dialogVisible: false })
  }
  handleAdd = () => {
    this.setState({ dialogVisible: true })
  }
  render() {
    const { dialogVisible } = this.state
    const { start, rows } = this.TableProperties
    const data = this.TableData.slice(start, start + rows)
    return (
      <div className='md-grid'>
        <h2 className='md-cell md-cell--12 md-text-container'>
          Home
        </h2>
        <MainTable
          total_count={350}
          data={data}
          header={this.TableHeader}
          properties={this.TableProperties}
          onSort={this.handleSort}
          onPagination={this.handlePagination}
          onAddClick={this.handleAdd}
        />
        <FullDialog
          title='Create New Nutrition'
          visible={dialogVisible}
          onHide={this.handleHideDialog}
        >
          <HomeForm/>
        </FullDialog>
      </div>
    )
  }
}

export default Home
