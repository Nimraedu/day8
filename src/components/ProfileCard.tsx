import React from "react";
import type { Profile } from "../types/types";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";


// type ProfileCardProps = {
//   profile: Profile;
// };

interface ProfileCardProps{
    profile: Profile
}

const ProfileCard = ({ profile }: ProfileCardProps) => {
  return (
    <div className="border flex items-center justify-center ">
      <div className="flex-1 bg-blue-400 ">
        <div className="  flex flex-col items-center p-6  flex-1 bg-blue-400 relative  ">
          <img
            src={profile.image}
            className=" w-16 h-16 rounded-full border-4 border-white shadow-md absolute left-1/2 top-4 transform -translate-x-1/2"
          />
        </div>
        <div className="flex-1 bg-white text-center justify-center p-4 ">
          <h2 className="mt-4 text-lg font-semibold ">{profile.name}</h2>
          <p className="text-gray-500">{profile.role}</p>

          <div className="flex space-x-4 mt-4 text-center justify-center">
            <div>
              <a href={profile.links[0]} className="h-4">
                <FaGithub />
              </a>
            </div>
            <div>
              <a href="{profile.links[1]}" className="h-4">
                <FaLinkedin />
              </a>
            </div>
            <div>
            <a href="{profile.links[2]}" className="h-4"><CiMail /></a>

            </div>
          </div>

          <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-4xl hover:bg-blue-700">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
