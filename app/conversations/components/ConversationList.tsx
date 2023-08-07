'use client';

import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useMemo, useState } from "react";
import { MdOutlineGroupAdd } from 'react-icons/md';
import clsx from "clsx";
// import { find, uniq } from 'lodash';

import useConversation from "@/hooks/useConversation";
// import { pusherClient } from "@/libs/pusher";
import GroupChatModal from "@/components/modals/GroupChatModal";
import ConversationBox from "./ConversationBox";
import { FullConversationType } from "@/types";

interface ConversationListProps {
    initialItems: FullConversationType[];
    users: User[];
    title?: string;
}

const ConversationList: React.FC<ConversationListProps> = ({
    initialItems,
    users
}) => {
    const [items, setItems] = useState(initialItems);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const router = useRouter();
    const session = useSession();

    const { conversationId, isOpen } = useConversation();

    const pusherKey = useMemo(() => {
        return session.data?.user?.email;
    }, [session.data?.user?.email])




    return (
        <>
            <GroupChatModal
                users={users}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
            <aside className={clsx(`
        fixed 
        inset-y-0 
        pb-20
        lg:pb-0
        lg:left-20 
        lg:w-80 
        lg:block
        overflow-y-auto 
        border-r 
        border-gray-200 
      `, isOpen ? 'hidden' : 'block w-full left-0')}>
                <div className="px-5">
                    <div className="flex justify-between pt-4 mb-4">
                        <div className="text-2xl font-bold text-neutral-800">
                            Messages
                        </div>
                        <div
                            onClick={() => setIsModalOpen(true)}
                            className="p-2 text-gray-600 transition bg-gray-100 rounded-full cursor-pointer hover:opacity-75"
                        >
                            <MdOutlineGroupAdd size={20} />
                        </div>
                    </div>
                    {items.map((item) => (
                        <ConversationBox
                            key={item.id}
                            data={item}
                            selected={conversationId === item.id}
                        />
                    ))}
                </div>
            </aside>
        </>
    );
}

export default ConversationList;