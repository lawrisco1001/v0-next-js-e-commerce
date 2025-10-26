import { convertToModelMessages, streamText, type UIMessage } from "ai"

export const maxDuration = 30

export async function POST(req: Request) {
  const { messages, sellerId }: { messages: UIMessage[]; sellerId: string } = await req.json()

  const result = streamText({
    model: "openai/gpt-5-mini",
    messages: convertToModelMessages(messages),
    system: `You are a helpful seller representative for MarketHub. The seller ID is ${sellerId}. Answer customer questions about products, shipping, returns, and provide excellent customer service. Be professional, friendly, and helpful.`,
    abortSignal: req.signal,
  })

  return result.toUIMessageStreamResponse()
}
