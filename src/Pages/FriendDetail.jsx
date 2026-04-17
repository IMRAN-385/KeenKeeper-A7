import { useParams } from 'react-router-dom';
import friendsData from '../../data.json';
import { Phone, MessageSquare, Video } from 'lucide-react';
import { AlarmClock } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { Archive } from 'lucide-react';
import toast from 'react-hot-toast';
import { useTimeline } from '../Context/TimelineContext';

const FriendDetail = () => {
  const { id } = useParams()
  const friend = friendsData.find(f => f.id === parseInt(id))
  const { addEntry } = useTimeline()



return (
  <div className="p-10 bg-gray-100 min-h-screen">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

      {/* Left Column */}
      <div className="flex flex-col gap-4">

        {/* Profile Card */}
        <div className="bg-white rounded-xl p-6 flex flex-col items-center text-center gap-2">
          <img src={friend.picture} alt={friend.name}
            className="w-20 h-20 rounded-full object-cover" />
          <h2 className="text-xl font-bold">{friend.name}</h2>
          <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">
            {friend.status}
          </span>
          <div className="flex gap-1">
            {friend.tags.map((tag, i) => (
              <span key={i} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-500 text-sm italic">"{friend.bio}"</p>
          <p className="text-gray-400 text-sm">Preferred: email</p>
        </div>

        {/* Action Buttons */}
        <div className="bg-white rounded-xl flex flex-col  m-1">
          <button className=" flex gap-3 p-4 text-left text-sm shadow p-2 my-2"> <AlarmClock /> Snooze 2 Weeks</button>
          <button className=" flex gap-3 p-4 text-left text-sm shadow p-2 my-2
          "><Archive />Archive</button>
          <button className=" flex gap-3 p-4 text-left text-sm text-red-500 shadow p-2 my-2 "><Trash2 /> Delete</button>
        </div>
      </div>

      {/* Right Column */}
      <div className="lg:col-span-2 flex flex-col gap-4">

        {/* Stat Cards */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-4 text-center">
            <h3 className="text-3xl font-bold">{friend.days_since_contact}</h3>
            <p className="text-gray-400 text-sm">Days Since Contact</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center">
            <h3 className="text-3xl font-bold">{friend.goal}</h3>
            <p className="text-gray-400 text-sm">Goal (Days)</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center">
            <h3 className="text-2xl font-bold">{friend.next_due_date}</h3>
            <p className="text-gray-400 text-sm">Next Due</p>
          </div>
        </div>

        {/* Relationship Goal */}
        <div className="bg-white rounded-xl p-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold">Relationship Goal</h3>
            <button className="border text-sm px-3 py-1 rounded-lg">Edit</button>
          </div>
          <p className="text-gray-500 text-sm">
            Connect every <span className="font-bold">{friend.goal} days</span>
          </p>
        </div>

      
        <div className="bg-white rounded-xl p-6">
          <h3 className="font-semibold mb-4">Quick Check-In</h3>
          <div className="grid grid-cols-3 gap-4">
            <button onClick={() => { addEntry('Call', friend.name); toast.success(`📞 Called ${friend.name}`) }}
            className="border rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-gray-50">
            <Phone size={24} />
            <span className="text-sm">Call</span>
          </button>

          <button onClick={() => { addEntry('Text', friend.name); toast.success(`💬 Texted ${friend.name}`) }}
            className="border rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-gray-50">
            <MessageSquare size={24} />
            <span className="text-sm">Text</span>
          </button>

          <button onClick={() => { addEntry('Video', friend.name); toast.success(`🎥 Video called ${friend.name}`) }}
            className="border rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-gray-50">
            <Video size={24} />
            <span className="text-sm">Video</span>
          </button>
                    </div>
        </div>

      </div>
    </div>
  </div>
)
}

export default FriendDetail