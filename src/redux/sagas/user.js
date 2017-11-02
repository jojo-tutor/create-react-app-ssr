import axios from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'

const url = 'https://jsonplaceholder.typicode.com'

function *FetchUserList() {
  let config = {
    method: 'GET',
    url: `${url}/users`
  }

  try {
    const result = yield call(axios, config)
    yield put({ type: 'FETCH_USER_LIST', payload: result.data })
  } catch (error) {
    yield put({ type: 'ERROR', payload: error })
  }
}

function *FetchUserDetails({ payload }) {
  let config = {
    method: 'GET',
    url: `${url}/users/${payload.id}`
  }

  try {
    const result = yield call(axios, config, 'FETCH_USER_DETAILS')
    yield put(result)
  } catch (error) {
    yield put({ type: 'ERROR', error })
  }
}

function *AddUser({ payload }) {
  let config = {
    method: 'POST',
    url: `${url}/users`,
    data: payload
  }

  try {
    const result = yield call(axios, config, 'ADD_USER')
    yield put(result)
  } catch (error) {
    yield put({ type: 'ERROR', error })
  }
}

function *UpdateUser({ payload }) {
  let config = {
    method: 'PUT',
    url: `${url}/users/${payload.id}`,
    data: payload
  }

  try {
    const result = yield call(axios, config, 'UPDATE_USER')
    yield put(result)
  } catch (error) {
    yield put({ type: 'ERROR', error })
  }
}

function *DeleteUser({ payload }) {
  let config = {
    method: 'DELETE',
    url: `${url}/users/${payload.id}`
  }

  try {
    const result = yield call(axios, config, 'DELETE_USER')
    yield put(result)
  } catch (error) {
    yield put({ type: 'ERROR', error })
  }
}

module.exports = function *() {
  yield takeLatest('FETCH_USER_LIST_PROCESSING', FetchUserList)
  yield takeLatest('FETCH_USER_DETAILS_PROCESSING', FetchUserDetails)
  yield takeLatest('ADD_USER_PROCESSING', AddUser)
  yield takeLatest('UPDATE_USER_PROCESSING', UpdateUser)
  yield takeLatest('DELETE_USER_PROCESSING', DeleteUser)
}
