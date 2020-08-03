import React from 'react'
import add from 'assets/add.svg'
import { useHistory } from 'react-router-dom'
import { useApi } from 'api'
import style from './AddJoga.module.css'

export function AddJoga() {
  const history = useHistory()
  const api = useApi()

  function handleClick() {
    api.setCurrentJoga({})
    history.push('/create_joga')
  }

  return <img onClick={handleClick} src={add} alt="add joga" className={style.image} />
}
