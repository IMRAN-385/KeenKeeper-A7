import { useState, useEffect } from 'react'
import friendsData from '../../../data.json'
import Card from './Card'

const Homepage = () => {
  const [friends, setFriends] = useState([])
  const [loading, setLoading] = useState(true)
  const total = friends.length
  const onTrack = friends.filter(f => f.status === "on-track").length
  const needAttention = friends.filter(f => f.status === "overdue" || f.status === "almost due").length
  const interactions = 12

  useEffect(() => {
    setTimeout(() => {
      setFriends(friendsData)
      setLoading(false)
    }, 500)
  }, [])

  if (loading) return <div className="flex justify-center p-20"><span className="loading loading-dots loading-lg"></span></div>

  return (
    <div className="p-10">
      <h2 className="text-center text-3xl font-bold">Friends to keep close in your life</h2>
      <p className="text-center text-gray-400 text-sm mt-2">
        Your personal shelf of meaningful connections.
      </p>
      <div className="flex justify-center mt-4">
        <button className="bg-green-700 text-white px-4 py-2 rounded-lg">+ Add a Friend</button>
      </div>

      <h3 className="text-xl font-semibold mt-10 mb-4">Your Friends</h3>
      
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6 pb-6">
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <h3 className="text-2xl font-bold">{total}</h3>
            <p className="text-gray-400 text-sm">Total Friends</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <h3 className="text-2xl font-bold">{onTrack}</h3>
            <p className="text-gray-400 text-sm">On Track</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <h3 className="text-2xl font-bold">{needAttention}</h3>
            <p className="text-gray-400 text-sm">Need Attention</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <h3 className="text-2xl font-bold">{interactions}</h3>
            <p className="text-gray-400 text-sm">Interactions This Month</p>
          </div>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {friends.map(friend => (
          <Card key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  )
}

export default Homepage