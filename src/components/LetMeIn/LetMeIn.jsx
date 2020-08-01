import React from 'react'
import bearFace from 'assets/bear-face.svg'
import { Button } from '../Button'
import style from './LetMeIn.module.css'

export function LetMeIn() {
  return (
    <div className={style.container}>
      <img src={bearFace} className={style.image} alt="logo bear" />
      <Button color="white">
        Let me in
      </Button>
    </div>
  )
}
