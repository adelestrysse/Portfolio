import { Navbar } from "../components/Navbar";
import { MainContent } from "../components/MainContent";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background ">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <MainContent />

            {/* Footer */}
            <footer className="border-t bg-muted/30 py-12">
                <div className="container mx-auto px-4 text-center">
                <p className="text-muted-foreground">
                    Choose the template that best fits your industry and personal style. All designs are fully responsive and
                    accessible.
                </p>
                </div>
            </footer>
        </div>
    );
};