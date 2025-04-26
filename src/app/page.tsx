import Experience from "@/components/Experience";
import Introduction from "@/components/Introduction";
import Navbar from "@/components/Navbar";
// import SkillSection from "@/components/SkillSection";
import WorkSection from "@/components/WorkSection";

export default function Home() {
  return (
    <>
    
 <div className="" id="main-container">
  <div className="hero-section w-full sticky">
    <Navbar/>
    <Introduction/>
    </div>
    <div className="">
    {/* <SkillSection/> */}
    
  <WorkSection/> 
    </div>
  <Experience/>
    </div>



    </>
  );
}
