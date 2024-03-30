import { cn } from "@/lib/utils";

type CardType = {
  date?: string;
  title?: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
};

const SimpleNeoCard = ({
  date,
  title,
  description,
  className,
  children,
  isActive,
  onClick
}: CardType) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        className,
        ` border-black border-2 rounded-md ${isActive?'shadow-[8px_8px_0px_rgba(0,0,0,1)]':''} bg-white`
      )}
    >
      <article className="w-full h-full">
        <div className="px-6 py-5 text-left h-full">
          {date && <p className="text-base mb-4">{date}</p>}
          {title && (
            <h1 className="text-[32px] leading-8 font-bold mb-4">{title}</h1>
          )}
          {description && (
            <p className="text-sm  mb-4 line-clamp-2 lg:line-clamp-4">
              {description}
            </p>
          )}
          {children}
        </div>
      </article>
    </div>
  );
};

export default SimpleNeoCard;
