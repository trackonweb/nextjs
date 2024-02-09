import ProjectWorkIdea from "@/components/blog-category/ProjectWork"
import BlogForm from "@/components/blog/BlogForm"

export default function Page(){
    return (

        <>
        <div className="xl:mx-20 lg:mx-10 mx-4">
       <div className="container mx-auto">
       <div  className="w-full flex justify-between gap-5 ">
            <div className="lg:w-[70%] w-full">
            <ProjectWorkIdea/>
            </div>
            <div className="lg:w-[30%] sticky h-screen  top-20 hidden  lg:flex mt-5 ">
               <BlogForm/>
            </div>
        </div>
       </div>
       
        </div>
      
        </>
    )
}

export function generateMetadata(){
    return {
        title: "Enhance Productivity: The Best Remote Location Project Work Idea",
        description:
          `The Best Remote Location Project Work Idea, a revolutionary web application connecting professionals with ideal remote workspaces like cafes, Hotels, Restaurants, and more.`,
         
       
    }
  }