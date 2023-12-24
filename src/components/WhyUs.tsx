import CountUp from "react-countup";
import saderat from "../assets/saderat.png";
import melal from "../assets/melal.png";
import gardeshgari from "../assets/gardeshgari.png";
import ayande from "../assets/ayande.png";
import karafarin from "../assets/karafarin.png";
import eghnovin from "../assets/eghnovin.png";

function WhyUs() {
  return (
    <>
      <div className="row header">
        <div className="col ">
          <div className="card whyus-card">
            <div className="card-body text-center whyus-card-body">
              <CountUp
                start={0}
                end={70}
                duration={1.2}
                className="countup-number"
              />
              <span className="countup-percent">%</span>
              <h5 className="countup-text">کاهش هزینه ها</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card whyus-card">
            <div className="card-body text-center whyus-card-body">
              <span className="countup-number">4.3</span>
              <span className="countup-percent">x</span>
              <h5 className="countup-text">نرخ برگشت سرمایه</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card  whyus-card">
            <div className="card-body text-center whyus-card-body">
              <CountUp
                start={0}
                end={83}
                duration={1.7}
                className="countup-number"
              />
              <span className="countup-percent">%</span>
              <h5 className="countup-text">افزایش سرعت پیاده سازی</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="row customers">
        <div className="vstack gap-1">
          <div className="p-2 customer-header text-center header">
            مشتریان ما
          </div>
          <div className="hstack gap-3 customer-list">
            <img className="p-2 customer-logo" src={eghnovin} />
            <img className="p-2 customer-logo" src={melal} />
            <img className="p-2 customer-logo" src={karafarin} />
            <img className="p-2 customer-logo" src={gardeshgari} />
            <img className="p-2 customer-logo" src={ayande} />
            <img className="p-2 customer-logo" src={saderat} />
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyUs;
