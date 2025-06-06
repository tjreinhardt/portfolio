import type { NextApiRequest, NextApiResponse } from "next";
import { CompanyInfo } from "../../typings";
import { companyInfo } from "../../data/companyData";

type Data = {
  companyInfo: CompanyInfo
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ companyInfo })
} 