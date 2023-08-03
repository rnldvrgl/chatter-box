"use client"

import useOtherUser from "@/hooks/useOtherUser"
import { Conversation, User } from "@prisma/client"
import format from "date-fns/format"
import { useMemo, Fragment } from "react"
import { Transition, Dialog } from "@headlessui/react"


interface ProfileDrawerProps {
    isOpen: boolean,
    onClose: () => void,
    data: Conversation & {
        users: User[]
    }
}

const ProfileDrawer: React.FC<ProfileDrawerProps> = ({
    isOpen,
    onClose,
    data
}) => {

    const otherUser = useOtherUser(data);

    const joinedDate = useMemo(() => {
        return format(new Date(otherUser.createdAt), 'PP');
    }, [otherUser.createdAt])

    const title = useMemo(() => {
        return data.name || otherUser.name;
    }, [data.name, otherUser.name])

    const statusText = useMemo(() => {
        if (data.isGroup) {
            return `${data.users.length} members`;
        }

        return 'Active';
    }, [data])

    return (
        <Transition.Root show={isOpen} as={Fragment} >
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <Transition.Child as={Fragment} enter="ease-out duration-500" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-500" leaveFrom="opacity-100" leaveTo="opacity-100">
                    <div className="fixed inset-0 bg-black bg-opacity-40">

                    </div>
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none">

                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}

export default ProfileDrawer;