import type { NextApiRequest, NextApiResponse } from "next";
import { Customer } from "../../typings";
import { customers } from "../../data/companyData";

type Data = {
  customers: Customer[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ customers })
} 