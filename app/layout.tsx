
export const metadata = {
  title: 'Zeiterfassung',
  description: 'Digitale Zeiterfassung für Mitarbeiter',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
