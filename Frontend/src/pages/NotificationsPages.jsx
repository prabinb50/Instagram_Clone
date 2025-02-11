import { Info } from 'lucide-react';
import React from 'react'

export default function NotificationsPages() {

    const Profile = [
        {
            Image: "https://media.istockphoto.com/id/2166146715/photo/close-up-of-a-cat-looking-away.webp?a=1&b=1&s=612x612&w=0&k=20&c=RX7FVxEZq4hnKJXXXQHIclBN_bjz1CbPstoISeBcfSY=",
            Username: "riteshlama100",
            Time: "4w",
        },
        {
            Image: "https://plus.unsplash.com/premium_photo-1667667720425-6972aff75f6b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
            Username: "prabinlama44",
            Time: "5w",
        },
        {
            Image: "https://media.istockphoto.com/id/1626178861/photo/happy-handsome-young-business-man-looking-at-camera-in-office-headshot-portrait.webp?a=1&b=1&s=612x612&w=0&k=20&c=tJqkNr1fEBlNbHWLLSmm3hDWqQENlNP_POHyoPphWp4=",
            Username: "lokichawlagai001",
            Time: "2w",
        },

    ];

    return (
        <div className="p-4">
            <div className="h-screen w-[26vw] py-2 space-y-6 rounded-lg ">
                <p className="text-2xl font-bold opacity-90 px-4">Notifications</p>
                <p className="font-bold opacity-85 px-4">This month </p>

                <div className="space-y-6">
                    <div className="hover:bg-gray-100 cursor-pointer flex items-center px-4 py-2 mt-3 gap-4">
                        <div className="border rounded-full w-max p-2.5 border-gray-200 ">
                            <Info strokeWidth={1.5} className="text-gray-600" />
                        </div>
                        <p className="text-sm opacity-70">
                            Your saved contact info is synced across your accounts. Manage it in Accounts Center. <span className="opacity-50">5w</span>
                        </p>
                    </div>

                    {Profile.map((item, index) => (
                        <div key={index} className="flex items-center px-4 py-2 justify-between hover:bg-gray-100 cursor-pointer gap-4">
                            <img
                                className="rounded-full w-[3vw] h-[6.5vh] object-cover "
                                src={item.Image} alt="Image"
                            />
                            <p>
                                <span className="font-semibold opacity-90">{item.Username}</span>
                                <span className="text-sm opacity-80">
                                    , who you might know, is on Instagram.
                                </span>{" "}
                                <span className="text-sm opacity-50">{item.Time}</span>
                            </p>
                            <button className="border px-4 py-1 rounded-lg bg-blue-500 cursor-pointer hover:bg-blue-600 text-white opacity-90">
                                Follow
                            </button>
                        </div>
                    ))}
                </div>

                <hr className="text-gray-300 " />

                <div>
                    <p className="font-semibold opacity-85 px-4">Earlier</p>

                    <div className="hover:bg-gray-100 cursor-pointer flex items-center px-4 py-2 mt-3 gap-4">
                        <div className="border rounded-full w-max p-2.5 border-gray-200 ">
                            <Info strokeWidth={1.5} className="text-gray-600" />
                        </div>
                        <p className="text-sm opacity-70">
                            Review the contact info that will be synced across your accounts in Accounts Center. <span className="opacity-50">2w</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
