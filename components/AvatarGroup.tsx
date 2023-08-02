// Import necessary modules and components
'use client';
import { User } from "@prisma/client";
import Image from "next/image";

// Define the props interface for AvatarGroup component
interface AvatarGroupProps {
    users?: User[]; // Represents an array of User objects to display in the group
};

// AvatarGroup component
const AvatarGroup: React.FC<AvatarGroupProps> = ({
    users = []
}) => {
    // Slice the users array to get at most three users
    const slicedUsers = users.slice(0, 3);

    // Map to position the avatars in the group (top-left, bottom, and bottom-right positions)
    const positionMap = {
        0: 'top-0 left-[12px]',  // Top-left position
        1: 'bottom-0',           // Bottom position
        2: 'bottom-0 right-0'    // Bottom-right position
    }

    return (
        <div className="relative h-11 w-11">
            {/* Loop through the sliced users and render their avatars */}
            {slicedUsers.map((user, index) => (
                <div
                    key={user.id}
                    className={`
            absolute
            inline-block 
            rounded-full 
            overflow-hidden
            h-[21px]
            w-[21px]
            ${positionMap[index as keyof typeof positionMap]}
          `}
                >
                    {/* Render the user's avatar using Next.js Image component */}
                    <Image
                        fill
                        src={user?.image || '/images/placeholder.jpg'} // If the user has an image, use it, otherwise, use a placeholder image
                        alt="Avatar"
                    />
                </div>
            ))}
        </div>
    );
}

export default AvatarGroup;
