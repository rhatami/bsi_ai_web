import article from "../assets/article.png";
import news from "../assets/news.png";
import newsImage from "../assets/news-image.jpg";

function Blog() {
  return (
    <>
      <div className="hstack gap-3">
        <div className="p-2 blog-article">
          <div className="vstack gap-1">
            <div className="p-2">
              <div className="hstack gap-3">
                <div className="p-2">
                  <div className="card article">
                    <div className="article-header">
                      <img
                        src={article}
                        className="card-img-top article-icon"
                      />
                      <span className="article-title header">
                        داده کاوی چیست؟
                      </span>
                    </div>
                    <div className="card-body text-center">
                      <p className="card-text article-summary">
                        داده‌کاوی به معنای استخراج اطلاعات نهان، الگوها و روابط
                        مشخص در حجم زیادی از داده‌ها در یک یا چند بانک اطلاعاتی
                        بزرگ است ....
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  <div className="card article">
                    <div className="article-header">
                      <img
                        src={article}
                        className="card-img-top article-icon"
                      />
                      <span className="article-title header">
                        {" "}
                        تحلیل فضای وب
                      </span>
                    </div>
                    <div className="card-body text-center">
                      <p className="card-text article-summary">
                        افراد و گروه‌های عضو شبکه های اجتماعی و وابستگی های آن
                        ها، شبکه ای از گره‌ها و یال ها را تشکیل می‌دهند که
                        می‌توان با آنالیز شبکه، آن‌ها را تحلیل و بررسی کرد ....
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-2">
              <div className="hstack gap-3">
                <div className="p-2">
                  <div className="card article">
                    <div className="article-header">
                      <img
                        src={article}
                        className="card-img-top article-icon"
                      />
                      <span className="article-title header">
                        متن کاوی چیست؟
                      </span>
                    </div>
                    <div className="card-body text-center">
                      <p className="card-text article-summary">
                        متن‌کاوی، داده‌کاوی‌ و آنالیزی است که روی متن انجام شود
                        و منظور از آن استخراج اطلاعات با کیفیت از متن و فهم
                        الگوها و گرایش‌هاست ....
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  <div className="card article">
                    <div className="article-header">
                      <img
                        src={article}
                        className="card-img-top article-icon"
                      />
                      <span className="article-title header">
                        هوش تجاری چیست؟
                      </span>
                    </div>
                    <div className="card-body text-center">
                      <p className="card-text article-summary">
                        هوش کسب‌وکار و یا هوش تجاری، مجموعه‌ای از نظریات،
                        روش‌ها، فرایندها، معماری‌ها و فناوری‌هایی است که برای
                        تبدیل داده خام به اطلاعات مفید و معنادار استفاده می‌شود
                        ....
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 blog-news">
          <div className="card news">
            <div className="news-header">
              <img src={news} className="card-img-top news-icon" />
              <span className="news-title header">
                بازدید مدیرعامل بانک صادرات ایران از شرکت داده پردازی سپهر
              </span>
            </div>
            <div className="card-body text-center">
              <img className="news-image" src={newsImage} />
              <p className="card-text news-body">
                مدیر عامل بانک صادرات ایران در هفته اخیر جهت بازدید از پیشرفت
                های صورت گرفته در شرکت داده پردازی سپهر ، از این شرکت بازدید کرد
                ....
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
