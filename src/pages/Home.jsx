import AppBanner from "../components/home/AppBanner";
import ProjectsGrid from "../components/projects/ProjectsGrid";

const Home = () => {
  return (
    <div className="container mx-auto ">
      <AppBanner />
      <ProjectsGrid className="mx-auto" />
    </div>
  );
};

export default Home;
