import React, { useState } from 'react'
import { Button } from 'components/Button'
import { useApi } from 'api'
import style from './CreateJogaDialog.module.css'
import { useCallback } from 'react'
import { Redirect, Link, useHistory } from 'react-router-dom'


export function CreateJogaDialog() {
  const api = useApi();
  const history = useHistory()

  const { currentJoga } = api;
  const [dist, setDist] = useState(currentJoga?.distance || '')
  const [time, setTime] = useState(currentJoga?.time || '')
  const [date, setDate] = useState(() => {
    if(!currentJoga?.date) return new Date(Date.now()).toISOString().slice(0,10)
    return new Date(currentJoga.date).toISOString().slice(0,10)
  })

  const onDistChange = useCallback(({ target })=> setDist(target.value), [])
  const onTimeChange = useCallback(({ target })=> setTime(target.value), [])
  const onDateChange = useCallback(({ target })=> setDate(target.value), [])

 async function onClick() {
    if(currentJoga.id){
      await api.updateJoga({
        ...currentJoga,
        jog_id: currentJoga.id,
        distance: Number(dist) || 0,
        time: Number(time) || 0,
        date: new Date(date).toISOString().slice(0, 19).replace('T', ' '),
      })
    } else {
     await api.createJoga({
        distance: Number(dist) || 0,
        time: Number(time) || 0,
        date: new Date(date).toISOString().slice(0, 19).replace('T', ' '),
      })
    }
    history.push('/jogs')
  }

  return currentJoga ? (
    <div className={style.container}>
      <Link to="/jogs"><div className={style.crossBtn} /></Link>
      <div className={style.formContainer}>
        <form>
          <label>Distance</label>
          <input value={dist} onChange={onDistChange} className={style.input} />
        </form>
        <form>
          <label>Time</label>
          <input value={time} onChange={onTimeChange} className={style.input} />
        </form>
        <form>
          <label>Date</label>
          <input type="date"  value={date} onChange={onDateChange} className={style.input} />
        </form>
      </div>
      <Button color="white" onClick={onClick}>
        Save
      </Button>
    </div>
  ) : (<Redirect to="/jogs"></Redirect>)
}
