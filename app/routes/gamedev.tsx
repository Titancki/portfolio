import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Guillaume Ouf - Game Dev" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Gamedev() {
  return (
    <div id="main" className="bg-[#E7D5AD] grow">
 
    </div>
  );
}