import './globals.css'
import { Inter } from 'next/font/google'
import SideNav from "@/app/components/SideNav";
import Header from "@/app/components/Header";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Youtube Clone Abiansh',
  description: 'Generated by create next app',
}

export default function RootLayout({ children } ) {
  return (
      <html lang="en">
      <body className={inter.className} >
      <Header/>
      <div className={"layout_container"}>
          <SideNav/>
          {children}
      </div>
      </body>
      </html>
  );
}
