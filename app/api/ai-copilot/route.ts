import { convertToModelMessages, streamText, tool, type UIMessage } from "ai"
import { z } from "zod"

export const maxDuration = 30

const searchProductsTool = tool({
  description: "Search for products based on user query",
  inputSchema: z.object({
    query: z.string().describe("The search query"),
    category: z.string().optional().describe("Product category filter"),
    priceRange: z
      .object({
        min: z.number().optional(),
        max: z.number().optional(),
      })
      .optional(),
  }),
  execute: async ({ query, category, priceRange }) => {
    // Simulate product search
    return {
      products: [
        { id: "1", name: "Premium Wireless Headphones", price: 299.99, category: "Electronics" },
        { id: "2", name: "Smart Watch Pro", price: 399.99, category: "Electronics" },
      ],
      totalResults: 2,
    }
  },
})

const getProductDetailsTool = tool({
  description: "Get detailed information about a specific product",
  inputSchema: z.object({
    productId: z.string(),
  }),
  execute: async ({ productId }) => {
    return {
      id: productId,
      name: "Premium Wireless Headphones",
      price: 299.99,
      description: "High-quality wireless headphones with noise cancellation",
      inStock: true,
      rating: 4.5,
    }
  },
})

const compareProductsTool = tool({
  description: "Compare multiple products",
  inputSchema: z.object({
    productIds: z.array(z.string()),
  }),
  execute: async ({ productIds }) => {
    return {
      comparison: productIds.map((id) => ({
        id,
        name: `Product ${id}`,
        price: Math.random() * 500,
        rating: Math.random() * 5,
      })),
    }
  },
})

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const result = streamText({
    model: "openai/gpt-5-mini",
    messages: convertToModelMessages(messages),
    system: `You are an advanced AI shopping assistant for MarketHub. Help users find products, compare options, and make informed purchasing decisions. Be friendly, helpful, and provide detailed product recommendations. When users ask about products, use the available tools to search and provide accurate information.`,
    tools: {
      searchProducts: searchProductsTool,
      getProductDetails: getProductDetailsTool,
      compareProducts: compareProductsTool,
    },
    abortSignal: req.signal,
  })

  return result.toUIMessageStreamResponse()
}
