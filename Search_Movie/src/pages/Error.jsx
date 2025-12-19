import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 text-center min-h-screen bg-indigo-100 px-4">
      <p className="text-indigo-950/80 font-medium text-lg">404 Not Found</p>
      <h2 className="text-4xl font-medium text-indigo-950/90">
        Oops! Page Not Found
      </h2>
      <p className="text-indigo-950/80 font-medium text-lg">
        The page you are looking for doesn't exist. Click
        <br className="max-sm:hidden" /> button below to go to the homepage.
      </p>
      <Link to="/" className="text-lg font-medium text-indigo-500">
        Back to Homepage
      </Link>
    </div>
  );
}

export default Error;
