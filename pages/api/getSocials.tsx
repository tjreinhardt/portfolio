import type { NextApiRequest, NextApiResponse } from "next";
import { Social } from "../../typings";
import { socials } from "../../data/companyData";

type Data = {
  socials: Social[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ socials })
}
