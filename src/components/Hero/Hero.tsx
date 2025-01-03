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
  subtitleClassName = "text-center text-sm text-[#00C7BE] font-bold",
  titleClassName = "text-4xl font-bold",
  descriptionClassName = "text-sm text-[#595959]",
  containerClassName = "text-center my-10 mx-5",
}) => {
  return (
    <div className={containerClassName}>
      <div className="container space-y-5 bg-background text-foreground">
        {subtitle && <p className={subtitleClassName}>{subtitle}</p>}
        <h1 className={titleClassName}>{title}</h1>
        {description && 
        <p className={descriptionClassName}>{description}</p>}
      </div>
    </div>
  );
};

export default Hero;
