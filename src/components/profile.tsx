import React from 'react';

type ProfileProps= {
  avatar: string;
  userName: string;
};

const Profile:React.FC<ProfileProps> = ({ avatar, userName }) => (
  <div className="Card z-10 flex lg:flex-col items-center lg:items-start bg-Blue">
    <div className="lg:w-18 w-16 rounded-full -m-0.5 border-2 border-white mr-4 my-4 lg:mt-2 lg:mb-10">
      <img className="w-full" alt="avatar" src={avatar} />
    </div>
    <div>
      <div className="Quaternary mt-px">
        Report for
      </div>
      <div className="Primary flex lg:mb-14 lg:flex-col">
        {userName.split(' ').map((s, ind) => <div className={ind === 0 ? '' : 'ml-2 lg:ml-0'} key={s}>{s}</div>)}
      </div>
    </div>
  </div>
);

export default Profile;
