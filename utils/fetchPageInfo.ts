import { PageInfo } from "../typings";

export const fetchPageInfo = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/getPageInfo`)

  const data = await res.json()
  const pageInfo: PageInfo = data.pageInfo;

  return pageInfo;
}
