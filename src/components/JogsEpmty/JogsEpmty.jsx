import React from 'react'
import sadEmoticon from 'assets/sad-rounded-square-emoticon.svg'
import { useHistory } from 'react-router-dom'
import { useApi } from 'api'
import style from './JogsEpmty.module.css'
import { Button } from '../Button'

export function JogsEpmty() {
  const api = useApi()

  const history = useHistory()

  function handleClick() {
    api.setCurrentJoga({})
    history.push('/create_joga')
  }

  return (
    <div className={style.container}>
      <img src={sadEmoticon} className={style.image} alt="logo bear" />
      <span>Nothing is there</span>
      <Button color="#e990f9" onClick={handleClick}>
        Create your jog first
      </Button>
    </div>
  )
}
