import "@/globals.css";
import NavbarComponent from "@/components/Menu/NavbarComponent";
import FooterComponent from "@/components/footer/FooterComponent";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="bg-gray-200 flex flex-col justify-between w-full h-auto min-h-screen min-w-[300px]">
        <NavbarComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
