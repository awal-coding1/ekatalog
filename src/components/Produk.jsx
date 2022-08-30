import { BrowserRouter as Router, Link } from "react-router-dom";
const Produk = (props) => {
  return (
    <>
      {props.data.map((item) => {
        return (
          <div key={item.id} className="col-md-3">
            <div className="card produkCard mb-3 p-3">
              <img
                src={item.url}
                alt={item.title}
                className="mb-3 rounded shadow"
              />
              <div className="card-body text-center">
                <h5 className="card-title ">Produk :{item.id}</h5>
                <p className="card-text">{item.title}</p>
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <Link to={`/detail/${item.id}`} className="btn btn-primary">
                      {" "}
                      Detail
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Produk;
