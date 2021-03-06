const AboutMe = () => {
    return (
        <div className="sm:p-12 md:p-18 lg:24 bg-gray-800">
            <div className="flex xl:flex-row flex-col w-full shadow-lg bg-white">
                {/* Picture */}
                <div className="xl:w-1/2 h-[16em] md:h-[24em] lg:h-[32em] overflow-hidden">
                    <img width="100%" src="/faceshot.jpg" alt="Picture of Colin Maloney" />
                </div>
                {/*Picture End */}

                <div className="flex flex-col gap-0 xl:w-1/2 px-4 lg:px-12 py-8 font-iceland">
                    <span className="text-5xl">
                        About Me
                    </span>
                    <div className="text-4xl">
                        <span>
                            Computer Science B.S. Major at Florida State University
                            with a passion for programming.
                        </span>
                        <br /><br /><br />
                        <span>
                            Interested in Web Development,
                            Game Development, Data Science, and Machine Learning.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;