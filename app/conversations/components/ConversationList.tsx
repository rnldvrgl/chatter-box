"use client"

import useConversation from "@/hooks/useConversation";
import { FullConversationType } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";


interface ConversationListProps {
    initialItems: FullConversationType[];
}


const ConversationList: React.FC<ConversationListProps> = ({ initialItems }) => {
    const [items, setItems] = useState(initialItems)

    const router = useRouter();

    const {
        conversationId,
        isOpen
    } = useConversation();

    return (
        <div>
            Conversation List
        </div>
    );
}

export default ConversationList;