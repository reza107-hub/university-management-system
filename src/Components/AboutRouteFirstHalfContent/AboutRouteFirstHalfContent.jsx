

const AboutRouteFirstHalfContent = ({title,text}) => {
    return (
        <div className="relative">
        <img className="w-full h-[400px]" src="/mu.jpg" alt="" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-8 rounded-lg shadow-lg">
          <p className="text-3xl font-bold mb-4">{title}</p>
          <p className="text-lg">
            {text}
          </p>
        </div>
      </div>
    );
};

export default AboutRouteFirstHalfContent;