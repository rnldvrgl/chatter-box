"use client"

import EmptyState from "@/components/EmptyState"
import useConversation from "@/hooks/useConversation"
import clsx from "clsx"

const Home = () => {
    const { isOpen } = useConversation();

    return (
        <div>
            <EmptyState />
        </div>
    )
}

export default Home;