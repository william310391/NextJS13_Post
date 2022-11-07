import Navigation from "../components/Navigation";
import '../styles/globals.css'
import { font } from "./font";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Next 13</title>
      </head>
      <body className={font.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
