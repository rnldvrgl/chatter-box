import { NextResponse } from "next/server";

interface IParams {
	conversationId?: string;
}

export async function POST(request: Request, { params }: { params: IParams }) {
	try {
	} catch (error: any) {
		console.log(error, "ERROR_MESSAGES_SEEN");
		return new NextResponse("Internal Error", { status: 500 });
	}
}
