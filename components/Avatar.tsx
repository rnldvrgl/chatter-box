// Import necessary modules and components
'use client';
import { User } from "@prisma/client";
import useActiveList from "@/hooks/useActiveList";
import Image from "next/image";

// Define the props interface for Avatar component
interface AvatarProps {
    user?: User; // Represents the user data to display the avatar
};

// Avatar component
const Avatar: React.FC<AvatarProps> = ({ user }) => {
    // Get the 'members' data from the 'useActiveList' hook
    const { members } = useActiveList();

    // Check if the user is active by checking if their email exists in the 'members' array
    const isActive = members.indexOf(user?.email!) !== -1;

    return (
        <div className="relative">
            <div className="relative inline-block overflow-hidden rounded-full h-9 w-9 md:h-11 md:w-11">
                {/* Render the user's avatar using Next.js Image component */}
                <Image
                    fill
                    src={user?.image || '/images/placeholder.jpg'} // If the user has an image, use it, otherwise, use a placeholder image
                    alt="Avatar"
                />
            </div>
            {/* Render an indicator if the user is active */}
            {isActive ? (
                <span
                    className="absolute top-0 right-0 block w-2 h-2 bg-green-500 rounded-full ring-2 ring-white md:h-3 md:w-3"
                />
            ) : null}
        </div>
    );
}

export default Avatar;
