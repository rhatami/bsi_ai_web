import intro from "../assets/First.png";

function Intro() {
  return (
    <div className="intro text-right">
      <div className="row intro">
        <div className="col intro-text">
          <p className="intro-header text-center header">
            شرکت داده پردازی سپهر
          </p>
          <p>
            <p>
              شرکت داده پردازی سپهر با برخورداری از دانش به‌روز داده کاوی و
              ارتباط مستمر با اساتید و گروه‌های علمی دانشگاهی، بستری کارا برای
              طراحی سکوی داده‌کاوی در حوزه‌های مختلف تحلیل کلان‌داده (Big Data)،
              بصری‌سازی داده‌ها، پیش‌بینی مبتنی‌بر داده‌ها و سایر رویکردهای
              تحلیل داده فراهم ساخته است.
            </p>
            <p>
              ما معتقدیم که تحلیل داده و پیاده‌سازی الگوریتم‌های داده‌کاوی و
              طراحی جریان داده در هر سازمان، نیازمند درک صحیح فرآیندها و کسب و
              کار آن مجموعه و انطباق بسته‌های فنی و تکنولوژیکی به‌روز با آنها
              است.
            </p>
            <p>
              در همین راستا، داده پردازان سپهر فقط جنبه فناوری داده‌کاوی را
              درنظر نگرفته و با تیم دانشگاهی - فنی خود به دنبال کشف دانش در
              سازمان خواهد بود.
            </p>
          </p>
        </div>
        <div className="col">
          <img src={intro} className="intro-image" />
        </div>
      </div>
    </div>
  );
}

export default Intro;
