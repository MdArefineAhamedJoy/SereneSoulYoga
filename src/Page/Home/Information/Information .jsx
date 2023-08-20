import { useEffect, useState } from "react";
import CountUp from "react-countup";
import PageTitle from "../../../Components/PageTitle";

const Information = () => {
  const [activeStudents, setActiveStudents] = useState(0);
  const [activeTeachers, setActiveTeachers] = useState(0);
  const [testimonials, setTestimonials] = useState(0);
  const [totalVideos, setTotalVideos] = useState(0);
  const initialCount = 0;
  const finalStudentCount = 1;
  const finalTeacherCount = 2;
  const finalTestimonialCount = 1;
  const finalVideoCount = 21;

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("count-section");
      if (element) {
        const elementPosition = element.getBoundingClientRect();
        const isVisible = elementPosition.top < window.innerHeight;
        if (isVisible) {
          startCounting();
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    const startCounting = () => {
      const studentIncrement = Math.ceil(
        (finalStudentCount - initialCount) / 100
      );
      const teacherIncrement = Math.ceil(
        (finalTeacherCount - initialCount) / 100
      );
      const testimonialIncrement = Math.ceil(
        (finalTestimonialCount - initialCount) / 100
      );
      const videoIncrement = Math.ceil((finalVideoCount - initialCount) / 100);
      let currentStudentCount = initialCount;
      let currentTeacherCount = initialCount;
      let currentTestimonialCount = initialCount;
      let currentVideoCount = initialCount;

      const interval = setInterval(() => {
        currentStudentCount += studentIncrement;
        currentTeacherCount += teacherIncrement;
        currentTestimonialCount += testimonialIncrement;
        currentVideoCount += videoIncrement;
        setActiveStudents(currentStudentCount);
        setActiveTeachers(currentTeacherCount);
        setTestimonials(currentTestimonialCount);
        setTotalVideos(currentVideoCount);

        if (
          currentStudentCount >= finalStudentCount &&
          currentTeacherCount >= finalTeacherCount &&
          currentTestimonialCount >= finalTestimonialCount &&
          currentVideoCount >= finalVideoCount
        ) {
          clearInterval(interval);
        }
      });

      return () => {
        clearInterval(interval);
      };
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className=" bg-[#227179]900 mt-24 text-white">
      <h1 className="pt-20 pb-10 text-center font-bold text-3xl">
        YOGA INTERNATIONAL MEMBERSHIP INCLUDES
      </h1>
      <div className="flex flex-col items-center justify-center md:flex-row md:gap-4   pb-12  ">
        <div
          id="count-section"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5   pb-20"
        >
          <div className="p-8 grid w-full ">
            <div className="text-center mx-auto">
              <div className="text-4xl mx-auto font-extrabold flex justify-center items-center text-white border border-blue-400  rounded-3xl w-32 h-24">
                <div className="">
                  <CountUp
                    start={initialCount}
                    end={activeStudents}
                    duration={5}
                  />
                </div>
                <span>+</span>
              </div>
              <div className="text-white mt-4  text-center">
                <h3 className="font-bold text-lg">YOGA PRACTICES</h3>
                <p>Over 3000 yoga practices to enhance all aspects of life</p>
              </div>
            </div>
          </div>
          <div className="p-8 grid w-full ">
            <div className="text-center mx-auto">
              <div className="text-4xl mx-auto font-extrabold flex justify-center items-center text-white border border-blue-400  rounded-3xl w-32 h-24">
                <div className="">
                  <CountUp
                    start={initialCount}
                    end={activeStudents}
                    duration={5}
                  />
                </div>
                <span>+</span>
              </div>
              <div className="text-white mt-4  text-center">
                <h3 className="font-bold text-lg">MEDITATIONS</h3>
                <p>
                  700+ meditations to hone your mind and reach your potential
                </p>
              </div>
            </div>
          </div>
          <div className="p-8 grid w-full ">
            <div className="text-center mx-auto">
              <div className="text-4xl mx-auto font-extrabold flex justify-center items-center text-white border border-blue-400  rounded-3xl w-32 h-24">
                <div className="">
                  <CountUp
                    start={initialCount}
                    end={activeStudents}
                    duration={5}
                  />
                </div>
                <span>+</span>
              </div>
              <div className="text-white mt-4  text-center">
                <h3 className="font-bold text-lg">ARTICLES</h3>
                <p>2700+ articles to expand your knowledge</p>
              </div>
            </div>
          </div>
          <div className="p-8 grid w-full ">
            <div className="text-center mx-auto">
              <div className="text-4xl mx-auto font-extrabold flex justify-center items-center text-white border border-blue-400  rounded-3xl w-32 h-24">
                <div className="">
                  <CountUp
                    start={initialCount}
                    end={activeStudents}
                    duration={5}
                  />
                </div>
                <span>+</span>
              </div>
              <div className="text-white mt-4  text-center">
                <h3 className="font-bold text-lg">COURSES</h3>
                <p>300+ courses and challenges to help your journey</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
