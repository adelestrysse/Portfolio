import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Mail, MapPin, Eye, Heart, Zap, Laptop } from "lucide-react"

export function MainContent() {
  return (
    <div className="max-w-6xl mx-auto bg-background">
      {/* Creative Header */}
      <div className="relative overflow-hidden rounded-t-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/15 to-orange-500/10 animate-pulse"></div>
        <div className="relative p-8 text-center">
          <Avatar className="w-28 h-28 mx-auto mb-6 ring-4 ring-purple-500/30 hover:ring-pink-500/50 transition-all duration-300 hover:scale-105">
            <AvatarImage src="/creative-designer-portrait.png" alt="Profile" />
            <AvatarFallback className="text-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white">
              AS
            </AvatarFallback>
          </Avatar>
          <h1 className="text-4xl font-bold mb-5 text-balance bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* About */}
        <div className="lg:col-span-2 space-y-6">
        <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">👋</span>
                About Me
            </CardTitle>
            </CardHeader>
            <CardContent>
            <p className="text-muted-foreground leading-relaxed text-pretty">
                I'm a passionate creative director with 8+ years of experience helping brands tell their stories
                through compelling visual design. My approach combines strategic thinking with artistic vision to
                create memorable brand experiences that resonate with audiences and drive business results. I believe
                great design should not only look beautiful but also solve problems and communicate effectively. ✨
            </p>
            </CardContent>
        </Card>
        </div>

      <div className="p-6 space-y-8">
        {/* Featured Work */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
            <Zap className="w-6 h-6 text-yellow-500" />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Featured Work
            </span>
            <Zap className="w-6 h-6 text-yellow-500" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="group overflow-hidden hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="/modern-brand-identity.png"
                  alt="Brand Identity Project"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary" size="sm" className="gap-2 bg-white/90 hover:bg-white">
                    <Eye className="w-4 h-4" />
                    View Project
                  </Button>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2 group-hover:text-purple-600 transition-colors">
                  EcoTech Brand Identity 🌱
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Complete brand identity for sustainable technology startup
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    <Badge variant="outline" className="text-xs hover:bg-purple-100 transition-colors">
                      Branding
                    </Badge>
                    <Badge variant="outline" className="text-xs hover:bg-pink-100 transition-colors">
                      Logo Design
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground hover:text-red-500 transition-colors cursor-pointer">
                    <Heart className="w-3 h-3" />
                    124
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-xl hover:shadow-pink-500/20 transition-all duration-300 hover:-translate-y-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="/mobile-app-ui-design.png"
                  alt="Mobile App Design"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-600/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary" size="sm" className="gap-2 bg-white/90 hover:bg-white">
                    <Eye className="w-4 h-4" />
                    View Project
                  </Button>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2 group-hover:text-pink-600 transition-colors">
                  FitTracker Mobile App 💪
                </h3>
                <p className="text-sm text-muted-foreground mb-3">UI/UX design for fitness tracking application</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    <Badge variant="outline" className="text-xs hover:bg-pink-100 transition-colors">
                      UI/UX
                    </Badge>
                    <Badge variant="outline" className="text-xs hover:bg-purple-100 transition-colors">
                      Mobile
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground hover:text-red-500 transition-colors cursor-pointer">
                    <Heart className="w-3 h-3" />
                    89
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="/packaging-design-collection.png"
                  alt="Packaging Design"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary" size="sm" className="gap-2 bg-white/90 hover:bg-white">
                    <Eye className="w-4 h-4" />
                    View Project
                  </Button>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2 group-hover:text-orange-600 transition-colors">
                  Artisan Coffee Packaging ☕
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Premium packaging design for specialty coffee brand
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    <Badge variant="outline" className="text-xs hover:bg-orange-100 transition-colors">
                      Packaging
                    </Badge>
                    <Badge variant="outline" className="text-xs hover:bg-yellow-100 transition-colors">
                      Print
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground hover:text-red-500 transition-colors cursor-pointer">
                    <Heart className="w-3 h-3" />
                    156
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="/website-design-layout.jpg"
                  alt="Website Design"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary" size="sm" className="gap-2 bg-white/90 hover:bg-white">
                    <Eye className="w-4 h-4" />
                    View Project
                  </Button>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2 group-hover:text-purple-600 transition-colors">
                  Architecture Firm Website 🏢
                </h3>
                <p className="text-sm text-muted-foreground mb-3">Modern website design for architectural studio</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    <Badge variant="outline" className="text-xs hover:bg-purple-100 transition-colors">
                      Web Design
                    </Badge>
                    <Badge variant="outline" className="text-xs hover:bg-pink-100 transition-colors">
                      Architecture
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground hover:text-red-500 transition-colors cursor-pointer">
                    <Heart className="w-3 h-3" />
                    203
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-xl hover:shadow-pink-500/20 transition-all duration-300 hover:-translate-y-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="/abstract-geometric-artwork.png"
                  alt="Illustration Work"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-600/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary" size="sm" className="gap-2 bg-white/90 hover:bg-white">
                    <Eye className="w-4 h-4" />
                    View Project
                  </Button>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2 group-hover:text-pink-600 transition-colors">
                  Editorial Illustrations 📝
                </h3>
                <p className="text-sm text-muted-foreground mb-3">Custom illustrations for magazine articles</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    <Badge variant="outline" className="text-xs hover:bg-pink-100 transition-colors">
                      Illustration
                    </Badge>
                    <Badge variant="outline" className="text-xs hover:bg-purple-100 transition-colors">
                      Editorial
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground hover:text-red-500 transition-colors cursor-pointer">
                    <Heart className="w-3 h-3" />
                    78
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="/motion-graphics-design.jpg"
                  alt="Motion Graphics"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary" size="sm" className="gap-2 bg-white/90 hover:bg-white">
                    <Eye className="w-4 h-4" />
                    View Project
                  </Button>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2 group-hover:text-orange-600 transition-colors">Brand Animation 🎨</h3>
                <p className="text-sm text-muted-foreground mb-3">Animated brand elements and motion graphics</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    <Badge variant="outline" className="text-xs hover:bg-orange-100 transition-colors">
                      Animation
                    </Badge>
                    <Badge variant="outline" className="text-xs hover:bg-yellow-100 transition-colors">
                      Motion
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground hover:text-red-500 transition-colors cursor-pointer">
                    <Heart className="w-3 h-3" />
                    167
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

          {/* Skills & Contact */}
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

            <Card className="hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🤝</span>
                  Let's Work Together
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Ready to bring your brand vision to life? Let's discuss your project and create something amazing
                  together! 🚀
                </p>
                <Button className="w-full gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 text-white">
                  <Mail className="w-4 h-4" />
                  Get In Touch ✨
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
