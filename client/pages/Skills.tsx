import Sidebar from "@/components/Sidebar";

export default function Skills() {
  return (
    <div className="min-h-screen bg-white flex">
      <Sidebar />
      <div className="flex-1 ml-[216px] min-h-screen bg-white">
        <div className="flex justify-center pt-12">
          <div className="w-[920px] px-8">
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <h1 className="text-[32px] font-medium leading-[38.4px] text-[#252525] font-sf-pro mb-4">
                Skills
              </h1>
              <p className="text-[#777777] text-lg font-sf-pro max-w-md">
                This page is a placeholder. Continue prompting to fill in the content for the Skills section.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
