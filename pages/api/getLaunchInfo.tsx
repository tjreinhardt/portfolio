import type { NextApiRequest, NextApiResponse } from "next";
import { LaunchInfo } from "../../typings";
import { launchInfo } from "../../data/companyData";

type Data = {
  launchInfo: LaunchInfo
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ launchInfo })
} 