import "../../style/herosection.css";
function HeroSection(props) {
  return (
    <div className="hero">
      <h1 className="heading">{props.title}</h1>
    </div>
  );
}
export default HeroSection;
