import { Navbar } from "../components/Navbar";
import { MainContent } from "../components/MainContent";
import { Footer } from "../components/Footer";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <MainContent />

            {/* Footer */}
            <Footer />
        </div>
    );
};