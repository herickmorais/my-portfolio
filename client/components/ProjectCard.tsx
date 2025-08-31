interface ProjectCardProps {
  title: string;
  description: string;
  images: {
    src: string;
    alt: string;
    className?: string;
    style?: React.CSSProperties;
  }[];
  backgroundColor?: string;
}

export default function ProjectCard({ title, description, images, backgroundColor = "#E2E6E9" }: ProjectCardProps) {
  return (
    <div className="flex min-w-[240px] max-w-[444px] flex-col items-start gap-4 flex-1 group cursor-pointer transition-transform hover:scale-105">
      {/* Image Container */}
      <div 
        className="flex justify-center items-start gap-4 self-stretch aspect-[74/43] rounded-xl relative overflow-hidden"
        style={{ backgroundColor }}
      >
        {images.map((image, index) => (
          <img 
            key={index}
            src={image.src}
            alt={image.alt}
            className={`absolute ${image.className || ''}`}
            style={image.style}
          />
        ))}
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-center items-start gap-[7px] self-stretch">
        <p className="self-stretch text-[#777777] text-[16px] leading-[19.2px]">
          {description}
        </p>
        <h3 className="self-stretch text-[#252525] text-[24px] font-bold leading-[28.8px]">
          {title}
        </h3>
      </div>
    </div>
  );
}
