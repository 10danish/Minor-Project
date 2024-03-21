'use client';

import { PiSignOut, PiUserSquareFill, PiYoutubeLogo } from "react-icons/pi";
import MenuItems from "./MenuItems";
import { signOut } from "next-auth/react";
import { useContext } from "react";
import { CreateChannelModalContext } from "@/context/createChannelModalContext";
import { CurrentChannelContext } from "@/context/CurrentChannelContext";
import { useRouter } from "next/navigation";

interface UserMenuProps {
    onClose: () => void;
}

const UserMenu: React.FC<UserMenuProps> = ({ onClose }) => {
    const createChannelModal = useContext(CreateChannelModalContext);
    const currentChannel = useContext(CurrentChannelContext);
    const router = useRouter()

    return (
        <>
            <div className="h-screen w-screen fixed z-30" onClick={onClose} />
            <div className=" absolute rounded-md shadow-md w-72 bg-zinc-800 right-2 top-16 text-sm flex flex-col overflow-hidden z-40">
                <MenuItems logo={<PiUserSquareFill className="h-7 w-7 mr-4" />} label="Your Channel" onClick={()=>{
                    if(!currentChannel){
                        createChannelModal?.onOpen();
                    }
                    else{
                        router.push(`/channel/${currentChannel.id}`)
                    }
                    onClose();
                }}/>
                <MenuItems logo={<PiYoutubeLogo className="h-7 w-7 mr-4" />} label="Your Studio" onClick={()=>{
                    if(!currentChannel){
                        createChannelModal?.onOpen();
                    }
                    else{
                        router.push(`/studio`)
                    }
                    onClose();

                }}/>
                <MenuItems logo={<PiSignOut className="h-7 w-7 mr-4" />} label="Sign Out" onClick={() => {
                    signOut();
                    onClose();
                }} />
            </div>
        </>
    )
}

export default UserMenu