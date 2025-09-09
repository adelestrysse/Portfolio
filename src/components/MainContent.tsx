import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Mail, MapPin, Laptop } from "lucide-react"
import { Projects } from "./Projects"

export function MainContent() {
  return (
    <div className="max-w-6xl mx-auto bg-background mt-25">
      {/* Header */}
      <div className="relative overflow-hidden rounded-t-lg mb-10">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-pink-500/15 to-indigo-400/10 animate-pulse"></div>
        <div className="relative p-8 text-center">
          <Avatar className="w-50 h-50 mx-auto mb-6 ring-4 ring-purple-500/30 hover:ring-pink-500/50 transition-all duration-300 hover:scale-105">
            <AvatarImage src="/profile_picture.jpg" alt="Profile" className="object-contain"/>
            <AvatarFallback className="text-xl bg-gradient-to-br from-emerald-500 to-indigo-400 text-white">
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
              <a href="https://www.linkedin.com/in/adele-strysse/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 bg-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 hover:text-white transition-all duration-300"
            >
              <a href="https://github.com/adelestrysse" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
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
        <div id="about" className="my-20 mx-5 mb-10 scroll-mt-24">
        <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
            <CardTitle className="flex items-center gap-2">
                About Me
            </CardTitle>
            </CardHeader>
            <CardContent>
            <p className="text-muted-foreground leading-relaxed text-pretty mb-8">
                I started my studies in Computer Science after being inspired to continue my technological
                journey from VGS. I wanted to explore programming a bit further than just my studies, so, I decided to join
                a committee dedicated to programming of applications.                 
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty mb-8">
              I’ve gained a lot of experience through my studies and by working alongside my fellow committee members. 
              I have improved my programming skills and also learned just how important teamwork is when it comes to developing a product.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              I'm excited for the journey ahead and am highly motivated, hardworking, and eager to keep learning!
              I enjoy collaborating with others and thrive in social, team-oriented environments, always ready to contribute my best!
            </p>
            </CardContent>
        </Card>
        </div>

        {/* Work */}
        <div id="work" className="mt-20 mx-5 scroll-mt-24">
        <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
            <CardTitle className="flex items-center gap-2">
                Relevant Work Experience
            </CardTitle>
            </CardHeader>
            <CardContent>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              In January 2025 to May 2025, I worked as a Learning Assistent for the subject "Menneske-Maskin-Interaksjon"(Human-Computer Interaction). In this role, 
              I provided feedback on assignments and graded reports to help students improve their work. I also guided students through each task, 
              ensuring they gained a solid understanding of the course material.
            </p>
            </CardContent>
        </Card>
        </div>

      <div id="projects" className="mt-20 p-6 space-y-8 scroll-mt-24">
        {/* Projects*/}
        <Projects />

        {/* Skills & Tools */}
        <div id="skills" className="space-y-6">
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
                  <h4 className="font-medium mb-2">Tools and platforms</h4>
                  <div className="flex flex-wrap gap-1 mb-10">
                    <Badge variant="secondary">Visual Studio Code</Badge>
                    <Badge variant="secondary">Figma</Badge>
                    <Badge variant="secondary">Git</Badge>
                    <Badge variant="secondary">GitHub</Badge>
                    <Badge variant="secondary">Firebase</Badge>
                    <Badge variant="secondary">Maven</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Framework and libraries</h4>
                  <div className="flex flex-wrap gap-1 mb-10">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Vite</Badge>
                    <Badge variant="secondary">Tailwind</Badge>
                    <Badge variant="secondary">SQLite3</Badge>
                    <Badge variant="secondary">JavaFX</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Language</h4>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="secondary">Java</Badge>
                    <Badge variant="secondary">HTML</Badge>
                    <Badge variant="secondary">CSS</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Python</Badge>
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
