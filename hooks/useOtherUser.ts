// Import necessary modules and types
import { useSession } from "next-auth/react";
import { useMemo } from "react";
import { FullConversationType } from "@/types";
import { User } from "@prisma/client";

// Define the custom hook 'useOtherUser'
const useOtherUser = (
	conversation: FullConversationType | { users: User[] }
) => {
	// Get the current user session
	const session = useSession();

	// Calculate the other user in the conversation
	const otherUser = useMemo(() => {
		// Get the email of the current user from the session data
		const currentUserEmail = session.data?.user?.email;

		// Filter out the current user from the list of users in the conversation
		const otherUser = conversation.users.filter(
			(user) => user.email !== currentUserEmail
		);

		// Return the first user (other user) in the filtered list
		return otherUser[0];
	}, [session.data?.user?.email, conversation.users]);

	// Return the other user
	return otherUser;
};

// Export the custom hook
export default useOtherUser;
