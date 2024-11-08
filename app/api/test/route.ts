import { kv } from "@vercel/kv"; // SDKをインポート
import { NextResponse } from "next/server";

export async function GET() {
	// KVにデータをインサート。キー cart:123, 値 abc
	await kv.set("cart:123", "abc");
	// KVからデータを取得
	const cart = await kv.get("cart:123");
	return NextResponse.json(cart);
}
