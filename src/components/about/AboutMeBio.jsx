import profileImage from "../../assets/images/profile.jpeg";
import { HighLightText } from "../utils/HighLightText";

const AboutMeBio = () => {
  return (
    <div className="flex flex-col justify-center items-center sm:flex-row gap-10 p-10">
      <div className="max-w-[700px]">
        <img src={profileImage} className="rounded-lg sm:w-48 lg:w-60" alt="" />
      </div>

      <div className="flex flex-col gap-4 font-light text-sm text-primary-dark dark:text-primary-light mb-5 w-full sm:w-3/4 text-left">
        <div>
          Greetings! I&apos;m{" "}
          <HighLightText bold={true}>Mohd Asif</HighLightText>, an aspiring
          Fullstack Developer currently based in{" "}
          <HighLightText>Bangalore, India</HighLightText>. I have done{" "}
          <HighLightText>B.Tech (Computer Science)</HighLightText> from{" "}
          <HighLightText>Jamia Millia Islamia, New Delhi</HighLightText> and
          spent 2 years pursuing{" "}
          <HighLightText> M.Tech(Computer Science)</HighLightText>
          from the <HighLightText>University of Hyderabad</HighLightText>.
        </div>{" "}
        <div>
          I have done few development projects that includes technologies{" "}
          <HighLightText>
            React, JavaScript, Redux, Tailwind CSS, MongoDB
          </HighLightText>
          , and <HighLightText>Express</HighLightText>. I&apos;m also familiar
          with <HighLightText> Java, SpringBoot, Python, Flask</HighLightText>{" "}
          as well. Feel free to reach out. I&apos;m always excited about new
          opportunities!
        </div>
      </div>
    </div>
  );
};

export default AboutMeBio;
