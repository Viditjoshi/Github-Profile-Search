const Profile = ({ profile }) => {
    return (
        <div className="bg-white dark:bg-gray-800 w-full max-w-md p-6 rounded-lg shadow-md text-center">
            <img
                src={profile.avatar_url}
                alt={profile.name}
                className="w-24 h-24 mx-auto rounded-full shadow-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                {profile.name || "Name not available"}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
                @{profile.login}
            </p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
                {profile.bio || "This user has no bio"}
            </p>
            <div className="mt-4 flex justify-around text-gray-700 dark:text-gray-300">
                <div>
                    <h4 className="font-semibold">{profile.followers}</h4>
                    <p className="text-sm">Followers</p>
                </div>
                <div>
                    <h4 className="font-semibold">{profile.following}</h4>
                    <p className="text-sm">Following</p>
                </div>
                <div>
                    <h4 className="font-semibold">{profile.public_repos}</h4>
                    <p className="text-sm">Repositories</p>
                </div>
            </div>
            <a
                href={profile.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
                View Profile
            </a>
        </div>
    );
};

export default Profile;
