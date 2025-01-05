import React from "react";

interface HeroProps {
  subtitle?: string;
  title: string;
  description?: string;
  subtitleClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  containerClassName?: string;
}

const Hero: React.FC<HeroProps> = ({
  subtitle = "BLOG",
  title,
  description,
  containerClassName,
}) => {
  return (
    <div className={containerClassName}>
      <div className="container space-y-5 bg-background text-foreground">
        {subtitle && (
          <p className="text-center text-sm text-[#00C7BE] font-bold">
            {subtitle}
          </p>
        )}
        <h1 className="text-4xl font-bold">{title}</h1>
        {description && <p className="text-sm text-[#595959]">{description}</p>}
      </div>
    </div>
  );
};

export default Hero;
