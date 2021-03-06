import { WhiteSeperator } from "../seperators"
import ViewComponent from "../ProjectViewComponent";
const Projects = () => {
    return (
        <div id="Projects" className="bg-black font-iceland text-white">
            <WhiteSeperator />
            <div className="sm:px-12 md:px-18 lg:px-24 sm:py-6 lg:py-12 lg:pb-24">
                <div className="flex flex-col">
                    <span className="text-5xl">
                        Projects
                    </span>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 gap-x-24 pt-4">
                        <ViewComponent img="/kilpatrickss.png" name="Mrs. Kilpatricks Website" 
                        description={`Mrs. Kilpatrick was my highschool physics teacher. 
                        When I saw her original teacher site, I knew I had to help.
                        I developed her a new website using Next JS, Prisma, and Tailwind.`}
                            link="https://kilpatty.vercel.app" beforeLink="Original teacher 
                            site can be found " descLink="https://kilpatrickscience.com" 
                            linkName="here" afterLink="."/>

                        <ViewComponent img="/functionCode.png" name="Github" description="I have been a developer on
                         Github for many years and would love to share my many 
                        repositories created over the years." link="https://github.com/best-code" beforeLink="Check out my github" descLink="https://github.com/best-code" linkName="here" afterLink="."/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;