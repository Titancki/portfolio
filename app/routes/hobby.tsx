import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Guillaume Ouf - Hobby" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Hobby() {
  return (
    <div id="main" className="bg-[#E7D5AD] grow">
 
    </div>
  );
}