import img from "../images/auroraImg.jpg";
export function AuroraN() {
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
    },
  };
  return (
    <>
      <div className="bagckGround" style={styles.bagckGround}>
        <div className="container main" style={styles.main}>
          <h1> Туйлын туяа</h1>
          <img src={img} style={{ width: "50%" }} alt="aurora" />
          <p style={{ marginTop: "5%" }}>
            The Aurora Borealis (Northern Lights) and Aurora Australis (Southern
            Lights) are the result of electrons colliding with the upper reaches
            of Earth’s atmosphere. (Protons cause faint and diffuse aurora,
            usually not easily visible to the human eye.) The electrons are
            energized through acceleration processes in the downwind tail (night
            side) of the magnetosphere and at lower altitudes along auroral
            field lines. The accelerated electrons follow the magnetic field of
            Earth down to the Polar Regions where they collide with oxygen and
            nitrogen atoms and molecules in Earth’s upper atmosphere. In these
            collisions, the electrons transfer their energy to the atmosphere
            thus exciting the atoms and molecules to higher energy states. When
            they relax back down to lower energy states, they release their
            energy in the form of light. This is similar to how a neon light
            works. The aurora typically forms 80 to 500 km above Earth’s
            surface.
          </p>
          <p>
            Earth’s magnetic field guides the electrons such that the aurora
            forms two ovals approximately centered at the magnetic poles. During
            major geomagnetic storms these ovals expand away from the poles such
            that aurora can be seen over most of the United States. Aurora comes
            in several different shapes. Often the auroral forms are made of
            many tall rays that look much like a curtain made of folds of cloth.
            During the evening, these rays can form arcs that stretch from
            horizon to horizon. Late in the evening, near midnight, the arcs
            often begin to twist and sway, just as if a wind were blowing on the
            curtains of light. At some point, the arcs may expand to fill the
            whole sky, moving rapidly and becoming very bright. This is the peak
            of what is called an auroral substorm.
          </p>
          <p>
            Then in the early morning the auroral forms can take on a more
            cloud-like appearance. These diffuse patches often blink on and off
            repeatedly for hours, then they disappear as the sun rises in the
            east. The best place to observe the aurora is under an oval shaped
            region between the north and south latitudes of about 60 and 75
            degrees. At these polar latitudes, the aurora can be observed more
            than half of the nights of a given year.
          </p>
          <p>
            Then in the early morning the auroral forms can take on a more
            cloud-like appearance. These diffuse patches often blink on and off
            repeatedly for hours, then they disappear as the sun rises in the
            east. The best place to observe the aurora is under an oval shaped
            region between the north and south latitudes of about 60 and 75
            degrees.
          </p>
        </div>
      </div>
    </>
  );
}
