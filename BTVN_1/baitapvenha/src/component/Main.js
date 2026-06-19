import ProductList from "./ProductList";

const carImage = "/assets/car-card.png";

function Main() {
  return (
    <main>
      <section id="exercise-6" className="exercise-anchor">
        <div id="templateCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#templateCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#templateCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#templateCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            {[1, 2, 3].map((slide) => (
              <div className={`carousel-item ${slide === 1 ? "active" : ""}`} key={slide}>
                <div className="hero-slide d-flex align-items-center justify-content-center">
                  <div className="hero-placeholder">1920 x 530</div>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#templateCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#templateCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <ProductList />
      </section>

      <section id="exercise-7" className="cards-demo exercise-anchor">
        <div className="container-fluid px-0">
          <h1>Cards Columns</h1>
          <div className="row g-4 mx-0">
            <div className="col-12 col-lg-4">
              <div className="color-card bg-primary">
                <img src={carImage} alt="Car" />
                <p>Some text inside the first card</p>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="color-card bg-warning">
                <img src={carImage} alt="Car" />
                <p>Some text inside the first card</p>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="color-card bg-danger">
                <img src={carImage} alt="Car" />
                <p>Some text inside the first card</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="exercise-8" className="ticket-demo exercise-anchor">
        <div className="container-fluid">
          <div className="row g-5">
            <div className="col-12 col-xl-6">
              <div className="ticket-panel">
                <div className="ticket-alert">&times;</div>
                <h1>Form đặt vé máy bay</h1>

                <form>
                  <div className="mb-4">
                    <label htmlFor="fullName" className="form-label">Họ tên</label>
                    <div className="input-group input-group-lg">
                      <span className="input-group-text">@</span>
                      <input id="fullName" className="form-control" type="text" placeholder="Họ tên" />
                      <span className="input-group-text">vnđ</span>
                    </div>
                    <div className="form-text">Phải nhập 5 ký tự, in hoa...</div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="address" className="form-label">Địa chỉ</label>
                    <input id="address" className="form-control form-control-lg" type="text" />
                    <div className="form-text">Phải nhập 5 ký tự, in hoa...</div>
                  </div>

                  <div className="row g-4 mb-4">
                    <div className="col-12 col-md-6">
                      <label htmlFor="fromCity" className="form-label">Đi từ</label>
                      <select id="fromCity" className="form-select form-select-lg" defaultValue="Hà nội">
                        <option>Hà nội</option>
                        <option>Đà Nẵng</option>
                        <option>TP. Hồ Chí Minh</option>
                      </select>
                    </div>
                    <div className="col-12 col-md-6">
                      <label htmlFor="toCity" className="form-label">Đến</label>
                      <select id="toCity" className="form-select form-select-lg" defaultValue="Hà nội">
                        <option>Hà nội</option>
                        <option>Đà Nẵng</option>
                        <option>TP. Hồ Chí Minh</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label d-block">Chọn chiều đi (Khứ hồi)</label>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="goTrip" />
                      <label className="form-check-label" htmlFor="goTrip">Đi</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="returnTrip" />
                      <label className="form-check-label" htmlFor="returnTrip">Về</label>
                    </div>
                  </div>

                  <button className="btn btn-primary btn-lg w-100" type="submit">Đặt vé</button>
                </form>
              </div>
            </div>

            <div className="col-12 col-xl-6">
              <div className="ticket-grid">
                <div className="grid-band grid-band-top"><span className="badge-demo">12</span></div>
                <div className="grid-band grid-band-middle"><span className="badge-demo">12</span></div>
                <div className="grid-band grid-band-large"><span className="badge-demo">12</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
