import redis from "app/redis";
import { NextResponse } from "next/server";

export async function GET() {
	await redis.flushdb();

	return NextResponse.json({ message: "OK" }, { status: 200 });
}
