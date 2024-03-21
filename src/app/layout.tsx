import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/shared/navigation/Navigation";
import CurrentUserProvider from "@/context/CurrentUserContext";
import getCurrentUser from "@/actions/getCurrentUser";
import CreateChannelModalProvider from "@/context/createChannelModalContext";
import CreateChannelModal from "@/components/shared/Modal/CreateChannelModal";
import { Toaster } from "react-hot-toast";
import getCurrentChannel from "@/actions/getCurrentChannel";
import UploadVideoModalProvider from "@/context/UploadVideoModalContext";
import CurrentChannelProvider from "@/context/CurrentChannelContext";
import SidebarProvider from "@/context/SidebarContext";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Gear",
  description: "Broadcast Yourself",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser()
  const currentChannel = await getCurrentChannel()

  return (
    <html lang="en">
      <body className={roboto.className}>
        <CreateChannelModalProvider>
          <Toaster toastOptions={{ position: "bottom-left" }} />
          <CreateChannelModal />
          <CurrentUserProvider user={currentUser}>
            <CurrentChannelProvider channel = {currentChannel}>
              <UploadVideoModalProvider>
                <SidebarProvider>
                <Navigation />
                <div className="pt-16">{children}</div>
                </SidebarProvider>
              </UploadVideoModalProvider>
            </CurrentChannelProvider>
          </CurrentUserProvider>
        </CreateChannelModalProvider>


      </body>
    </html>
  );
}
