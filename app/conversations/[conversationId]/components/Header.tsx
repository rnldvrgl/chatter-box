'use client';

import { HiChevronLeft } from 'react-icons/hi'
import { HiEllipsisHorizontal } from 'react-icons/hi2';
import { useMemo, useState } from "react";
import Link from "next/link";
import { Conversation, User } from "@prisma/client";

import useOtherUser from "@/hooks/useOtherUser";
import useActiveList from "@/hooks/useActiveList";

import Avatar from "@/components/Avatar";
import AvatarGroup from "@/components/AvatarGroup";
import ProfileDrawer from "./ProfileDrawer";

interface HeaderProps {
    conversation: Conversation & {
        users: User[]
    }
}

const Header: React.FC<HeaderProps> = ({ conversation }) => {
    const otherUser = useOtherUser(conversation);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const { members } = useActiveList();
    const isActive = members.indexOf(otherUser?.email!) !== -1;
    const statusText = useMemo(() => {
        if (conversation.isGroup) {
            return `${conversation.users.length} members`;
        }

        return isActive ? 'Active' : 'Offline'
    }, [conversation, isActive]);

    return (
        <>
            <ProfileDrawer
                data={conversation}
                isOpen={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            />
            <div
                className="
        bg-white 
        w-full 
        flex 
        border-b-[1px] 
        sm:px-4 
        py-3 
        px-4 
        lg:px-6 
        justify-between 
        items-center 
        shadow-sm
      "
            >
                <div className="flex items-center gap-3">
                    <Link
                        href="/conversations"
                        className="block transition cursor-pointer lg:hidden text-cambridgeBlue-500 hover:cambridgeBlue-600"
                    >
                        <HiChevronLeft size={32} />
                    </Link>
                    {conversation.isGroup ? (
                        <AvatarGroup users={conversation.users} />
                    ) : (
                        <Avatar user={otherUser} />
                    )}
                    <div className="flex flex-col">
                        <div>{conversation.name || otherUser.name}</div>
                        <div className="text-sm font-light text-neutral-500">
                            {statusText}
                        </div>
                    </div>
                </div>
                <HiEllipsisHorizontal
                    size={32}
                    onClick={() => setDrawerOpen(true)}
                    className="transition cursor-pointer text-cambridgeBlue-500 hover:cambridgeBlue-600"
                />
            </div>
        </>
    );
}

export default Header;