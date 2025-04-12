import "bootstrap/dist/css/bootstrap.min.css";
import Topheader from "@/components/Header/Topheader";

const page = () => {
  return (
    <div style={{ backgroundColor: "var(--eslam)" }}>
      {/* top header */}
      <Topheader />
    </div>
  );
};

export default page;
