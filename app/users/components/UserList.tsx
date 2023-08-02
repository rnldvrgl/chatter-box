// Import necessary modules and components
'use client';
import { User } from "@prisma/client";
import UserBox from "./UserBox";

// Define the props interface for UserList component
interface UserListProps {
    items: User[]; // Represents an array of User objects to display in the list
}

// UserList component
const UserList: React.FC<UserListProps> = ({ items }) => {
    return (
        <aside
            // Styling classes for the aside element (sidebar)
            className="fixed inset-y-0 left-0 block w-full pb-20 overflow-y-auto border-r border-gray-200 lg:pb-0 lg:left-20 lg:w-80 lg:block"
        >
            <div className="px-5">
                <div className="flex-col">
                    <div
                        // Heading for the user list
                        className="py-4 text-2xl font-bold text-neutral-800"
                    >
                        People
                    </div>
                </div>
                {items.map((item) => (
                    // Render a UserBox component for each user in the list
                    <UserBox
                        key={item.id} // Provide a unique 'key' prop for React to efficiently manage the list
                        data={item}   // Pass the user data as 'data' prop to the UserBox component
                    />
                ))}
            </div>
        </aside>
    );
}

export default UserList;
