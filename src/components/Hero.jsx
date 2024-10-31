import Image from "next/image";
import img from '@/components/images/my-pic.jpeg';
const Hero = () => {

  return (
    <div className="hero-container">
      {/* <Image src={'/images/my-img.png'} className="profile-img" width={300} height={300} alt="Muhammad Anas Bakkar personal headshot" /> */}
      <Image src={img} className="profile-img" width={300} height={300} alt="Muhammad Anas  personal headshot" />
      <div className="hero-text">
        <h1>Hey, I'm Muhammad Anas👋</h1>
        <p>
          I'm a software developer based in Karachi, Pakistan. I specialize in building (and occasionally designing)
          exceptional websites, applications, and everything in between.
        </p>
        <div className="social-icons">
          {/* <a
            href="https://twitter.com/olawanle_joel"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a> */}
          <a
            href="https://github.com/anasbakkar124"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-anas-bakkar-898560236/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero;