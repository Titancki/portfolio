import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap",
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-screen flex flex-col">
        <Header />
        <Outlet /> {/* This will be replaced by `index.tsx` */}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

function Header() {
  return (
    <div id="header" className="bg-[url(/header.png)] bg-cover h-36 flex border-b-4 border-[#481A1A]">
      <a href="/"><img src="/emperorguillaume.png" className="h-full" /></a>
      <ul className="mt-5">
        <li className="text-3xl">LA TERRE DE OUF</li>
        <li>Par Guillaume Ouf</li>
      </ul>
      <div className="mt-auto mb-5 ml-auto mr-5 grid grid-cols-2 gap-5 h-6">
        <a href="/cv.pdf" ><img src="/svgs/file-solid.svg" className="h-8"/></a>
        <a href="https://github.com/Titancki?tab=repositories"><img src="/svgs/github-brands.svg" className="h-8"/></a>
      </div>
    </div>
  );
}
