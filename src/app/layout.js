import "./globals.css";

export const metadata = {
  title: "ConvertDocx",
  description: "Convertendo .pdf em .docx",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
