import "./App.css";
import ModalLayout from "./features/modal/ModalLayout";
import FooterLayout from "./staticComponents/footer/FooterLayout";
import NavbarLayout from "./staticComponents/navbar/NavbarLayout";
//import MainLayout from "./staticComponents/main/MainLayout";

function App() {
    return (
        <div>
            <NavbarLayout />
            <ModalLayout />
            {/*<MainLayout />*/}
            <FooterLayout />
        </div>
    );
}

export default App;
