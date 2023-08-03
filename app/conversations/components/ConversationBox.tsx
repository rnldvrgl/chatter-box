"use client"

import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react"
import { Conversation, Message, User } from "@prisma/client"
import { format } from "date-fns";
import { useSession } from "next-auth/react";
import clsx from "clsx";
import { FullConversationType } from "@/types";

interface ConversationBoxProps {
    data: FullConversationType,
    selected?: boolean;
}


const ConversationBox = () => {
    return (
        <div>
            ConversationBox
        </div>
    );
}

export default ConversationBox;