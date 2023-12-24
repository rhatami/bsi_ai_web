import fr from "../assets/fr.png";
import pfm from "../assets/pfm.png";
import fs from "../assets/fs.png";

function Products() {
  return (
    <>
      <div className="row">
        <div className="col">
          <div className="card product">
            <img src={fr} className="card-img-top product-image" />
            <div className="card-body text-center">
              <h4 className="product-title header">سامانه تشخیص چهره</h4>
              <p className="card-text">
                با استفاده از امکانات این سرویس می توانید ویژگی تشخیص چهره و
                تشخیص هویت افراد بر اساس چهره را در نرم افزارهای خود داشته
                باشید.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card product">
            <img src={pfm} className="card-img-top product-image" />
            <div className="card-body text-center">
              <h4 className="product-title header">
                سامانه مدیریت مالی هوشمند
              </h4>
              <p className="card-text">
                با استفاده از این سرویس می توانید به سادگی و به صورت خودکار
                هزینه ها و درآمد های خود را مدیریت کرده و از گزارشات اختصاصی و
                گرافیکی استفاده کنید.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card product">
            <img src={fs} className="card-img-top product-image p3img" />
            <div className="card-body text-center">
              <h4 className="product-title header">
                سامانه تحلیل صورت های مالی
              </h4>
              <p className="card-text">
                با استفاده از این سرویس می توانید به صورت خودکار صورت های مالی
                خود را تحلیل کرده و نقاط ضعف و قوت آن را پیدا کنید.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
