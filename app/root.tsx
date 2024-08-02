import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";
import map from "lodash/map"; // want .js to be required here
import { testFunction } from "./foo"; // do not NOT want .ts to be required here

export function Layout({ children }: { children: React.ReactNode }) {
  const test = map([1, 2, 3], (item) => item + 1);
  const test2 = testFunction("hello");
  console.log(test, test2);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
