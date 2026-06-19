import "./Layout.css" //Interna style
import data from "./data_sample"

function App() {
  return (
    <div className="container">
      <div className="row" style={{ marginBottom: "10px" }}> {/* Interna style */}
        {/* Header row */}
        <div className="col col-12 col-sm-6">Column 1</div>
        <div className="col col-12 col-sm-6">Column 2</div>
      </div>

      <div className="row" style={{ marginBottom: "10px" }}> {/* Interna style */}
        {/* Menu row*/}
        <div className="col">Menu</div>
      </div>

      {/* Content row */}
      <div className="row" style={{ marginBottom: "10px" }}>
        <div className=" col-md-3 col-lg-2 d-none d-md-block">
          <h3>Category</h3>
          {data?.categories?.map(c => (
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value={c.id} id="checkItem" />
              <label className="form-check-label" for="checkItem">{c.name}</label>
            </div>
          ))}
          <hr />
          <h3>Brand</h3>
          {data?.brands?.map(b => (
            <div className="form-check">
              <input className="form-check-input" type="radio" value={b.id} id="checkItem" name="rbBrand" />
              <label className="form-check-label" for="checkItem">{b.name}</label>
            </div>
          ))}
        </div>
        <div className=" col-12 col-md-6 col-lg-8">
          <h3>Product list</h3>
          <table className="table table-hover table-striped">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Instock</th>
              </tr>
            </thead>
            <tbody>
              {
                data?.products?.map(p => (
                  <tr key={p.id}>
                    <td>{p?.id}</td>
                    <td>{p?.name}</td>
                    <td>{p?.price}</td>
                    <td>{p?.inStock}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          <hr />
          <h3>Sale-off</h3>
          <div className="container-fluid">
            <div className="row">
              {
                data?.saleOff?.map(s => (
                  <div className="col col-12 col-sm-6 col-md-4 col-lg-3" style={{ marginBottom: "10px", padding: "5px", border: "none" }}
                    key={s.id}>
                    <div className="card" style={{ width: "100%", border: "1px solid gray" }}>
                      <img src="images/anh.jpg" className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{s.pName}</h5>
                        <a href="#" className="btn btn-primary">Add Cart</a>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <h3>Feedback form</h3>
          <form>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="text" className="form-control" placeholder="Enter your email" />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone number</label>
              <input type="text" className="form-control" placeholder="Input phone number" />
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ marginRight: "10px" }}>Gender</label>
              <div className="form-check form-check-inline">
                <input type="radio" className="form-check-input" value="male" id="rbMale" name="rbGender"></input>
                <label className="form-check-label" for="rbMale">Male</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="radio" className="form-check-input" value="female" id="rbFemale" name="rbGender"></input>
                <label className="form-check-label" for="rbFemale">Female</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="radio" className="form-check-input" value="other" id="rbOther" name="rbGender"></input>
                <label className="form-check-label" for="rbOther">Other</label>
              </div>
            </div>

            <div className="mb-3">
              <label classname="form-label"> City</label>
              <select className="form-select">
                <option selected>------Choice a city</option>
                <option value="Ha Noi">Hà Nội</option>
                <option value="DaNang">Đà Nẵng</option>
                <option value="TPHCM">TP HCM</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Address</label>
              <textarea type="text" className="form-control" placeholder="Input an address" rows={3}> </textarea>
            </div>

            <div className="mb-3">
              <label className="form-label" style={{ marginRight: "10px" }}>Favourites</label>
              <div className="form-check form-check-inline">
                <input type="checkbox" className="form-check-input" value="football" defaultChecked ></input>
                <label className="form-check-label">Football</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="checkbox" className="form-check-input" value="Pickaball" defaultChecked ></input>
                <label className="form-check-label">Pickaball</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="checkbox" className="form-check-input" value="Pickaball" defaultChecked ></input>
                <label className="form-check-label">Pickaball</label>
              </div>
            </div>
            <div className="mb-3">
              <input type='button' value='Send feedback' className="btn btn-success"></input>
            </div>

          </form>
        </div>
        <div className=" col-md-3 col-lg-2 d-none d-md-block">Right</div>
      </div>

      {/* Footer row */}
      <div className="row">
        <div className="col col-12 col-md-6 col-lg-3">Column 1</div>
        <div className="col col-12 col-md-6 col-lg-3">Column 2</div>
        <div className="col col-12 col-md-6 col-lg-3">Column 3</div>
        <div className="col col-12 col-md-6 col-lg-3">Column 4</div>
      </div>
    </div>
  );
}

export default App;
