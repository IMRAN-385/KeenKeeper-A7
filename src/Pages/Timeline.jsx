import { useState } from 'react'
import { useTimeline } from '../Context/TimelineContext'
import { Phone, MessageSquare, Video } from 'lucide-react'

const iconMap = {
  Call: <Phone size={20} />,
  Text: <MessageSquare size={20} />,
  Video: <Video size={20} />,
}

const Timeline = () => {
  const { timeline } = useTimeline()
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All' 
    ? timeline 
    : timeline.filter(entry => entry.type === filter)

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-6">Timeline</h2>

      {/* Filter Buttons */}
      <div className="flex gap-2 mb-6">
        {['All', 'Call', 'Text', 'Video'].map(type => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 rounded-full text-sm ${
              filter === type 
                ? 'bg-green-700 text-white' 
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-gray-400">No interactions yet!</p>
      ) : (
        <div className="flex flex-col gap-3">
          {filtered.map(entry => (
            <div key={entry.id} className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm">
              <div className="text-gray-500">
                {iconMap[entry.type]}
              </div>
              <div>
                <p className="font-semibold">{entry.title}</p>
                <p className="text-gray-400 text-sm">{entry.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Timeline