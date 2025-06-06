import type { NextApiRequest, NextApiResponse } from "next";
import { AIService } from "../../typings";
import { aiServices } from "../../data/companyData";

type Data = {
  aiServices: AIService[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ aiServices })
} 