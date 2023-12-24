import soroush from "../assets/sorush.png";
import eeta from "../assets/eeta.png";
import rubika from "../assets/rubika.png";
import gap from "../assets/gap.png";
import igap from "../assets/igap.png";
import bale from "../assets/bale.png";
import nova from "../assets/nova.png";

function Contact() {
  return (
    <>
      <div className="vstack gap-1">
        <div className="hstack gap-1">
          <div className="p-2 contactform">
            <p className="contactform-title text-center">
              در صورت تمایل، اطلاعات خود را ثبت کنید تا کارشناسان ما در اسرع وقت
              با شما تماس بگیرند.
            </p>
            <div className="contactform-elements">
              <div className="mb-3">
                <label className="form-label contactform-label">
                  نام و نام خانوادگی
                </label>
                <input type="text" className="form-control contactform-input" />
              </div>
              <div className="mb-3">
                <label className="form-label  contactform-label">
                  شماره تماس
                </label>
                <input
                  type="text"
                  className="form-control contactform-input "
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary contactform-submit"
              >
                ثبت اطلاعات
              </button>
            </div>
          </div>
          <div className="p-2 address">
            <p className="address-title  header">اطلاعات تماس</p>
            <p className="address-body">
              آدرس: تهران - خ سمیه - مابین بهار و مفتح - پلاک 85
            </p>
            <p className="address-body">کد پستی : 1571838713</p>
            <p className="address-body">تلفن تماس : 84761-021 </p>
            <p className="address-body">فکس : 41476231-021</p>
            <p className="address-body">ایمیل : info@sepehrdata.ir</p>
          </div>
        </div>
        <div className="p-2">
          <div className="hstack gap-3">
            <div className="p-2 social">
              <p className="social-title  header">
                ما را در شبکه های اجتماعی دنبال کنید
              </p>
              <div className="hstack social-list">
                <div className="p-2 social-item">
                  <img className="social-icon" src={soroush} />
                  <span className="social-address">soroush.ir/bsi</span>
                </div>
                <div className="p-2 social-item">
                  <img className="social-icon" src={rubika} />
                  <span className="social-address">rubika.ir/bsi</span>
                </div>
                <div className="p-2 social-item">
                  <img className="social-icon" src={bale} />
                  <span className="social-address">bale.ir/bsi</span>
                </div>
                <div className="p-2 social-item">
                  <img className="social-icon" src={nova} />
                  <span className="social-address">nova.ir/bsi</span>
                </div>
                <div className="p-2 social-item">
                  <img className="social-icon" src={eeta} />
                  <span className="social-address">eeta.ir/bsi</span>
                </div>
                <div className="p-2 social-item">
                  <img className="social-icon" src={igap} />
                  <span className="social-address">igap.ir/bsi</span>
                </div>
                <div className="p-2 social-item">
                  <img className="social-icon" src={gap} />
                  <span className="social-address">gap.ir/bsi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
