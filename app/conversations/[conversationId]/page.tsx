import getConversationById from "@/actions/getConversationById";
import getMessages from "@/actions/getMessages";
import EmptyState from "@/components/EmptyState";
import Header from "./components/Header";
import Body from "./components/Body";

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
        <div className="h-full lg:pl-80">
            <div className="flex flex-col h-full">
                <Header conversation={conversation} />
                <Body initialMessages={messages} />
                {/* <Form /> */}
            </div>
        </div>
    );
}

export default ConversationId;