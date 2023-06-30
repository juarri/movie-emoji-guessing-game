import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";

import { Inter } from "next/font/google";

import Header from "~/components/layout/Header";
import Footer from "~/components/layout/Footer";

import { Toaster } from "~/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <div className={`${inter.className} flex min-h-screen flex-col`}>
        <Header />
        <div className="grid flex-1">
          <Component {...pageProps} />
        </div>
        <Footer />

        <Toaster />
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
