// Import necessary modules and files
import prisma from "@/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

// Define the async function 'getConversations'
const getConversations = async () => {
	// Call the 'getCurrentUser' function to get the current user
	const currentUser = await getCurrentUser();

	// If the current user is not found or has no 'id', return an empty array
	if (!currentUser?.id) {
		return [];
	}

	try {
		// Use the 'prisma.conversation.findMany' method to fetch conversations from the database
		const conversations = await prisma.conversation.findMany({
			// Order conversations by 'lastMessageAt' in descending order (most recent first)
			orderBy: {
				lastMessageAt: "desc",
			},
			// Filter conversations based on the current user's 'id' in the 'userIds' array
			where: {
				userIds: {
					has: currentUser.id,
				},
			},
			// Include related 'users' and 'messages' in the fetched data
			include: {
				users: true, // Include information about users participating in each conversation
				messages: {
					// Include information about each message in the conversation
					include: {
						sender: true, // Include information about the sender of each message
						seen: true, // Include information about users who have seen each message
					},
				},
			},
		});

		// Return the fetched conversations along with related data
		return conversations;
	} catch (error: any) {
		// If an error occurs during database query, return an empty array
		return [];
	}
};

// Export the 'getConversations' function
export default getConversations;
