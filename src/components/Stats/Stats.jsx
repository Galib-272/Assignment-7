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

  const COLORS = ["#7C3AED", "#334E4E", "#5FA471"];

  return (
    <div className="max-w-4xl mx-auto p-10 font-geist bg-[#F8FAFC]">
      <h1 className="text-5xl font-black mb-10 text-[#1E293B] tracking-tighter">
        Friendship Analytics
      </h1>

      <div className="bg-white rounded-3xl shadow-sm p-10 pb-6 border border-gray-100 flex flex-col items-center">
        <h2 className="text-sm font-black uppercase tracking-widest text-[#1E293B] self-start mb-6">
          By Interaction Type
        </h2>

        {data.length > 0 ? (
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
                    backgroundColor: "#fff",
                    borderRadius: "12px",
                    border: "1px solid #f1f5f9",
                    color: "#1E293B",
                    fontWeight: "bold",
                  }}
                />
                <Legend
                  verticalAlign="bottom"
                  align="center"
                  iconType="circle"
                  iconSize={12}
                  formatter={(value) => (
                    <span className="text-[#64748B] font-bold text-lg px-2">
                      {value}
                    </span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className="w-full p-20 text-center rounded-2xl">
            <p className="text-gray-400 font-bold">
              No interactions logged yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stats;
