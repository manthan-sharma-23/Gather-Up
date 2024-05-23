import AppSideBar from "../ui/container-components/App-SideBar";
import TopNavBar from "../ui/container-components/TopNavBar";

const NavigationLayout = () => {
  return (
    <div className="bg-palewhite h-screen w-screen  flex flex-col items-center justify-center">
      <div className="bg-white h-[8vh] w-full shadow-md flex justify-center items-center">
        <TopNavBar />
      </div>
      <div className="h-[92vh] w-[75%] flex justify-center">
        <div className="w-[18%] mt-3">
          <AppSideBar />
        </div>
        <div className="w-[77%]  "></div>
      </div>
    </div>
  );
};

export default NavigationLayout;
