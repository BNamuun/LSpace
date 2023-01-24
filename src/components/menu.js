import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faSatellite,
  faCloudSunRain,
  faBookAtlas,
  faCompass,
} from "@fortawesome/free-solid-svg-icons";

import ListGroup from "react-bootstrap/ListGroup";
export function Menu() {
  return (
    <div className="TableP d-flex flex-wrap">
      <div className="p-1 p-md-5 List glow col-lg-6 col-md-12 col-sm-12 col-12">
        <h4>
          {" "}
          <FontAwesomeIcon icon={faSatellite} /> Сансар судлал
        </h4>
        <ListGroup
          className="ListBody col-lg-6 col-md-12 col-sm-12 w-100"
          as="ul"
        >
          <ListGroup.Item as="li">
            Соронзон шуургыг урьдчилан тандах нь
          </ListGroup.Item>
          <ListGroup.Item as="li">Геосоронзон индекс</ListGroup.Item>
          <ListGroup.Item className="featureList" to="/cirList" as={Link}>
            CIR-с үүдэлтэй соронзон шуурганы каталог
          </ListGroup.Item>
          <ListGroup.Item className="featureList" to="/cmeList" as={Link}>
            CME-с үүдэлтэй соронзон шуурганы каталог
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div className=" p-1 p-md-5 List glow col-lg-6 col-md-12 col-sm-12 col-12">
        <h4>
          {" "}
          <FontAwesomeIcon icon={faCloudSunRain} /> Сансарын цаг агаар
        </h4>
        <ListGroup
          className="ListBody col-lg-6 col-md-12 col-sm-12 w-100"
          as="ul"
        >
          <ListGroup.Item as="li">Сансарын цаг агаарын тухай</ListGroup.Item>
          <ListGroup.Item as="li">Урьдчилан тандалт</ListGroup.Item>
          <ListGroup.Item as="li">Хиймэл дагуул</ListGroup.Item>
          <ListGroup.Item as="li">Нар-Дэлхийн холбоо</ListGroup.Item>
        </ListGroup>
      </div>
      <div className="p-1 p-md-5 List glow col-lg-6 col-md-12 col-sm-12 col-12">
        <h4>
          {" "}
          <FontAwesomeIcon icon={faCompass} /> Соронзон станц
        </h4>
        <ListGroup
          className="ListBody col-lg-6 col-md-12 col-sm-12 w-100"
          as="ul"
        >
          <ListGroup.Item as="li">Хүрэлтогоот соронзон оргил</ListGroup.Item>
          <ListGroup.Item as="li">Мандалговь</ListGroup.Item>
          <ListGroup.Item as="li">Говь-Алтай</ListGroup.Item>
          <ListGroup.Item as="li">Ховд</ListGroup.Item>
        </ListGroup>
      </div>
      <div className="p-1 p-md-5 List glow col-lg-6 col-md-12 col-sm-12 col-12">
        <h4>
          {" "}
          <FontAwesomeIcon icon={faBookAtlas} /> Судалгаа
        </h4>
        <ListGroup
          className="ListBody col-lg-6 col-md-12 col-sm-12 w-100"
          as="ul"
        >
          <ListGroup.Item as="li">Сансар судлал (Space Science)</ListGroup.Item>
          <ListGroup.Item as="li">
            Геосоронзон пульсац (Geomagnetic pulsation)
          </ListGroup.Item>
          <ListGroup.Item as="li">Электроны нийт агууламж (TEC)</ListGroup.Item>
          <ListGroup.Item as="li">Газар хөдлөлт</ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
}
