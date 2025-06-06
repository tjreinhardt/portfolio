import type { NextApiRequest, NextApiResponse } from "next";
import { BusinessModel } from "../../typings";
import { businessModel } from "../../data/companyData";

type Data = {
  businessModel: BusinessModel
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ businessModel })
} 