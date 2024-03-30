import { auth } from "@/auth"
import FirstBgComp from "@/components/backgroundComponents/first"
import { Card, CardContent } from "@/components/ui/card"
import SimpleNeoCard from "@/components/ui/neo-brutalist/simple-neo-card"
import GetProfileData from "@/fetchers/get-profile-data"
import { LightningBoltIcon } from "@radix-ui/react-icons"
import Image from "next/image"


export default async function Component() {
  const getGamifiedData = await GetProfileData()
  const session = await auth()
  if (!session?.user) {
    return null
  }
  if (!getGamifiedData) {
    return null
  }
  
  return (
    <>
    <FirstBgComp/>
    <Card className="w-[95%] my-auto mx-auto rounded-lg shadow-lg">
      <CardContent>
    <div className="w-full flex flex-col items-scenter py-10 justify-center  h-[75vh] max-w-3xl space-y-6">
      <div className="flex flex-col gap-1 px-6 w-screen items-start   ">
        <div className="flex items-start gap-4">
          <div className="aspect-square overflow-hidden border-2 border-gray-200 dark:border-gray-800">
            
            <Image
              alt="https://i.ibb.co/hKLpJsY/Einstein5.jpg"
              height={100}
              src="https://i.ibb.co/hKLpJsY/Einstein5.jpg"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
             width={100}
            
            />
          </div>
          <div className="space-y-1.5 px-6">
            <h1 className="text-3xl font-bold">{session.user.name}</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Joined on March 1, 2022</p>
            <p className="text-md text-gray-700  dark:text-gray-400">
            “The journey of a thousand miles begins with one step.“
          </p>
          </div>
        </div>
        <div className="grid gap-0.5">
          
        </div>
      </div>
      <div className="grid gap-1.5 w-10/12 mt-10 px-6">
        <div className="grid grid-cols-2 items-center gap-1.5">
          <div className="text-sm font-medium">Coins</div>
          <div className="flex items-center gap-1.5">
            <Image src="/images/coin.png" alt="coin" width={16} height={16} />
            <span className="font-semibold">{getGamifiedData[0]}</span>
          </div>
        </div>
        <div className="grid grid-cols-2 items-center gap-1.5">
          <div className="text-sm font-medium">Streak</div>
          <div className="flex items-center gap-1.5">
            <FlameIcon  className="w-4 h-4 text-red-500" />
            <span className="font-semibold">{getGamifiedData[1]}</span>
          </div>
        </div>
        <div className="grid grid-cols-2 items-center gap-1.5">
          <div className="text-sm font-medium">Prompt-Tokens</div>
          <div className="flex items-center gap-1.5">
            <LightningBoltIcon className="w-4 h-4 text-yellow-500" />
            <span className="font-semibold">{getGamifiedData[2]}</span>
          </div>
        </div>
      </div>
    </div>
    </CardContent>
    </Card>
    </>
  )
}

function ArrowUpCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m16 12-4-4-4 4" />
      <path d="M12 16V8" />
    </svg>
  )
}


function AwardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  )
}


function FlameIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  )
}
