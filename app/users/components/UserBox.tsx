// Import necessary modules and components
import axios from "axios";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { User } from "@prisma/client";
import Avatar from "@/components/Avatar";
import LoadingModal from "@/components/modals/LoadingModal";

// Define the props interface for UserBox component
interface UserBoxProps {
    data: User; // Represents the data of the user to display in the box
}

// UserBox component
const UserBox: React.FC<UserBoxProps> = ({ data }) => {
    // Get the router object from Next.js
    const router = useRouter();

    // State to manage the loading state when initiating a conversation
    const [isLoading, setIsLoading] = useState(false);

    // Function to handle the click event on the user box
    const handleClick = useCallback(() => {
        // Set the loading state to true before initiating the conversation
        setIsLoading(true);

        // Send a POST request to the '/api/conversations' endpoint to create a one-on-one conversation
        axios.post('/api/conversations', { userId: data.id })
            .then((data) => {
                // After successful creation, redirect to the new conversation page
                router.push(`/conversations/${data.data.id}`);
            })
            .finally(() => setIsLoading(false)); // Reset the loading state after the request is complete
    }, [data, router]);

    return (
        <>
            {/* Render a loading modal if 'isLoading' is true */}
            {isLoading && (
                <LoadingModal />
            )}
            {/* User box */}
            <div
                // Handle click on the user box to initiate the conversation
                onClick={handleClick}
                className="relative flex items-center w-full p-3 space-x-3 transition bg-white rounded-lg cursor-pointer hover:bg-neutral-100"
            >
                {/* Render the user's avatar */}
                <Avatar user={data} />
                <div className="flex-1 min-w-0">
                    <div className="focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        <div className="flex items-center justify-between mb-1">
                            <p className="text-sm font-medium text-gray-900">
                                {/* Display the user's name */}
                                {data.name}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserBox;
