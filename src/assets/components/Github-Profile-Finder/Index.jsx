import { useEffect, useState } from "react";
import Profile from "./Profile";

const GithubProfileFinder = ({ url }) => {
    const [githubProfile, setGithubProfile] = useState(null);
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleSearch = () => {
        if (username.trim()) {
            FetchData(url);
        } else {
            setErrorMessage("Please enter a username.");
        }
    };

    const FetchData = async (githubUrl) => {
        setLoading(true);
        setErrorMessage(null);
        setGithubProfile(null); // Clear previous profile
        try {
            const response = await fetch(`${githubUrl}/${username}`);
            const data = await response.json();

            if (data && !data.message) {
                setGithubProfile(data);
            } else {
                setErrorMessage("User not found");
            }
        } catch (error) {
            setErrorMessage("Error fetching data");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
            <h1 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                GitHub Profile Finder
            </h1>

            <div className="w-full max-w-md flex items-center mb-6">
                <input
                    type="text"
                    name="profilename"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    placeholder="Search GitHub Username..."
                    className="w-full px-4 py-2 rounded-l-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handleSearch}
                    className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none"
                >
                    Search
                </button>
            </div>

            {loading && (
                <h2 className="text-lg text-gray-700 dark:text-gray-300">
                    Finding your profile, please wait...
                </h2>
            )}

            {errorMessage && (
                <h2 className="text-lg text-red-500">
                    {errorMessage}
                </h2>
            )}

            {githubProfile && !loading && !errorMessage && (
                <Profile profile={githubProfile} />
            )}
        </div>
    );
};

export default GithubProfileFinder;
