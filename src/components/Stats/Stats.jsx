import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const Stats = ({ timeline }) => {
  const data = [
    { name: "Text", value: timeline.filter((t) => t.type === "Text").length },
    { name: "Call", value: timeline.filter((t) => t.type === "Call").length },
    { name: "Video", value: timeline.filter((t) => t.type === "Video").length },
  ].filter((d) => d.value > 0);

  const COLORS = ["#8b5cf6", "#1E293B", "#27AE60"];

  return (
    <div className="max-w-4xl mx-auto p-10 font-geist bg-[#F8FAFC]">
      <h1 className="text-5xl font-black mb-10 text-[#1E293B] tracking-tighter">
        Friendship Analytics
      </h1>

      <div className="bg-white rounded-[24px] shadow-sm p-10 border border-gray-100 flex flex-col items-center">
        <h2 className="text-sm font-black uppercase tracking-widest text-[#1E293B] self-start mb-10">
          By Interaction Type
        </h2>
        
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={70}
                outerRadius={100}
                paddingAngle={8}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  borderRadius: '12px', 
                  border: '1px solid #f1f5f9',
                  color: '#1E293B',
                  fontWeight: 'bold'
                }} 
              />
              <Legend 
                verticalAlign="bottom" 
                height={36} 
                formatter={(value) => <span className="text-[#1E293B] font-bold px-2">{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Stats;