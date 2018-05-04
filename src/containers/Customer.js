import React, { PureComponent } from 'react'
import loremIpsum from 'lorem-ipsum';
import MainTable from '../controls/MainTable'
import FullDialog from '../controls/FullDialog'
import HomeForm from '../components/forms/HomeForm'
import { connect } from 'react-redux'
import actions from '../redux/actions'
import { user_selector } from '../redux/selectors/user'

@connect(user_selector)
class Customer extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
      dialogVisible: false,
      formData: [0]
    }

    this.TableProperties = {
      start: 0,
      limit: 10,
      page: 1,
      search: '',
      sort_by: 'first_name',
      is_ascending: false
    }
    this.TableHeader = [
      { key: 'first_name', label: 'First Name' },
      { key: 'last_name', label: 'Last' },
      { key: 'phone', label: 'Column 3' }
    ]

    this.TableData = [...new Array(350)].map((_, i) => ({
      id: i,
      col_1: loremIpsum({ count: 5, units: 'words' }),
      col_2: loremIpsum({ count: 5, units: 'words' }),
      col_3: loremIpsum({ count: 5, units: 'words' })
    }));
  }
  componentDidMount() {
    this.getUserList()
  }
  getUserList(TableProperties) {
    this.props.dispatch(actions.fetchUserList(this.TableProperties))
  }
  handleSort = (sort_by) => {
    const is_ascending = !this.TableProperties.is_ascending
    this.TableProperties = { ...this.TableProperties, sort_by, is_ascending }
  }
  handlePagination = (start, limit, page) => {
    this.TableProperties = { ...this.TableProperties, start, limit, page }
    this.getUserList()
  }
  handleHideDialog = () => {
    this.setState({ dialogVisible: false })
  }
  handleAdd = () => {
    this.setState({ dialogVisible: true })
  }
  handleAddItem = () => {
    const formData = [...this.state.formData, this.state.formData.length]
    this.setState({ formData })
  }
  render() {
    const { user } = this.props
    const { dialogVisible, formData } = this.state
    // const { start, limit } = this.TableProperties
    // const data = this.TableData.slice(start, start + limit)
    return (
      <div className='md-grid'>
        <MainTable
          totalCount={user.list.total}
          data={user.list.data}
          header={this.TableHeader}
          properties={this.TableProperties}
          onSort={this.handleSort}
          onPagination={this.handlePagination}
          onAddClick={this.handleAdd}
        />
        <FullDialog
          title='Create New Nutrition'
          visible={dialogVisible}
          onAdd={this.handleAddItem}
          onHide={this.handleHideDialog}
        >
          {
            formData.map(m => (
              <HomeForm key={m} />
            ))
          }
        </FullDialog>
      </div>
    )
  }
}

export default Customer
