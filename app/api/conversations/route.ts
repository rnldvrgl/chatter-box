import getCurrentUser from "@/actions/getCurrentUser";

import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";

export async function POST(request: Request) {
	try {
		const currentUser = await getCurrentUser();
		const body = await request.json();
		const { userId, isGrooup, members, name } = body;

		if (!currentUser?.id || !currentUser?.email) {
			return new NextResponse("Unauthorized", { status: 400 });
		}
	} catch (error: any) {
		return new NextResponse("Internal Error", { status: 500 });
	}
}
