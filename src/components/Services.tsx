import dataWarehouse from "../assets/dw.png";
import dashboard from "../assets/dashboard.png";
import vr from "../assets/vr.png";
import vdr from "../assets/vdr.png";
import da from "../assets/da.png";
import ss from "../assets/ss.png";

function Services() {
  return (
    <>
      <div className="row">
        <div className="col">
          <div className="card">
            <img src={dataWarehouse} className="card-img-top card-image" />
            <div className="card-body text-center">
              <h5 className="service-title header">
                ذخیره‌سازی و پردازش کلان‌داده‌ها
              </h5>
              <p className="card-text">
                ارائه خدمات ذخیره‌سازی، نگهداری، جستجو و پردازش کلان‌داده‌ها بر
                بستر سکوهای ذخیره‌سازی و پردازش کلان‌داده
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={da} className="card-img-top card-image" />
            <div className="card-body text-center">
              <h5 className="service-title header">
                {" "}
                خدمات هوشمند استخراج اطلاعات
              </h5>
              <p className="card-text">
                ارائه خدمات هوشمند استخراج اطلاعات نهان و الگوها و همچنین روابط
                میان از میان حجم زیادی از اعم از فضای مجازی و …
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={ss} className="card-img-top card-image" />
            <div className="card-body text-center">
              <h5 className="service-title header">تولید سامانه‌های هوشمند</h5>
              <p className="card-text">
                تولید سامانه‌های هوشمند پردازش و تحلیل داده‌های غیرساختاریافته
                مانند داده‌های متنی، تصاویر، ویدئو و صوت
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="card">
            <img src={vr} className="card-img-top card-image" />
            <div className="card-body text-center">
              <h5 className="service-title header">پردازش و تحلیل گفتار</h5>
              <p className="card-text">
                ارائه سرویس‌های پردازش و تحلیل گفتار فارسی و انگلیسی مانند تبدیل
                گفتار به متن (بازشناسی گفتار)، جستجو در محتوا و …
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={vdr} className="card-img-top card-image" />
            <div className="card-body text-center">
              <h5 className="service-title header">پردازش تصویر و ویدئو</h5>
              <p className="card-text">
                ارائه سرویس‌های پردازش و تحلیل تصاویر و ویدئو در سطح چهره مانند
                تشخیص چهره، تصدیق چهره، تعیین هویت، شناسایی سن
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={dashboard} className="card-img-top card-image" />
            <div className="card-body text-center">
              <h5 className="service-title header">
                {" "}
                طراحی داشبوردهای اختصاصی
              </h5>
              <p className="card-text">
                اطراحی داشبوردهای اختصاصی به منظور جمع‌آوری مجموعه‌ای از نظریات،
                روش‌ها، فرایندها، معماری‌ها و فناوری‌ها و…
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
