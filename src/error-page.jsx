import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      className="flex flex-col text-center items-center justify-center min-h-screen bg-gray-100 p-5"
      id="error-page"
    >
      <h1 className="text-6xl font-bold text-[#9538E2] mb-5">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-red-600">
        <i>Page Not Found!</i>
      </h2>
      
      <p className="mt-2 text-center max-w-md">
                The page you're looking for {error.statusText || error.message}. <br />It might have been moved or deleted.
            </p>
      <button
        onClick={() => (window.location.href = "/")}
        className="mt-5 px-6 py-3 bg-[#9538E2] text-white rounded-full text-lg font-medium hover:bg-green-500 transition duration-300"
      >
        Go Back Home
      </button>
    </div>
  );
}
