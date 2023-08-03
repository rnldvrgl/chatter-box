import Sidebar from "@/components/sidebar/Sidebar"
import ConversationList from "./components/ConversationList"

export default async function CoversationsLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <Sidebar>
            <div className="h-full">
                <ConversationList
                    initialItems={[]}
                />
                {children}
            </div>
        </Sidebar>
    )
}