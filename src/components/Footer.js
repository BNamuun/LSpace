import React from "react";
import Flag from "react-world-flags";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtnGroup,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <MDBFooter
      bgColor="dark"
      className="text-center text-light pt-2 text-lg-start text-muted"
    >
      <section className="text-light">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon color="secondary" icon="gem" className="me-3" />
                Space Mongolia
              </h6>
              <p>lorem flakjdlfk djfkd kf jl</p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <Link to="#!" as={Link} className="text-reset">
                  Angular
                </Link>
              </p>
              <p>
                <Link to="#!" as={Link} className="text-reset">
                  Angular
                </Link>
              </p>
              <p>
                <Link to="#!" as={Link} className="text-reset">
                  Angular
                </Link>
              </p>
              <p>
                <Link to="#!" as={Link} className="text-reset">
                  Angular
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <Link to="#!" as={Link} className="text-reset">
                  Angular
                </Link>
              </p>
              <p>
                <Link to="#!" as={Link} className="text-reset">
                  Angular
                </Link>
              </p>
              <p>
                <Link to="#!" as={Link} className="text-reset">
                  Angular
                </Link>
              </p>
              <p>
                <Link to="#!" as={Link} className="text-reset">
                  Angular
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Холбоо барих</h6>
              <p>
                <MDBIcon color="secondary" icon="home" className="me-2" />
                <Flag
                  className="pe-2"
                  code={496}
                  style={{ width: "15%" }}
                />{" "}
                Mongolia, Ulaan-baatar
              </p>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon color="secondary" icon="phone" className="me-3" /> + 01
                234 567 88
              </p>
              <p>
                <MDBIcon color="secondary" icon="print" className="me-3" /> + 01
                234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023:
        <a className="text-reset fw-bold ps-2" href="https://mdbootstrap.com/">
          SpaceMongolia.com
        </a>
      </div>
    </MDBFooter>
  );
}
