import { motion } from "framer-motion";

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
  buttonType?: "available" | "in-progress";
}

export default function ProjectCard({
  title,
  description,
  images,
  backgroundColor = "#E2E6E9",
  buttonType = "available",
}: ProjectCardProps) {
  return (
    <motion.div
      className="flex w-full min-w-[240px] max-w-[444px] flex-col items-start gap-4 flex-1 group cursor-pointer"
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      whileTap={{ scale: 0.98 }}
    >
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
            className={`absolute ${image.className || ""}`}
            style={image.style}
          />
        ))}

        {/* Hover Button */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-black/20"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {buttonType === "in-progress" ? (
            <motion.button
              disabled
              className="px-4 py-2 bg-gray-500 text-white font-medium text-sm rounded-lg cursor-not-allowed opacity-80"
              initial={{ y: 10, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              Work in progress...
            </motion.button>
          ) : (
            <motion.button
              className="px-4 py-2 bg-black text-white font-medium text-sm rounded-lg hover:bg-gray-900 transition-colors"
              initial={{ y: 10, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              See project
            </motion.button>
          )}
        </motion.div>
      </div>

      {/* Text Content */}
      <motion.div
        className="flex flex-col justify-center items-start gap-[7px] self-stretch"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="self-stretch text-[#777777] text-[16px] leading-[19.2px]">
          {description}
        </p>
        <h3 className="self-stretch text-[#252525] text-[24px] font-bold leading-[28.8px]">
          {title}
        </h3>
      </motion.div>
    </motion.div>
  );
}
