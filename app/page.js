import FrameComponent from "./_components/FrameComponent";

const Page = () => {
  return (
    <div className="w-full relative [background:linear-gradient(180deg,_#2c2143,_#000)] overflow-hidden flex flex-col items-center justify-start pt-10 px-0 pb-[60px] box-border gap-[106px] leading-[normal] tracking-[normal]">
      <section className=" flex flex-col items-center justify-start gap-[28px] text-left text-base text-white font-inter">
        <div className=" flex flex-row items-start justify-center py-0 px-5">
          <a className="[text-decoration:none] relative leading-[21px] font-medium text-lg inline-block min-w-[40px]">
            Hola!
          </a>
        </div>
        <div className=" h-[450px] lg:-mt-10 relative flex justify-center">
          <div className="absolute h-full top-[0px] bottom-[0px]  max-h-full w-[600px] lg:w-[300px] flex items-center justify-center">
            <img
              className="h-full w-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.051)] animate-pulse"
              alt=""
              src="/error-msgillustration.svg"
            />
          </div>
          <div className="absolute top-[145px] w-[95px] h-[102.1px] lg:h-[75px] lg:top-[160px]  z-[1] flex items-center justify-center">
            <img
              className="w-full h-full  z-[1] object-contain absolute  top-[30px] [transform:scale(2.074)] "
              loading="lazy"
              alt=""
              src="/vector1.svg"
            />
          </div>
        </div>
      </section>
      <FrameComponent />
    </div>
  );
};

export default Page;