"use client"

import { Conversation, User } from "@prisma/client"


interface ProfileDrawerProps {
    isOpen?: boolean,
    onClose?: () => void,
    data: Conversation & {
        users: User[]
    }
}

const ProfileDrawer: React.FC<ProfileDrawerProps> = ({
    isOpen,
    onClose,
    data
}) => {
    return (
        <div>
            asdada
        </div>
    );
}

export default ProfileDrawer;