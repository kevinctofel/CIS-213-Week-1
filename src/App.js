import BodyFunction from "./BodyFunction";
import FooterFunction from "./FooterFunction";
import HeaderFunction from "./HeaderFunction";
import SidebarFunction from "./SidebarFunction";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <HeaderFunction />
      <SidebarFunction />
      <BodyFunction />
      <FooterFunction />
    </div>
  );
}
