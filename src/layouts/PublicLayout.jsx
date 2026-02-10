import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const PublicLayout = () => {
    return (
    <div>
        <Navbar /> {/*Ton header */}
      <main>
         <Outlet /> {/* C'EST ICI QUE LA PAGE S'AFFICHE */}
      </main>
      <Footer />
    </div>
  );
}
export default PublicLayout;