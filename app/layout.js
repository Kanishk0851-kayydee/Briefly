import './globals.css'

export const metadata = {
  title: 'Briefly | Precision in Culinary Partnerships',
  description: 'AI-powered branding for chefs and food founders',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
