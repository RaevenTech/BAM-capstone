import "./App.css";
import MainLayout from "./homeComponents/main/MainLayout";
import UserPage from "./userComponets/buyer/UserPage";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />} />
                <Route path="userPage" element={<UserPage />} />
            </Routes>
        </>
    );
}

export default App;
