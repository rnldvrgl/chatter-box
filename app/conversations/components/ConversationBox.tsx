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

    return (
        <div>
            ConversationBox
        </div>
    );
}

export default ConversationBox;