"use client"

import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react"
import { Conversation, Message, User } from "@prisma/client"
import { format } from "date-fns";
import { useSession } from "next-auth/react";
import clsx from "clsx";
import { FullConversationType } from "@/types";
import useOtherUser from "@/hooks/useOtherUser";

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

    return (
        <div>
            ConversationBox
        </div>
    );
}

export default ConversationBox;