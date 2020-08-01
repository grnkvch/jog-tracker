import React from 'react'
import style from './JogaHeader.module.css'

export function JogaHeader() {
  return (
    <div className={style.container}>
      <form>
        <label htmlFor="DateFrom">Date from</label>
        <input id="DateFrom" className={style.input} type="date" />
      </form>
      <form>
        <label>Date to</label>
        <input className={style.input} type="date" />
      </form>
    </div>
  )
}
