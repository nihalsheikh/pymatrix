import Sidebar from "@/components/Docs/Sidebar";
import Installation from "@/components/Docs/Installation";
import Usage from "@/components/Docs/Usage";
import FlagsTable from "@/components/Docs/FlagsTable";
import ColorPalettes from "@/components/Docs/ColorPalettes";
import Requirements from "@/components/Docs/Requirements";

export default function Docs() {
  return (
    <div className="container py-24 mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-24">
        <Sidebar />
        <div className="max-w-3xl">
          <Installation />
          <Usage />
          <FlagsTable />
          <ColorPalettes />
          <Requirements />
        </div>
      </div>
    </div>
  );
}
