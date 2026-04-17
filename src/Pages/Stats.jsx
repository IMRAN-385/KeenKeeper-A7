import { useTimeline } from '../Context/TimelineContext'
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts'

const COLORS = ['#1a3d2b', '#7c3aed', '#4ade80']

const Stats = () => {
  const { timeline } = useTimeline()

  const callCount = timeline.filter(e => e.type === 'Call').length
  const textCount = timeline.filter(e => e.type === 'Text').length
  const videoCount = timeline.filter(e => e.type === 'Video').length

  const data = [
    { name: 'Call', value: callCount },
    { name: 'Text', value: textCount },
    { name: 'Video', value: videoCount },
  ].filter(d => d.value > 0)

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-6">Friendship Analytics</h2>

      <div className="bg-white rounded-xl p-6 max-w-2xl">
        <h3 className="font-semibold mb-4">By Interaction Type</h3>

        {data.length === 0 ? (
          <p className="text-gray-400">No interactions yet!</p>
        ) : (
          <PieChart width={400} height={300}>
            <Pie
              data={data}
              cx={200}
              cy={130}
              innerRadius={80}
              outerRadius={120}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        )}
      </div>
    </div>
  )
}

export default Stats