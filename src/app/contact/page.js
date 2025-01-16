import React from 'react';
import Image from "next/image";
import Link from 'next/link';

const Contact = () => {
  return (
    <div className='p-7 bg-[#222222] flex justify-center items-center gap-6' id='contact'>
<Link href={"https://www.instagram.com/eng.khalifaalsaadi?igsh=YmVvM2R4aGE0d3p4"}><div className='w-14 h-14 bg-[#333333] rounded-full flex justify-center items-center'><Image src={"/insta.png"}  height={60} width={60} alt=''/></div></Link>
<Link href={"https://www.youtube.com/channel/UCM_n4g1tdyvGz5mob_3u6lQ"}><div className='w-14 h-14 bg-[#333333] rounded-full flex justify-center items-center'><Image src={"/youtube.png"}  height={60} width={60} alt=''/></div></Link>
<Link href={"https://www.linkedin.com/in/khalifa-operations-engineer?originalSubdomain=ae"}><Image src={"/linkedin.png"} className='rounded-full' height={55} width={55} alt=''/></Link>
<Link href={"https://www.tiktok.com/@eng.khalifaalsaadi?_t=8meE5X2kS3M&_r=1"}><div className='w-14 h-14 bg-[#333333] rounded-full flex justify-center items-center'><Image src={"/tik-tok.png"} className='rounded-full' height={40} width={40} alt=''/></div></Link>
<Link href={"https://www.snapchat.com/add/eng.khalifa2024?invite_id=3HtNpI6d&locale=en_AE&share_id=DVmmOdNWTqu3REglG9blqA&sid=849b618a579642dbb8b79d9fb6f0a3e8"}><Image src={"/snap.png"} className='rounded-full' height={55} width={55} alt=''/></Link>
        </div>
  )
}

export default Contact