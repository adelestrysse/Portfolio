import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Mail, MapPin, Laptop } from "lucide-react"
import { Projects } from "./Projects"

export function MainContent() {
  return (
    <div className="max-w-6xl mx-auto bg-background">
      {/* Creative Header */}
      <div className="relative overflow-hidden rounded-t-lg mb-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/15 to-orange-500/10 animate-pulse"></div>
        <div className="relative p-8 text-center">
          <Avatar className="w-28 h-28 mx-auto mb-6 ring-4 ring-purple-500/30 hover:ring-pink-500/50 transition-all duration-300 hover:scale-105">
            <AvatarImage src="/creative-designer-portrait.png" alt="Profile" />
            <AvatarFallback className="text-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white">
              AS
            </AvatarFallback>
          </Avatar>
          <h1 className="text-4xl font-bold mb-5 text-balance bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            Adele Xiao Yuan Strysse
          </h1>
          <p className="text-xl text-muted-foreground mb-4 flex items-center justify-center gap-2">
            <Laptop className="w-5 h-5 text-purple-500" />
            Web Developer
          </p>
          <div className="flex justify-center gap-4 mb-6">
            <Button
              variant="outline"
              size="sm"
              className="gap-2 bg-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300"
            >
              LinkedIn
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 bg-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 hover:text-white transition-all duration-300"
            >
              GitHub
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1 hover:text-purple-500 transition-colors">
              <Mail className="w-4 h-4" />
              adelestrysse@gmail.com
            </div>
            <div className="flex items-center gap-1 hover:text-pink-500 transition-colors">
              <MapPin className="w-4 h-4" />
              Trondheim og Veggli
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* About */}
        <div className="lg:col-span-2 space-y-6 mx-5">
        <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
            <CardTitle className="flex items-center gap-2">
                About Me
            </CardTitle>
            </CardHeader>
            <CardContent>
            <p className="text-muted-foreground leading-relaxed text-pretty">
                I started my studies in Computer Science after being inspired to continue my technological
                journey from VGS. 
            </p>
            </CardContent>
        </Card>
        </div>

      <div className="p-6 space-y-8">
        {/* Projects*/}
        <Projects />

          {/* Skills & Tools */}
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  Skills & Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Design</h4>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="secondary">Adobe Creative Suite</Badge>
                      <Badge variant="secondary">Figma</Badge>
                      <Badge variant="secondary">Sketch</Badge>
                      <Badge variant="secondary">Principle</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Specialties</h4>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="secondary">Brand Identity</Badge>
                      <Badge variant="secondary">UI/UX Design</Badge>
                      <Badge variant="secondary">Typography</Badge>
                      <Badge variant="secondary">Illustration</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
