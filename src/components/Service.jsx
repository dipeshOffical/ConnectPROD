const Service = ({ image, title, desc }) => {
  return (
    <div className="relative text-color-white">
      <img
        src={image}
        alt="connect-service-img"
        className="lg:h-full object-cover"
      />
      <div className="absolute bottom-0 bg-[rgba(0,0,0,0.3)] w-full py-4 px-4">
        <h5>{title}</h5>
        <div className="mt-1 text-sm">
          <span>{desc}</span>
        </div>
      </div>
    </div>
  );
};

export default Service;
