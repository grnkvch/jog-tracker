import React from 'react'
import sadEmoticon from 'assets/sad-rounded-square-emoticon.svg'
import style from './JogsEpmty.module.css'
import { Button } from '../Button'

export function JogsEpmty() {
  return (
    <div className={style.container}>
      <img src={sadEmoticon} className={style.image} alt="logo bear" />
      <span>Nothing is there</span>
      <Button color="#e990f9">
        Create your jog first
      </Button>
    </div>
  )
}
