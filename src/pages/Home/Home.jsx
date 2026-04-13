import { useNavigate } from "react-router-dom";

const Home = ({ friends, loading }) => {
  const navigate = useNavigate();

  if (loading) return (
    <div className="flex justify-center items-center h-96">
      <span className="loading loading-spinner loading-lg text-[#334e4e]"></span>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 font-geist">
      {/* Header Section */}
      <header className="text-center mb-16">
        <h1 style={{ color: '#244D3F' }} className="text-5xl font-extrabold mb-4 tracking-tight">
          Friends to keep close in your life
        </h1>
        <p style={{ color: '#64748B' }} className="text-lg mb-8 max-w-2xl mx-auto font-medium">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        <button className="btn bg-[#244D3F] hover:bg-[#1a3a2f] text-white border-none rounded-md px-8 font-bold">
          + Add a Friend
        </button>
      </header>

      {/* --- RE-ADDED STATS SECTION --- */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {[
          { label: "Total Friends", val: friends.length },
          { label: "On Track", val: friends.filter(f => f.status === 'on-track').length },
          { label: "Need Attention", val: friends.filter(f => f.status === 'overdue').length },
          { label: "Interactions", val: 12 }
        ].map((s, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
            <div className="text-3xl font-black text-gray-800">{s.val}</div>
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{s.label}</div>
          </div>
        ))}
      </div>
      {/* ------------------------------ */}

      <h2 className="text-2xl font-bold mb-8 text-gray-800">Your Friends</h2>
      
      {/* Friends Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {friends.map((f) => (
          <div 
            key={f.id} 
            onClick={() => navigate(`/friend/${f.id}`)}
            className="bg-white rounded-[24px] border border-gray-100 shadow-sm hover:shadow-lg transition-all cursor-pointer p-8 text-center flex flex-col items-center"
          >
            <div className="relative mb-6">
              <img src={f.picture} className="w-24 h-24 rounded-full object-cover" alt={f.name} />
            </div>

            <h3 className="font-bold text-2xl text-[#1E293B] mb-1">{f.name}</h3>
            <p className="text-base text-[#64748B] mb-4 font-medium">{f.days_since_contact}d ago</p>

            <div className="flex flex-col gap-3 w-full items-center">
              {/* Green badges side-by-side fix */}
              <div className="flex flex-row flex-wrap justify-center gap-2">
                {f.tags.map(t => (
                  <span 
                    key={t} 
                    className="bg-[#D1FAE5] text-[#065F46] text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-tight whitespace-nowrap"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className={`text-white text-xs font-bold px-6 py-2 rounded-full capitalize shadow-sm ${
                f.status === 'overdue' ? 'bg-[#E15549]' : f.status === 'almost due' ? 'bg-[#F2994A]' : 'bg-[#27AE60]'
              }`}>
                {f.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;