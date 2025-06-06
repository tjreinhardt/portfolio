import { Skill } from "../typings";

export const fetchSkills = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/getSkills`);

  const data = await res.json();
  const skills: Skill[] = data.skills;

  return skills;
}

//test
