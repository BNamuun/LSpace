import { KpIndex } from "../Charts/Kp-index";

export function KpInd() {
  const styles = {
    bagckGround: {
      backgroundColor: "#00425A",
    },
    inputText: {
      padding: "5% 0",
    },
    main: {
      backgroundColor: "white",
      padding: "5%",
      //   fontFamily: 'Roboto', sansSerif;
    },
  };
  return (
    <div className="bagckGround" style={styles.bagckGround}>
      <div className="container">
        <div className="main" style={styles.main}>
          <h1> Кp индекс үзүүлэлт</h1>
          <br />
          <div className="d-flex justify-content-center align-items-center col-lg-9 col-sm-6 col-6">
            <KpIndex />
          </div>
          <p style={styles.inputText}>
            The K-index quantifies disturbances in the horizontal component of
            earth's magnetic field with an integer in the range 0-9 with 1 being
            calm and 5 or more indicating a geomagnetic storm. It is derived
            from the maximum fluctuations of horizontal components observed on a
            magnetometer during a three-hour interval. The planetary
            3-hour-range index Kp is the mean standardized K-index from 13
            geomagnetic observatories between 44 degrees and 60 degrees northern
            or southern geomagnetic latitude. The label 'K' comes from the
            German word 'Kennziffer' meaning 'characteristic digit.' The K-index
            was introduced by Julius Bartels in 1938. SWPC has used the K-index
            since the forecast center began operations. For Further information
            about the K-index, SWPC provides a short summary of it's
            characteristics, and please visit the official Kp index web
            page(link is external) at the German Research Centre for Geosciences
            (GFZ).
          </p>
        </div>
      </div>
    </div>
  );
}
