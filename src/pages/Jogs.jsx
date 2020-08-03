import React, { useEffect, useState } from 'react'
import {
  JogaHeader, JogsEpmty, Loader, JogsList,
} from 'components'
import { useApi } from 'api'
import { AddJoga } from 'components/AddJoga'
import style from './Jogs.module.css'

export function Jogs() {
  const api = useApi()

  const { jogs, filter: isFilter } = api
  const [filteredJogs, setFilteredJogs] = useState(jogs)

  const [filter, setFilter] = useState({ from: '', to: '' })
  const from = new Date(filter.from).getTime()
  const to = new Date(filter.to).getTime()

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    api.getJogs().then(() => setLoading(false))
  }, [api])

  useEffect(() => {
    setFilteredJogs(jogs.filter(joga => (!from || joga.date > from)
    && (!to || joga.date < to)))
  }, [from, to, jogs])

  return (
    loading
      ? <div className={style.loaderContainer}><Loader color="#7ed321" size={60} /></div>
      : (
        <div className={style.container}>
          {jogs.length ? (
            <>
              {isFilter && <JogaHeader filter={filter} setFilter={setFilter} />}
              <div className={`${style.jogsContainer} ${isFilter ? style.jogsContainerFillter : ''}`}>
                <JogsList jogs={filteredJogs} />
              </div>
              <AddJoga />
            </>
          )
            : <JogsEpmty />}
        </div>
      )
  )
}
