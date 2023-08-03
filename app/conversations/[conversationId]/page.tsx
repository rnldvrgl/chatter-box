import getConversationById from "@/actions/getConversationById";
import getMessages from "@/actions/getMessages";
import EmptyState from "@/components/EmptyState";

interface IParams {
    conversationId: string;
}

const ConversationId = async ({ params }: { params: IParams }) => {
    const conversation = await getConversationById(params.conversationId);
    const messages = await getMessages(params.conversationId);

    if (!conversation) {
        return (
            <div className="h-full lg:pl-80">
                <div className="flex flex-col h-full">
                    <EmptyState />
                </div>
            </div>
        )
    }

    return (
        <div>
            asdasdasd
        </div>
    );
}

export default ConversationId;