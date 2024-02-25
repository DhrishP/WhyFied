import { Lexend_Mega } from "next/font/google";
const Mega = Lexend_Mega({ subsets: ["latin"], weight: ["500"] });

export default function Card({
  color,
  text1,
  text2,
  text3,
  className,
}: {
  color: string;
  text1: string;
  text2?: string;
  text3?: string;
  className?: string;
}) {
  return (
    <>
      <div
        className={`${Mega.className} ${className} ${color} aspect-square font-medium hover:font-black w-[300px] text-2xl  border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] grid place-content-center hover:shadow-[14px_14px_0px_rgba(0,0,0,1)] cursor-pointer transition-shadow hover:scale-110`}
      >
        <div className="flex space-x-2 mx-auto w-[255px]">
          <p>
            {text1} <br />
            <strong className="text-yellow-500 text-[24px] hover:text-[30px] hover:font-extrabold">
              {text2}
            </strong>{" "}
            {text3}
          </p>
        </div>
      </div>
    </>
  );
}
