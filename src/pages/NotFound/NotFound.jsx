import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="flex flex-col items-center justify-center h-[70vh] text-center px-4 font-geist">
    <h1 className="text-[160px] font-black text-green-900 leading-none">404</h1>

    <h2 className="text-3xl font-black text-[#1E293B] mt-2">Page Not Found</h2>

    <p className="text-[#64748B] text-sm mt-3 max-w-sm">
      Looks like this friendship link is broken. The page you're looking for
      doesn't exist or has been moved.
    </p>

    <Link
      to="/"
      className="btn bg-[#0c5c0d] text-white mt-8 border-none px-8 rounded-full hover:bg-[#0c8208]"
    >
      Back to Home
    </Link>
  </div>
);

export default NotFound;
