import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import {
  FaPhone,
  FaCommentAlt,
  FaVideo,
  FaClock,
  FaArchive,
  FaTrash,
} from "react-icons/fa";

const FriendDetails = ({ friends, addTimelineEntry }) => {
  const { id } = useParams();
  const friend = friends.find((f) => f.id === parseInt(id));

  if (!friend)
    return <div className="p-20 text-center font-geist">Friend not found.</div>;

  const handleAction = (type) => {
    const newEntry = {
      // eslint-disable-next-line react-hooks/purity
      entryId: Date.now(),
      friendName: friend.name,
      type: type,
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
    };
    addTimelineEntry(newEntry);
    toast.success(`${type} logged with ${friend.name}!`);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8 py-12 font-geist">
      {/* Left Column: Profile Card */}
      <div className="lg:col-span-1">
        <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 p-8 text-center">
          <img
            src={friend.picture}
            alt={friend.name}
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover ring-4 ring-white shadow-md"
          />
          <h2 className="text-2xl font-black text-[#1E293B]">{friend.name}</h2>

          <div className="flex flex-col items-center gap-2 my-4">
            <span
              className={`text-white text-[10px] font-extrabold px-6 py-1.5 rounded-full uppercase ${
                friend.status === "overdue" ? "bg-[#E15549]" : "bg-[#27AE60]"
              }`}
            >
              {friend.status}
            </span>
            <div className="flex justify-center gap-2">
              {friend.tags.map((t) => (
                <span
                  key={t}
                  className="bg-[#D1FAE5] text-[#065F46] text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <p className="text-[#64748B] italic text-sm mb-6">"{friend.bio}"</p>

          <div className="flex flex-col gap-2">
            <button className="btn bg-white border-gray-100 text-[#1E293B] hover:bg-gray-50 font-bold capitalize shadow-sm">
              <FaClock /> Snooze 2 Weeks
            </button>
            <button className="btn bg-white border-gray-100 text-[#1E293B] hover:bg-gray-50 font-bold capitalize shadow-sm">
              <FaArchive /> Archive
            </button>
            <button className="btn bg-white border-red-100 text-red-500 hover:bg-red-50 font-bold capitalize shadow-sm">
              <FaTrash /> Delete Friend
            </button>
          </div>
        </div>
      </div>

      {/* Right Column: Stats & Actions */}
      <div className="lg:col-span-2 space-y-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-[24px] shadow-sm border border-gray-100 text-center">
            <p className="text-4xl font-black text-[#1E293B]">
              {friend.days_since_contact}
            </p>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              Days Since Contact
            </p>
          </div>
          <div className="bg-white p-6 rounded-[24px] shadow-sm border border-gray-100 text-center">
            <p className="text-4xl font-black text-[#1E293B]">{friend.goal}</p>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              Goal (Days)
            </p>
          </div>
          <div className="bg-white p-6 rounded-[24px] shadow-sm border border-gray-100 text-center">
            <p className="text-2xl font-black text-[#1E293B] mb-1">
              {friend.next_due_date}
            </p>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              Next Due
            </p>
          </div>
        </div>

        {/* Relationship Goal Section */}
        <div className="bg-white p-8 rounded-[24px] shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-black text-[#1E293B] uppercase tracking-widest text-xs">
              Relationship Goal
            </h3>
            <button className="btn btn-ghost btn-xs bg-gray-50 hover:bg-gray-100 font-bold text-gray-500 border border-gray-100 px-4">
              Edit
            </button>
          </div>
          <p className="text-[#64748B] text-sm">
            Connect every{" "}
            <span className="font-black text-[#1E293B]">
              {friend.goal} days
            </span>
          </p>
        </div>

        <div className="bg-white p-8 rounded-[24px] shadow-sm border border-gray-100">
          <h3 className="font-black text-[#1E293B] mb-6 uppercase tracking-widest text-xs">
            Quick Check-In
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <button
              onClick={() => handleAction("Call")}
              className="flex flex-col items-center justify-center gap-2 p-8 rounded-2xl bg-[#F8FAFC] border border-gray-50 hover:bg-gray-100 transition-all font-bold text-[#1E293B]"
            >
              <FaPhone className="text-2xl" /> Call
            </button>
            <button
              onClick={() => handleAction("Text")}
              className="flex flex-col items-center justify-center gap-2 p-8 rounded-2xl bg-[#F8FAFC] border border-gray-50 hover:bg-gray-100 transition-all font-bold text-[#1E293B]"
            >
              <FaCommentAlt className="text-2xl" /> Text
            </button>
            <button
              onClick={() => handleAction("Video")}
              className="flex flex-col items-center justify-center gap-2 p-8 rounded-2xl bg-[#F8FAFC] border border-gray-50 hover:bg-gray-100 transition-all font-bold text-[#1E293B]"
            >
              <FaVideo className="text-2xl" /> Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
