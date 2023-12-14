import "./Counter.scss";
import CountUp, { useCountUp } from "react-countup";
import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { SlCalender } from "react-icons/sl";
import { TiTick } from "react-icons/ti";
import { MdOutlineWatchLater } from "react-icons/md";
import { LuUsers } from "react-icons/lu";

function Counter() {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px", // Adjust the rootMargin based on your design
  });
  const [counted, setCounted] = useState(false);

  const counterRef = useRef(null);

  useCountUp({
    ref: counterRef,
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  useEffect(() => {
    if (inView && !counted) {
      setCounted(true);
    }
  }, [inView, counted]);
  return (
    <div className="container">
      <div className="counter">
        <div className="row space" ref={inViewRef}>
          <div className="col-sm-3 cont">
            <div className="">
              <h2>
                <SlCalender />
              </h2>
              <CountUp
                end={2012}
                redraw={true}
                decimals={0}
                decimal="0"
                separator=""
                onEnd={() => console.log("Counting completed")}
              />
              <br />

              <h6>Working from</h6>
            </div>
          </div>
          <div className="col-sm-3 cont">
            <div className="">
              <h2>
                <TiTick />
              </h2>
              <CountUp
                end={368}
                redraw={true}
                decimals={0}
                decimal="0"
                separator=""
                onEnd={() => console.log("Counting completed")}
              />
              <br />

              <h6>Project Complete</h6>
            </div>
          </div>
          <div className="col-sm-3 cont">
            <div className="">
              <h2>
                <MdOutlineWatchLater />
              </h2>
              <CountUp
                end={40}
                redraw={true}
                decimals={0}
                decimal="0"
                separator=""
                onEnd={() => console.log("Counting completed")}
              />
              <br />

              <h6>Weekly Working Hours</h6>
            </div>
          </div>
          <div className="col-sm-3 cont">
            <div className="">
              <h2>
                <LuUsers />
              </h2>
              <CountUp
                end={180}
                redraw={true}
                decimals={0}
                decimal="0"
                separator=""
                onEnd={() => console.log("Counting completed")}
              />
              <br />

              <h6>Happy Clints</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
