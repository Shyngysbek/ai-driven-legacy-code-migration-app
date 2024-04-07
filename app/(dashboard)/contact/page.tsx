import { Avatar } from "@/components/ui/avatar"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"


const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-around mt-[20px] px-20">
      <h1 className="text-3xl mb-4 font-bold">Our Team</h1>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <Card>
          <CardHeader className="pb-4">
            <div className="flex items-center space-x-4">
              <Avatar className="w-15 h-15">
                <img alt="Image" className="aspect-square object-cover" height="64" src="/Ansar.jpeg" width="64" />
              </Avatar>
              <div className="grid gap-0.5">
                <CardTitle className="text-base">Ansar Amantur</CardTitle>
                <CardDescription className="text-sm">Engineer</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="text-sm">
            <p className="mb-16">
              Sometimes, rewriting and rearchitecturing codes might seem very tedious and difficult to accomplish, but I'm really happy I've stumbled upon this hidden gem. Really amazing work done there
            </p>
            <Separator />
            <p className="mt-max">ansaramantur@gmail.com</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-4">
            <div className="flex items-center space-x-4">
              <Avatar className="w-15 h-15">
                <img alt="Image" className="aspect-square object-cover" height="64" src="/Shyngysbek.jpg" width="64" />
              </Avatar>
              <div className="grid gap-0.5">
                <CardTitle className="text-base">Shyngysbek Balgabay</CardTitle>
                <CardDescription className="text-sm">FrontEnd & BackEnd Developer</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="text-sm">
            <p className="mb-4">
              I'm a versatile web developer proficient in frontend (NextJs, TailwindCSS, JavaScript) and backend (Node.js, Python) technologies. I specialize in creating responsive interfaces and building robust APIs and databases, delivering scalable web solutions with a collaborative and solution-oriented approach.
            </p>
            <Separator />
            <p>bbalgabay.shyngysbek@gmail.com</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-4">
            <div className="flex items-center space-x-4">
              <Avatar className="w-15 h-15">
                <img alt="Image" className="aspect-square object-cover" height="64" src="/Temirlan.jpeg" width="64" />
              </Avatar>
              <div className="grid gap-0.5">
                <CardTitle className="text-base">Temirlan Turusbayev</CardTitle>
                <CardDescription className="text-sm">Engineer</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="text-sm">
            <p className="mb-24">
              Skilled in C language coding and UI/UX design.
              As a quick learner I can say that I am passionate about learning, because there is always one more thing to learn.
            </p>
            <div className="h-auto" />
            <Separator />
            <p>turusbaevtemirlan@gmail.com</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ContactPage;