"use client"

import Home from './home/page';
import About from "./about/page";
import Button from "./button/page";
import Resume from "./resume/page"
import Message from "./message/page";




function Page() {
 
  return (
    <div>
      <Home />
      <About />
      <Resume />
      <Button />
      <Message/>
    </div>
  );
}

export default Page;
