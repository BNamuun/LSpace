import videoBg from "../images/Mars - 65129.mp4";
export function VideoBackground() {
  return (
    <div>
      <video src={videoBg} autoPlay loop muted />
    </div>
  );
}
