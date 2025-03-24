import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Guillaume Ouf - Autres Exp pro" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Otherexp() {
  return (
    <div id="main" className="bg-[#E7D5AD] grow">
 
    </div>
  );
}