import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"

export const Projects = () => {
    return (
        <div>
            <section>
                <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-2 leading-tight">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Projects
                    </span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="group overflow-hidden hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2">
                    <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                        src="/projects/portfolio.png"
                        alt="Portfolio"
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    <CardContent className="p-4">
                        <h3 className="font-semibold mb-2 group-hover:text-purple-600 transition-colors">
                        Portfolio
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                        
                        </p>
                        <div className="flex items-center justify-between">
                        <div className="flex gap-1">
                            <Badge variant="outline" className="text-xs hover:bg-purple-100 transition-colors">
                            React
                            </Badge>
                            <Badge variant="outline" className="text-xs hover:bg-pink-100 transition-colors">
                            Vite
                            </Badge>
                            <Badge variant="outline" className="text-xs hover:bg-pink-100 transition-colors">
                            TypeScript
                            </Badge>
                        </div>
                        </div>
                    </CardContent>
                    </Card>

                    <Card className="group overflow-hidden hover:shadow-xl hover:shadow-pink-500/20 transition-all duration-300 hover:-translate-y-2">
                    <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                        src="/projects/appevent.png"
                        alt="AppEvent"
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    <CardContent className="p-4">
                        <h3 className="font-semibold mb-2 group-hover:text-pink-600 transition-colors">
                        AppEvent
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">Project from "Programvareutvikling"</p>
                        <div className="flex items-center justify-between">
                        <div className="flex gap-1">
                            <Badge variant="outline" className="text-xs hover:bg-pink-100 transition-colors">
                            React
                            </Badge>
                            <Badge variant="outline" className="text-xs hover:bg-purple-100 transition-colors">
                            Next.js
                            </Badge>
                            <Badge variant="outline" className="text-xs hover:bg-pink-100 transition-colors">
                            TypeScript
                            </Badge>
                        </div>
                        </div>
                    </CardContent>
                    </Card>

                    <Card className="group overflow-hidden hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-2">
                    <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                        src="/projects/onlinefondet.png"
                        alt="OnlineFondet"
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 block"
                        />
                    </div>
                    <CardContent className="p-4">
                        <h3 className="font-semibold mb-2 group-hover:text-orange-600 transition-colors">
                        OnlineFondet (penne)
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">A website for "Online Linjeforening"'s fund</p>
                        <div className="flex items-center justify-between">
                        <div className="flex gap-1">
                            <Badge variant="outline" className="text-xs hover:bg-orange-100 transition-colors">
                            React
                            </Badge>
                            <Badge variant="outline" className="text-xs hover:bg-yellow-100 transition-colors">
                            TypeScript
                            </Badge>
                        </div>
                        </div>
                    </CardContent>
                    </Card>

                    <Card className="group overflow-hidden hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2">
                    <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                        src="/projects/movie_library.png"
                        alt="MovieLibrary"
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    <CardContent className="p-4">
                        <h3 className="font-semibold mb-2 group-hover:text-purple-600 transition-colors">
                        MovieLibrary
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">Project from "Informatikk prosjektarbeid 1"</p>
                        <div className="flex items-center justify-between">
                        <div className="flex gap-1">
                            <Badge variant="outline" className="text-xs hover:bg-purple-100 transition-colors">
                            Java
                            </Badge>
                            <Badge variant="outline" className="text-xs hover:bg-purple-100 transition-colors">
                            JavaFX
                            </Badge>
                        </div>
                        </div>
                    </CardContent>
                    </Card>

                    <Card className="group overflow-hidden hover:shadow-xl hover:shadow-pink-500/20 transition-all duration-300 hover:-translate-y-2">
                    <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                        src="/projects/autobank.png"
                        alt="Autobank"
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    <CardContent className="p-4">
                        <h3 className="font-semibold mb-2 group-hover:text-pink-600 transition-colors">
                        Autobank
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">Website for economy in "Online Linjeforening"</p>
                        <div className="flex items-center justify-between">
                        <div className="flex gap-1">
                            <Badge variant="outline" className="text-xs hover:bg-pink-100 transition-colors">
                            React
                            </Badge>
                            <Badge variant="outline" className="text-xs hover:bg-purple-100 transition-colors">
                            TypeScript
                            </Badge>
                        </div>
                        </div>
                    </CardContent>
                    </Card>
                </div>
                </section>
        </div>
    )
}