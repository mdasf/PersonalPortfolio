import AppBanner from "../components/home/AppBanner";
import ProjectsGrid from "../components/projects/ProjectsGrid";

const Home = () => {
  return (
    // mx-auto
    <div className="container ">
      <AppBanner />
      <ProjectsGrid className="mx-auto" />
    </div>
  );
};

export default Home;
