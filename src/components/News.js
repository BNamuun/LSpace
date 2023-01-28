import Galaxy from "../images/Galaxy.jpg";
import austro from "../images/Woman_austro.jpg";
import aurora_mountain from "../images/aurora_mountain.jpg";
import Eclipse from "../images/Eclipse.jpg";
import Moon from "../images/moon.jpg";
import Miss from "../images/MISS.jpg";
export function News() {
  return (
    <div className="container px-4 py-5" id="custom-cards">
      <h2 className="pb-2 border-bottom">Сонирхолтой мэдээ</h2>
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{
              backgroundImage: `url(${Galaxy})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                Галактик
              </h3>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img
                    src={Galaxy}
                    alt="Bootstrap"
                    width={32}
                    height={32}
                    className="rounded-circle border border-white"
                  />
                </li>
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em">
                    <use xlinkHref="#geo-fill" />
                  </svg>
                  <small>Earth</small>
                </li>
                <li className="d-flex align-items-center">
                  <svg className="bi me-2" width="1em" height="1em">
                    <use xlinkHref="#calendar3" />
                  </svg>
                  <small>3d</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{
              backgroundImage: `url(${austro})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-dark text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                Сансар огторгуй
              </h3>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img
                    src={austro}
                    alt="Bootstrap"
                    width={32}
                    height={32}
                    className="rounded-circle border border-white"
                  />
                </li>
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em">
                    <use xlinkHref="#geo-fill" />
                  </svg>
                  <small>Earth</small>
                </li>
                <li className="d-flex align-items-center">
                  <svg className="bi me-2" width="1em" height="1em">
                    <use xlinkHref="#calendar3" />
                  </svg>
                  <small>4d</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-white rounded-4 shadow-lg"
            style={{
              backgroundImage: `url(${aurora_mountain})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                Туйлын туяа
              </h3>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img
                    src={aurora_mountain}
                    alt="Bootstrap"
                    width={32}
                    height={32}
                    className="rounded-circle border border-white"
                  />
                </li>
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em">
                    <use xlinkHref="#geo-fill" />
                  </svg>
                  <small>Aurora</small>
                </li>
                <li className="d-flex align-items-center">
                  <svg className="bi me-2" width="1em" height="1em">
                    <use xlinkHref="#calendar3" />
                  </svg>
                  <small>5d</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{
              backgroundImage: `url(${Eclipse})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Хиртэлт</h3>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img
                    src={Eclipse}
                    alt="Bootstrap"
                    width={32}
                    height={32}
                    className="rounded-circle border border-white"
                  />
                </li>
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em">
                    <use xlinkHref="#geo-fill" />
                  </svg>
                  <small>Earth</small>
                </li>
                <li className="d-flex align-items-center">
                  <svg className="bi me-2" width="1em" height="1em">
                    <use xlinkHref="#calendar3" />
                  </svg>
                  <small>3d</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{
              backgroundImage: `url(${Moon})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Дагуул</h3>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img
                    src={Moon}
                    alt="Bootstrap"
                    width={32}
                    height={32}
                    className="rounded-circle border border-white"
                  />
                </li>
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em">
                    <use xlinkHref="#geo-fill" />
                  </svg>
                  <small>Moon</small>
                </li>
                <li className="d-flex align-items-center">
                  <svg className="bi me-2" width="1em" height="1em">
                    <use xlinkHref="#calendar3" />
                  </svg>
                  <small>4d</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-white rounded-4 shadow-lg"
            style={{
              backgroundImage: `url(${Miss})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                Сансрын хөлөг
              </h3>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img
                    src={Miss}
                    alt="Bootstrap"
                    width={32}
                    height={32}
                    className="rounded-circle border border-white"
                  />
                </li>
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em">
                    <use xlinkHref="#geo-fill" />
                  </svg>
                  <small>Spaceship</small>
                </li>
                <li className="d-flex align-items-center">
                  <svg className="bi me-2" width="1em" height="1em">
                    <use xlinkHref="#calendar3" />
                  </svg>
                  <small>5d</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
