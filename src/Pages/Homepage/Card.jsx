import { useNavigate } from 'react-router-dom'

const statusConfig = {
  "on-track": { label: "On-Track", className: "bg-green-500 text-white" },
  "almost due": { label: "Almost Due", className: "bg-yellow-500 text-white" },
  "overdue": { label: "Overdue", className: "bg-red-500 text-white" },
}

const Card = ({ friend }) => {
  const navigate = useNavigate()
  const status = statusConfig[friend.status]

  return (
    <div onClick={() => navigate(`/friends/${friend.id}`)}
      className="bg-white rounded-xl p-4 flex flex-col items-center gap-2 cursor-pointer hover:shadow-md transition">
      <img src={friend.picture} alt={friend.name}
        className="w-16 h-16 rounded-full object-cover" />
      <h3 className="font-semibold text-gray-800">{friend.name}</h3>
      <p className="text-sm text-gray-400">{friend.days_since_contact}d ago</p>
      <div className="flex flex-wrap gap-1 justify-center">
        {friend.tags.map((tag, i) => (
          <span key={i} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <span className={`text-xs px-3 py-1 rounded-full ${status.className}`}>
        {status.label}
      </span>
    </div>
  )
}

export default Card