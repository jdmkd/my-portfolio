import TagLine from "./Tagline";

const Heading = ({ className, title, text, tag }) => {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto mb-8 lg:mb-10 text-center`}
    >
      {tag && <h2 className="mb-4 md:justify-center">{tag}</h2>}
      {title && <h2 className="h2">{title}</h2>}  
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </div>
  );
};

export default Heading;
