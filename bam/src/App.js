import "./App.css";
import MainLayout from "./homeComponents/main/MainLayout";
import UserPage from "./userComponets/user/userPage/UserPage";
import SellerPage from "./userComponets/seller/SellerPage";
import { Routes, Route } from "react-router-dom";
import NotFound from "./error/NotFound";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />} />
                <Route path="userPage" element={<UserPage />} />
                <Route path="sellerPage" element={<SellerPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
