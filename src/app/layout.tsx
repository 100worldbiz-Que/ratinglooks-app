export const metadata = {
  title: "RatingLooks",
  description: "Rate Face / Body / Whole Look. Get coaching, DMs, and shareable scores.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased bg-gradient-to-b from-white to-gray-50">
        {children}
      </body>
    </html>
  );
}
