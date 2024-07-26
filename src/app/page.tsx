import playlistsData from "@/components/tracklist/TracklistData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SewingPinIcon } from "@radix-ui/react-icons";
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
        <div className="z-10 flex flex-col gap-4 lg:col-span-2">
          <Card className="relative z-10 bg-background/50">
            <CardContent className="py-6">
              <div className="relative flex flex-col-reverse justify-between gap-4 md:flex-row">
                <div className="flex w-full flex-col gap-4 text-balance text-sm">
                  <h1 className="text-2xl font-bold uppercase">Announcement</h1>
                  <div className="flex flex-col gap-2">
                    <h1 className="text-4xl">
                      Drum & Bass On The Bike heads to BOURNEMOUTH!
                    </h1>
                    <p className="text-2xl">28th of July - Start 14:00Hrs</p>
                    <p>
                      It’s been a little while since I’ve done a UK RIDE and I’m
                      SUPER EXCITED to return to one of my all time FAVOURITE
                      places!
                    </p>
                  </div>
                  <div className="flex h-full w-[25rem] flex-col items-start">
                    <Link
                      href="https://www.google.pl/maps/place/Vitality+Stadium/@50.734617,-1.8434161,15.75z/data=!3m1!5s0x48739f479d94dafd:0xf3e358abc086a26a!4m6!3m5!1s0x48739f479c5b9137:0x95f99d19f249ebd9!8m2!3d50.7348316!4d-1.8390783!16zL20vMDV6bXI1?entry=ttu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 font-bold text-blue-500 transition-transform hover:scale-[1.02]"
                    >
                      <div className="flex items-center gap-2">
                        <SewingPinIcon /> AFC BOURNEMOUTH STADIUM
                      </div>
                      <div className="relative h-[10rem] w-[15rem]">
                        <Image
                          src="/news/bournemouth28julymap.webp"
                          alt="Bournemouth Ride Location July 28th 2024"
                          sizes="50vw"
                          fill
                          className="h-64 rounded-2xl object-cover shadow-lg md:!absolute md:h-auto"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="w-full md:relative lg:w-2/5">
                  <Image
                    src="/news/bournemouth28july.webp"
                    alt="Bournemouth Ride July 28th 2024"
                    sizes="50vw"
                    fill
                    className="h-64 rounded-2xl object-cover opacity-5 shadow-lg md:!absolute md:h-auto md:opacity-100"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="relative z-10 h-full w-full bg-background/50 lg:max-h-80">
            <CardContent className="h-full pt-6">
              <div className="flex h-full w-full flex-col-reverse justify-between gap-4 sm:flex-row">
                <div className="flex h-full w-full flex-col gap-4 text-balance text-sm md:w-2/3">
                  <h1 className="text-2xl font-bold uppercase">Dom Whiting</h1>
                  <div className="flex h-full flex-col gap-2">
                    <div className="flex flex-col gap-2">
                      <p>
                        Better known as the &quot;DJ on the Bike&quot;, Dom has
                        been out and about originally during lockdown and
                        continuing since, spreading infectious energy with his
                        DJ sets while on a bike ride with public crowds
                        gathering in the thousands throughout Europe.
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
                <div className="relative md:w-1/3">
                  <Image
                    src="/DomPhoto.webp"
                    alt="Dom Photo"
                    sizes="25vw"
                    fill
                    className="!relative h-64 rounded-2xl object-cover object-top shadow-lg md:!absolute md:h-auto"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <Card className="relative z-10 flex h-full w-full flex-col overflow-hidden bg-background/50 lg:col-span-1">
          <CardHeader className="shadow-lg">
            <CardTitle className="text-2xl uppercase">Latest events</CardTitle>
          </CardHeader>
          <ScrollArea className="h-full py-4">
            <CardContent className="flex flex-col gap-4 lg:max-h-64">
              {playlistsData.map((playlist) => (
                <div key={playlist.id} className="flex flex-col gap-2">
                  <p className="font-bold">{playlist.date}</p>
                  <Link
                    href={`/tracklists/${playlist.year}/${playlist.city.toLowerCase()}`}
                    className="flex cursor-pointer flex-row items-center gap-4 rounded-xl bg-foreground/10 px-4 py-4 shadow-lg transition-all hover:scale-[1.02] hover:bg-primary/30"
                  >
                    <div className="relative aspect-video h-24 lg:h-20">
                      <Image
                        src={`https://i.ytimg.com/vi/${playlist.videoId}/mqdefault.jpg`}
                        alt={playlist.name}
                        fill
                        sizes="25vw"
                        className="h-auto rounded-2xl object-cover shadow-lg"
                      />
                    </div>
                    <div className="grid grid-cols-3 items-center lg:grid-cols-1">
                      <div className="col-span-1 w-64 flex-row items-center gap-2 lg:w-auto lg:flex-col">
                        <p className="text-sm">{playlist.country}</p>
                        <p className="font-bold">{playlist.city}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="hidden font-bold sm:block lg:hidden">
                          {playlist.name}
                        </p>
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
                    sizes="50vw"
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
