import ghs from "../images/ghs.png";

export default function Home() {
  return (
    <>
      <div className="home-section">
        <div className="col">
          <h1 id="type">Developer & Designer</h1>
          <img className="ghs" src={ghs} alt="Ghs Julian"/>
        </div>
        <div className="col">
          <p>
            I am an expert web developer and designer with 2 years of
            professional experience in the field . I can easily create a website
            for you and your company that is in line with your brand guide and
            optimized for SEO !
          </p>
          <div className="flex">
            <a id="hire" href="/home">
              Hire Me
            </a>
            <a id="cv" href="/about">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
