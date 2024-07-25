import playlistsData from "@/components/tracklist/TracklistData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center gap-4 overflow-hidden bg-background py-4">
      <div className="absolute left-[-50px] top-[-50px] z-[2] h-[200px] w-[900px] rotate-[-5deg] rounded-full bg-[#373372] opacity-40 blur-[60px]"></div>
      <div className="absolute left-[-50px] top-[-50px] z-[1] h-[400px] w-[1200px] rotate-[-5deg] rounded-full bg-[#680963] opacity-60 blur-[60px]"></div>
      <div className="absolute bottom-[100px] left-[80px] z-[3] h-[500px] w-[800px] rounded-full bg-[#7C336C] opacity-80 blur-[60px]"></div>
      <div className="absolute bottom-[80px] right-[100px] z-[4] h-[450px] w-[450px] rounded-full bg-[#B3588A] opacity-80 blur-[60px]"></div>
      <div className="absolute left-[100px] top-[220px] z-[5] h-[350px] w-[550px] -rotate-[15deg] rounded-full bg-[#ffffff] opacity-30 blur-[60px]"></div>
      <div className="absolute left-[550px] top-[150px] z-[6] h-[250px] w-[350px] -rotate-[35deg] rounded-full bg-[#ffffff] opacity-30 blur-[60px]"></div>
      <div className="container grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card className="relative z-10 h-full w-full bg-background/50 lg:col-span-2 lg:max-h-80">
          <CardContent className="h-full pt-6">
            <div className="flex h-full w-full flex-col-reverse justify-between gap-4 sm:flex-row">
              <div className="flex h-full w-full flex-col gap-4 text-balance text-sm md:w-2/3">
                <h1 className="text-2xl font-bold uppercase">Dom Whiting</h1>
                <div className="flex h-full flex-col gap-2">
                  <div className="flex flex-col gap-2">
                    <p>
                      Better known as the &quot;DJ on the Bike&quot;, Dom has
                      been out and about originally during lockdown and
                      continuing since, spreading infectious energy with his DJ
                      sets while on a bike ride with public crowds gathering in
                      the thousands throughout Europe.
                    </p>
                    <p>
                      He has worked with brands such as Samsung and Three
                      promoting their products and services.
                    </p>
                    <p>As seen on LadBible, ITV and BBC.</p>
                  </div>
                  <p className="flex flex-col items-start gap-2 md:flex-row md:items-center">
                    Contact:{" "}
                    <Link href="mailto:bookings@domwhiting.co.uk">
                      <Button variant="link" className="px-0 underline">
                        bookings@domwhiting.co.uk
                      </Button>
                    </Link>
                  </p>
                </div>
              </div>
              <div className="relative h-64 md:w-1/3">
                <Image
                  src="/DomPhoto.webp"
                  alt="Dom Photo"
                  fill
                  className="!relative h-64 rounded-2xl object-cover object-top shadow-lg md:!absolute md:h-auto"
                />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="relative z-10 flex max-h-96 w-full flex-col overflow-hidden bg-background/50 lg:col-span-1 lg:max-h-80">
          <CardHeader className="shadow-lg">
            <CardTitle className="text-2xl uppercase">Latest events</CardTitle>
          </CardHeader>
          <ScrollArea className="h-full max-h-96 py-4">
            <CardContent className="flex flex-col gap-4 lg:max-h-64">
              {playlistsData.map((playlist) => (
                <div key={playlist.id} className="flex flex-col gap-2">
                  <p className="font-bold">{playlist.date}</p>
                  <Link
                    href={`/tracklists/${playlist.year}/${playlist.city.toLowerCase()}`}
                    className="flex cursor-pointer flex-row items-center gap-4 rounded-xl bg-foreground/10 px-4 py-4 shadow-lg transition-all hover:scale-[1.02] hover:bg-primary/30"
                  >
                    <Image
                      src={`https://i.ytimg.com/vi/${playlist.videoId}/mqdefault.jpg`}
                      alt={playlist.name}
                      width={320}
                      height={180}
                      className="h-24 w-48 rounded-2xl object-cover shadow-lg lg:h-16 lg:w-24"
                    />
                    <div className="grid grid-cols-3 items-center lg:grid-cols-1">
                      <div className="col-span-1 w-64 flex-row items-center gap-2 lg:w-auto lg:flex-col">
                        <p className="text-sm">{playlist.country}</p>
                        <p className="font-bold">{playlist.city}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="font-bold lg:hidden">{playlist.name}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </CardContent>
          </ScrollArea>
        </Card>
        <Card className="relative z-10 flex h-fit w-full flex-col justify-center bg-background/50 lg:col-span-3">
          <Link
            href="https://www.domwhiting.co.uk/product-page/2023TourTShirt"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-[1.02]"
          >
            <CardContent className="pt-6">
              <div className="flex justify-between gap-4">
                <div className="relative w-1/2">
                  <Image
                    src="/shirtnew.webp"
                    alt="2023 Tour T-Shirt"
                    fill
                    className="h-auto rounded-2xl object-cover shadow-lg"
                  />
                </div>
                <div className="flex h-64 w-1/2 flex-col justify-between space-y-3 text-balance px-4 text-sm">
                  <h1 className="text-2xl font-bold uppercase">
                    2023 Tour T-Shirt
                  </h1>
                  <div className="flex flex-col gap-4 text-lg">
                    <p>Click to order the 2023 Tour T-Shirt.</p>
                    <p>
                      You can order it through official Dom Whiting website.
                    </p>
                  </div>
                  <p className="pt-4 text-2xl font-bold">£26.50</p>
                </div>
              </div>
            </CardContent>
          </Link>
        </Card>
      </div>
    </main>
  );
}
