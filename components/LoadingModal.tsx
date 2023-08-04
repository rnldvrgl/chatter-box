"use client"

import React, { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { ClipLoader } from "react-spinners"


const LoadingModal = () => {
    return (
        <Transition.Root show={true} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={() => { }}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div
                        className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75 "
                    />
                </Transition.Child>
            </Dialog>
        </Transition.Root>
    );
}

export default LoadingModal;