import Sidebar from "@/components/Sidebar";

export default function Skills() {
  const skillsData = [
    {
      category: "Design & UI",
      skills: ["Design System", "Components", "Prototypes", "Responsiveness"],
    },
    {
      category: "Research & Testing",
      skills: [
        "User Interviews",
        "Researches",
        "User Journey",
        "Usability Test",
      ],
    },
    {
      category: "Strategy & Analysis",
      skills: [
        "Design Thinking",
        "User Flow",
        "Heuristic Analysis",
        "Wireframe",
      ],
    },
    {
      category: "Process & Delivery",
      skills: [
        "Agile Methodology",
        "Metrics",
        "Information Architecture",
        "Handoff",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white flex">
      <Sidebar />
      <div className="flex-1 ml-[242px] min-h-screen bg-white">
        <div className="flex justify-center pt-12">
          <div className="w-[920px] px-8 flex flex-col gap-6">
            {/* Header Section */}
            <div className="flex justify-between items-center flex-wrap gap-4">
              <div className="flex flex-col items-start">
                <h1 className="text-[32px] font-medium leading-[38.4px] text-[#252525]">
                  My tools and skills
                </h1>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col items-start gap-[72px] w-full">
              {/* Tools Section */}
              <div className="flex flex-col items-start gap-6 w-full bg-white shadow-sm">
                <div className="w-full">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/939993f4a50898a0a812f3f3a2da99496893236c?width=1840"
                    alt="Design tools including Figma, DaVinci Resolve, Paw, Linear, Araxis Merge, Hotjar, Zoom, Jira, Asana, Adobe XD, and Mondly"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Skills Grid */}
              <div className="w-full flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 w-full max-w-[920px]">
                  {skillsData.map((category, categoryIndex) => (
                    <div
                      key={categoryIndex}
                      className="flex flex-col justify-center items-start gap-10"
                    >
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="flex flex-col items-start"
                        >
                          <div className="flex flex-col justify-center items-center w-full">
                            <div className="flex flex-col justify-center items-start">
                              <div className="flex flex-col items-start">
                                <h3 className="text-[20px] font-medium leading-[24px] text-[#252525]">
                                  {skill}
                                </h3>
                              </div>
                              <div className="flex flex-col items-start">
                                <p className="text-[16px] leading-[19.2px] text-[#414141]">
                                  -
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Spacer */}
              <div className="w-full h-12"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
