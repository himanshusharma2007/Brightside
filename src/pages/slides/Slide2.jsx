import {
  FaMusic,
  FaCalculator,
  FaBookReader,
  FaRegBookmark,
  FaHistory,
  FaRunning,
} from "react-icons/fa";
const Slide2 = () => {
  return (
    <div>
      <div className="offer-section py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col -mt-32 lg:flex-row items-center mb-12 justify-between w-full">
            <div
              id="target"
              className="offer-box slide-in max-w-[350px] z-10 bg-green-500 flex justify-center items-center text-white p-4 h-[256px] rounded-lg mr-0 lg:mr-10 mb-4 lg:mb-0 lg:min-h-[300px] shadow-lg"
            >
              <div className="contant">
                <h3 className="offer-title text-2xl font-bold mb-2">
                  Enroll Now
                </h3>
                <p className="offer-description mb-4 text-lg">
                  Join our exciting primary school programs and give your child
                  the best start! Our curriculum is designed to nurture young
                  minds and foster a love for learning.
                </p>
              </div>
            </div>
            <div className="offer-box slide-in max-w-[350px] z-10 bg-orange-500 flex justify-center items-center text-white p-4 h-[256px] rounded-lg mr-0 lg:mr-10 mb-4 lg:mb-0 lg:min-h-[300px] shadow-lg">
              <div className="contant">
                <h3 className="offer-title text-2xl font-bold mb-2">
                  Summer Camp
                </h3>
                <p className="offer-description mb-4 text-lg">
                  Exciting summer camps full of fun activities and learning
                  experiences. From arts and crafts to outdoor adventures, our
                  camps provide a safe and enriching environment.
                </p>
              </div>
            </div>
            <div className="offer-box slide-in max-w-[350px] z-10 bg-blue-500 flex justify-center items-center text-white p-4 h-[256px] rounded-lg mr-0 lg:mr-10 mb-4 lg:mb-0 lg:min-h-[300px] shadow-lg">
              <div className="contant">
                <h3 className="offer-title text-2xl font-bold mb-2">
                  After School Programs
                </h3>
                <p className="offer-description mb-4 text-lg">
                  Engaging after school programs that help children grow and
                  develop new skills. Our programs offer various activities,
                  ensuring your child has a productive time.
                </p>
              </div>
            </div>
          </div>

          <div className="offer-description  mb-12">
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="offer-item slide-in ">
              <FaMusic className="offer-icon text-5xl text-green-500 mb-4" />
              <h4 className="offer-item-title text-lg font-bold mb-2">
                Music Class
              </h4>
              <p className="offer-item-description">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            <div className="offer-item slide-in  flex flex-col space-y-4 p-2">
              <FaCalculator className="offer-icon text-5xl text-orange-500 mb-4" />
              <h4 className="offer-item-title text-lg font-bold mb-2">
                Math Class
              </h4>
              <p className="offer-item-description">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            <div className="offer-item slide-in flex flex-col space-y-4 p-2">
              <FaBookReader className="offer-icon text-5xl text-blue-500 mb-4" />
              <h4 className="offer-item-title text-lg font-bold mb-2">
                English Class
              </h4>
              <p className="offer-item-description">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            <div className="offer-item slide-in flex flex-col space-y-4 p-2">
              <FaRegBookmark className="offer-icon text-5xl text-green-500 mb-4" />
              <h4 className="offer-item-title text-lg font-bold mb-2">
                Reading for Kids
              </h4>
              <p className="offer-item-description">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            <div className="offer-item slide-in flex flex-col space-y-4 p-2">
              <FaHistory className="offer-icon text-5xl text-orange-500 mb-4" />
              <h4 className="offer-item-title text-lg font-bold mb-2">
                History Class
              </h4>
              <p className="offer-item-description">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            <div className="offer-item slide-in flex flex-col space-y-4 p-2">
              <FaRunning className="offer-icon text-5xl text-blue-500 mb-4" />
              <h4 className="offer-item-title text-lg font-bold mb-2">
                Active Class
              </h4>
              <p className="offer-item-description">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide2;
