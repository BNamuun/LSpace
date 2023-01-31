export function GStormPred() {
  const styles = {
    bagckGround: {
      backgroundColor: "#00425A",
    },
    inputText: {
      padding: "10px",
    },
    main: {
      backgroundColor: "white",
      padding: "5%",
      //   fontFamily: 'Roboto', sansSerif;
    },
  };
  return (
    <>
      <div className="bagckGround" style={styles.bagckGround}>
        <div className="container main" style={styles.main}>
          <h1>Геосоронзон шуурга</h1>
          <iframe
            title="myfram"
            src="https://giphy.com/embed/l2Sq7UcchYPqoR3vq"
            width="480"
            height="269"
          />
          <p>
            <a href="https://giphy.com/gifs/nasa-space-l2Sq7UcchYPqoR3vq"></a>
          </p>
          <p>
            GEOMAGNETIC STORMS A geomagnetic storm is a major disturbance of
            Earth's magnetosphere that occurs when there is a very efficient
            exchange of energy from the solar wind into the space environment
            surrounding Earth. These storms result from variations in the solar
            wind that produces major changes in the currents, plasmas, and
            fields in Earth’s magnetosphere.
            <br />
            <br />
            The solar wind conditions that are effective for creating
            geomagnetic storms are sustained (for several to many hours) periods
            of high-speed solar wind, and most importantly, a southward directed
            solar wind magnetic field (opposite the direction of Earth’s field)
            at the dayside of the magnetosphere. This condition is effective for
            transferring energy from the solar wind into Earth’s magnetosphere.
            The largest storms that result from these conditions are associated
            with solar coronal mass ejections (CMEs) where a billion tons or so
            of plasma from the sun, with its embedded magnetic field, arrives at
            Earth. CMEs typically take several days to arrive at Earth, but have
            been observed, for some of the most intense storms, to arrive in as
            short as 18 hours.
            <br />
            <br />
            Another solar wind disturbance that creates conditions favorable to
            geomagnetic storms is a high-speed solar wind stream (HSS). HSSs
            plow into the slower solar wind in front and create co-rotating
            interaction regions, or CIRs. These regions are often related to
            geomagnetic storms that while less intense than CME storms, often
            can deposit more energy in Earth’s magnetosphere over a longer
            interval. Storms also result in intense currents in the
            magnetosphere, changes in the radiation belts, and changes in the
            ionosphere, including heating the ionosphere and upper atmosphere
            region called the thermosphere. In space, a ring of westward current
            around Earth produces magnetic disturbances on the ground. A measure
            of this current, the disturbance storm time (Dst) index, has been
            used historically to characterize the size of a geomagnetic storm.
            In addition, there are currents produced in the magnetosphere that
            follow the magnetic field, called field-aligned currents, and these
            connect to intense currents in the auroral ionosphere.
            <br />
            <br />
            These auroral currents, called the auroral electrojets, also produce
            large magnetic disturbances. Together, all of these currents, and
            the magnetic deviations they produce on the ground, are used to
            generate a planetary geomagnetic disturbance index called Kp. This
            index is the basis for one of the three NOAA Space Weather Scales,
            the Geomagnetic Storm, or G-Scale, that is used to describe space
            weather that can disrupt systems on Earth. During storms, the
            currents in the ionosphere, as well as the energetic particles that
            precipitate into the ionosphere add energy in the form of heat that
            can increase the density and distribution of density in the upper
            atmosphere, causing extra drag on satellites in low-earth orbit. The
            local heating also creates strong horizontal variations in the in
            the ionospheric density that can modify the path of radio signals
            and create errors in the positioning information provided by GPS.
            While the storms create beautiful aurora, they also can disrupt
            navigation systems such as the Global Navigation Satellite System
            (GNSS) and create harmful geomagnetic induced currents (GICs) in the
            power grid and pipelines.
          </p>
        </div>
      </div>
    </>
  );
}
