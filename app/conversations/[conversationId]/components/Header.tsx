"use client"

import { HiChevronLeft } from 'react-icons/hi'
import { HiEllipsisHorizontal } from 'react-icons/hi2';
import { useMemo, useState } from "react";
import Link from "next/link";
import { Conversation, User } from "@prisma/client";

import useOtherUser from "@/hooks/useOtherUser";
import useActiveList from "@/hooks/useActiveList";

import Avatar from "@/components/Avatar";
import AvatarGroup from "@/components/AvatarGroup";
// import ProfileDrawer from "./ProfileDrawer";


interface HeaderProps {
    conversation: Conversation & {
        users: User[]
    }
}

const Header = () => {
    return (
        <div>
            Header
        </div>
    );
}

export default Header;