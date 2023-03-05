/* eslint-disable @next/next/no-img-element */
const FlexContent = ({
  ifExists,
  endpoint: { title, heading, text, img, btn, url },
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center   nike-container ${
        ifExists ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="max-w-lg lg:max-w-none w-full md:text-center">
        <h1 className="text-3xl text-center md:text-4xl font-bold text-gradient">
          {heading}
        </h1>
        <h1 className="text-2xl text-center lg:text-5xl md:text-4xl font-bold text-slate-900 filter drop-shadow-lg ">
          {title}
        </h1>
        <p className="text-sm m-2 text-center xl:my-4 text-slate-400">{text}</p>
        <a
          href={url}
          className="flex items-center justify-center"
          target={"_blank"}
          role="button"
        >
          <button
            type="button"
            className="button-theme bg-slate-900 shadow-slate-900 text-slate-100 py-1.5 my-3 "
          >
            {btn}
          </button>
        </a>
      </div>
      <div className="flex items-center my-1 justify-center max-w-xl relative lg:max-w-none w-full">
        <img
          className={`w-auto object-fill transitions-theme ${
            ifExists
              ? "h-36 sm:h-44 md:h-56 lg:h-60 rotate-6 hover:-rotate-12"
              : "h-40 sm:h-48 md:h-56 lg:h-60 rotate-[19deg] hover:rotate-12"
          }`}
          src={img}
          alt={heading}
        />
      </div>
    </div>
  );
};

export default FlexContent;
