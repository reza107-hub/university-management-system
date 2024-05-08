import { Link, useRouteError } from 'react-router-dom';

const NotFound = () => {
    const { error, status } = useRouteError();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <img
                className="w-64 h-64 mb-8"
                src="https://i.ibb.co/PN6jbgv/404page.png"
                alt="404 Error"
            />
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Error {status || 404}</h2>
                <p className="text-lg text-gray-600 mb-8">{error?.message || "Page not found"}</p>
                <Link
                    to="/"
                    className="inline-block px-4 py-2 text-lg font-semibold text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
                >
                    Go to Home Page
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
