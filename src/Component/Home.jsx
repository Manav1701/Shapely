const Home = () => {
  return (
    <>
      <div className="container">
        <div className="items">
          <h1 className="normtext">
            We Change Everything <span>Wordpress</span>
          </h1>
          <p className="paragraph">
            This is the only Wordpress Theme You will ever want to use
          </p>
          <div className="buttons">
            <button className="btn1">Read More</button>
            <button className="btn2">Download Now</button>
          </div>
        </div>
      </div>
      <div className="seofriendly">
        <div className="imgsec">
          <img
            src="https://colorlibhub.com/wp-content/uploads/sites/59/2016/03/macbook-preview-flexible.png"
            alt="image"
          />
        </div>
        <div className="textsec">
          <h1 className="heading">Seo Friendly</h1>
          <p className="para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore doloremque error voluptatibus natus velit! Iusto facilis id doloribus accusamus! Asperiores non quidem earum laborum neque beatae est recusandae deleniti ipsam?</p>
          <button className="btn1">Read More</button>
        </div>
      </div>

      <div className="portfolio">
        <div className="con">
        <div className="imgsec">
          <img width="1000" height="693" alt="Portfolio Section" src="https://colorlibhub.com/wp-content/uploads/sites/59/2016/03/flexible-portfolio.png"/>
        </div>
        <div className="textsec">
          <h1 className="heading">Seo Friendly</h1>
          <p className="para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore doloremque error voluptatibus natus velit! Iusto facilis id doloribus accusamus! Asperiores non quidem earum laborum neque beatae est recusandae deleniti ipsam?</p>
          <button className="btn1">Read More</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
