import React from 'react'
import { JogaCard } from 'components/JogaCard'

export const JogsList = React.memo(({ jogs }) => (
  jogs.map(joga => (<JogaCard key={joga.id} joga={joga} />))
), (prev, next) => prev.jogs === next.jogs)
