import React from 'react'
import { Button } from 'components/Button'
import style from './CreateJogaDialog.module.css'

export function CreateJogaDialog() {
  return (
    <div className={style.container}>
      <div className={style.crossBtn} />
      <div className={style.formContainer}>
        <form>
          <label>Distance</label>
          <input className={style.input} />
        </form>
        <form>
          <label>Distance</label>
          <input className={style.input} />
        </form>
        <form>
          <label>Distance</label>
          <input className={style.input} />
        </form>
      </div>
      <Button color="white">
        Save
      </Button>
    </div>
  )
}
