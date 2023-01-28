import "../components/moon.css";
export function MoonPart() {
  return (
    <>
      <div className="background-container">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png"
          alt=""
        />
        <div className="stars" />
        <div className="twinkling" />
        <div className="clouds" />
      </div>
    </>
  );
}
