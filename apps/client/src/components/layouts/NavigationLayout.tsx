import TopNavBar from "../ui/container-components/TopNavBar";

const NavigationLayout = () => {
  return (
    <div className="bg-palewhite h-screen w-screen">
      <div className="bg-white h-[8vh] w-full shadow-md flex justify-center items-center">
        <TopNavBar />
      </div>
      <div className="h-[92vh] w-full"></div>
    </div>
  );
};

export default NavigationLayout;
