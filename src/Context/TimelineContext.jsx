import { createContext, useContext, useState } from 'react'

const TimelineContext = createContext()

export const TimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([])

  const addEntry = (type, friendName) => {
    const newEntry = {
      id: Date.now(),
      type,
      title: `${type} with ${friendName}`,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
    setTimeline(prev => [newEntry, ...prev])
  }

  return (
    <TimelineContext.Provider value={{ timeline, addEntry }}>
      {children}
    </TimelineContext.Provider>
  )
}

export const useTimeline = () => useContext(TimelineContext)