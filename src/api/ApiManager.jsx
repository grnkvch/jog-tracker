import React, { useReducer, useCallback } from 'react'
import { BASE_URL } from './config.json'

export class Api {
  constructor(token) {
    this.token = token
  }

  login() {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
      body: 'uuid=hello',
    }

    return fetch(`${BASE_URL}/api/v1/auth/uuidLogin`, requestOptions)
      .then(response => response.json())
      .then(({ response: { access_token } }) => {
        this.token = access_token
        return this.token
      })
  }

  getJogs() {
    const requestOptions = {
      headers: {
        Authorization: `Bearer ${this.token}`,
        Accept: 'application/json',
      },
    }
    return fetch(`${BASE_URL}/api/v1/data/sync`, requestOptions)
      .then(response => response.json())
      .then(({ response: { jogs } }) => jogs)
  }

  updateJoga(joga) {
    const requestOptions = {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify(joga),
    }
    return fetch(`${BASE_URL}/api/v1/data/jog`, requestOptions)
  }

  createJoga(joga) {
    const requestOptions = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify(joga),
    }
    return fetch(`${BASE_URL}/api/v1/data/jog`, requestOptions)
  }
}

function init(token) {
  return {
    token,
    jogs: [],
    currentJoga: null,
    filter: false,
  }
}

function reducer(state, action) {
  switch (action.type) {
    case 'login':
      return { ...state, token: action.payload }
    case 'getJogs':
      return { ...state, jogs: action.payload }
    case 'setCurrentJoga':
      return { ...state, currentJoga: action.payload }
    case 'toggleFilter':
      return { ...state, filter: !state.filter }
    default:
      return state
  }
}

const ApiContext = React.createContext()

export const useApi = () => React.useContext(ApiContext)

export const ApiProvider = ({ children }) => {
  const authToken = localStorage.getItem('authToken')
  const api = new Api(authToken)

  const [state, dispatch] = useReducer(reducer, authToken, init)

  const login = useCallback(async () => {
    const token = await api.login()
    localStorage.setItem('authToken', token)
    dispatch({ type: 'login', payload: token })
  }, [api])

  const getJogs = useCallback(async () => {
    const jogs = await api.getJogs()
    dispatch({ type: 'getJogs', payload: jogs })
  }, [api])

  const setCurrentJoga = useCallback(joga => {
    dispatch({ type: 'setCurrentJoga', payload: joga })
  }, [])

  const updateJoga = useCallback(joga => api.updateJoga(joga), [api])
  const createJoga = useCallback(joga => api.createJoga(joga), [api])
  const toggleFilter = useCallback(() => {
    dispatch({ type: 'toggleFilter' })
  }, [])

  const value = {
    ...state,
    login,
    getJogs,
    setCurrentJoga,
    updateJoga,
    createJoga,
    toggleFilter,
  }

  return (
    <ApiContext.Provider value={value}>
      {children}
    </ApiContext.Provider>
  )
}
