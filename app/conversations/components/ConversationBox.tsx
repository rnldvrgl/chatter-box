"use client"

import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react"
import { Conversation, Message, User } from "@prisma/client"
import { format } from "date-fns";
import { useSession } from "next-auth/react";
import clsx from "clsx";
import { FullConversationType } from "@/types";
import useOtherUser from "@/hooks/useOtherUser";
import AvatarGroup from "@/components/AvatarGroup";
import Avatar from "@/components/Avatar";

interface ConversationBoxProps {
    data: FullConversationType,
    selected?: boolean;
}


const ConversationBox: React.FC<ConversationBoxProps> = ({
    data,
    selected
}) => {
    const otherUser = useOtherUser(data);
    const session = useSession();
    const router = useRouter();

    const handleClick = useCallback(() => {
        router.push(`/conversations/${data.id}`)
    }, [data.id, router]);

    const lastMessage = useMemo(() => {
        const messages = data.messages || [];
        return messages[messages.length - 1];
    }, [data.messages]);

    const userEmail = useMemo(() => session.data?.user?.email,
        [session.data?.user?.email]);

    const hasSeen = useMemo(() => {
        // Check if there is an existing last message
        if (!lastMessage) {
            return false;
        }

        // Structure seen array
        const seenArray = lastMessage.seen || [];

        if (!userEmail) {
            return false;
        }

        return seenArray
            .filter((user) => user.email === userEmail).length !== 0;
    }, [userEmail, lastMessage]);


    const lastMessageText = useMemo(() => {
        if (lastMessage?.image) {
            return 'Sent an image';
        }

        if (lastMessage?.body) {
            return lastMessage?.body;
        }

        return 'Started a conversation';
    }, [lastMessage]);

    return (
        <div
            onClick={handleClick}
            className={clsx(`
                w-full
                relative
                flex
                items-center
                space-x-3
                p-3
                hover:bg-neutral-100
                rounded-lg
                transition
                cursor-pointer
                `,
                selected ? 'bg-neutral-100' : 'bg-white'
            )}
        >
            {data.isGroup ? (
                // If it's a group conversation, display the AvatarGroup with all users' avatars
                <AvatarGroup users={data.users} />
            ) : (
                // If it's a one-on-one conversation, display the Avatar of the other user
                <Avatar user={otherUser} />
            )}
            <div className="flex-1 min-w-0">
                <div className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <div className="flex items-center justify-between mb-1">
                        {/* Display the name of the conversation or the other user */}
                        <p className="font-medium text-gray-900 text-md">
                            {data.name || otherUser.name}
                        </p>
                        {/* Display the time of the last message */}
                        {lastMessage?.createdAt && (
                            <p className="text-xs font-light text-gray-400">
                                {format(new Date(lastMessage.createdAt), 'p')}
                            </p>
                        )}
                    </div>
                    {/* Display the last message text */}
                    <p className={clsx(`
                        truncate
                        text-sm
                        `,
                        hasSeen ? 'text-ashGray-500' : 'text-black font-medium'
                    )}>
                        {lastMessageText}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ConversationBox;