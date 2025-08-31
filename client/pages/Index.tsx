import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";

export default function Index() {
  return (
    <div className="min-h-screen bg-white flex">
      <Sidebar />
      <MainContent />
    </div>
  );
}
