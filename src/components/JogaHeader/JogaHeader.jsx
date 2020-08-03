import React, { useCallback, useEffect } from 'react'
import style from './JogaHeader.module.css'

export function JogaHeader({ filter, setFilter }) {
  const setFrom = useCallback(({ target }) => setFilter({ ...filter, from: target.value }),
    [filter, setFilter])
  const setTo = useCallback(({ target }) => setFilter({ ...filter, to: target.value }),
    [filter, setFilter])

  useEffect(() => setFilter({ from: '', to: '' }), [setFilter])

  return (
    <div className={style.container}>
      <form>
        <label htmlFor="DateFrom">Date from</label>
        <input
          value={filter.from}
          onChange={setFrom}
          id="DateFrom"
          className={style.input}
          type="date"
        />
      </form>
      <form>
        <label htmlFor="DateTo">Date to</label>
        <input
          value={filter.to}
          onChange={setTo}
          id="DateTo"
          className={style.input}
          type="date"
        />
      </form>
    </div>
  )
}
