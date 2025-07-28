const Home = () => {
  const data = [
    {
      id:1,
      url:'https://colorlibhub.com/shapely/wp-content/uploads/sites/59/2016/12/photo-1443890484047-5eaa67d1d630-1.jpg'
    },
    {
      id:2,
      url:'https://colorlibhub.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1422568374078-27d3842ba676-1.jpg'
    },
    {
      id:3,
      url:'https://colorlibhub.com/shapely/wp-content/uploads/sites/59/2016/12/photo-1447877085163-3cce903855cd-1.jpg'
    },{
      id:4,
      url:'https://colorlibhub.com/shapely/wp-content/uploads/sites/59/2016/12/photo-1447877085163-3cce903855cd-1.jpg'
    },
    {
      id:5,
      url:'https://colorlibhub.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1447958374760-1ce70cf11ee3-1-1.jpg'
    },
    {
      id:6,
      url:'https://colorlibhub.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1447958374760-1ce70cf11ee3-1-1.jpg'
    },
    {
      id:7,
      url:'https://colorlibhub.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1449057528837-7ca097b3520c-1-1.jpg'
    },
    {
      id:8,
      url:'https://colorlibhub.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1449168013943-3a15804bb41c-1-1.jpg'
    },
    {
      id:9,
      url:'https://colorlibhub.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1451186859696-371d9477be93-1-1.jpg'
    },
    {
      id:10,
      url:'https://colorlibhub.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1448518184296-a22facb4446f-1-1.jpg'
    },
  ];
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
        <div className="cont">
          <div className="imgsec">
            <img
              src="https://colorlibhub.com/wp-content/uploads/sites/59/2016/03/macbook-preview-flexible.png"
              alt="image"
            />
          </div>
          <div className="textsec">
            <h1 className="heading">Seo Friendly</h1>
            <p className="para">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
              doloremque error voluptatibus natus velit! Iusto facilis id
              doloribus accusamus! Asperiores non quidem earum laborum neque
              beatae est recusandae deleniti ipsam?
            </p>
            <button className="btn1">Read More</button>
          </div>
        </div>
      </div>

      <div className="portfolio">
        <div className="cont">
          <div className="textsec">
            <h1 className="heading">Portfolio Section</h1>
            <p className="para">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
              doloremque error voluptatibus natus velit! Iusto facilis id
              doloribus accusamus! Asperiores non quidem earum
            </p>
            <button className="btn1">See in Action</button>
          </div>
          <div className="imgsec">
            <img
              alt="Portfolio Section"
              src="https://colorlibhub.com/wp-content/uploads/sites/59/2016/03/flexible-portfolio.png"
            />
          </div>
        </div>
      </div>
      <div className="parallaxsec">
        <div className="container">
          <div className="items">
            <h1 className="normtext">Small Parallax Section</h1>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
              alias.
            </p>
            <button className="btn1">More Info</button>
          </div>
        </div>
      </div>

      <div className="Limitless">
        <div className="container">
          <div className="items">
            <h1 className="heading">LimitLess Options </h1>
            <p className="para">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
              similique ducimus magni cum sequi est possimus doloremque
              cupiditate ipsa excepturi.
            </p>
            <button className="btn1">More Info</button>
          </div>
        </div>
      </div>
     <div className="latestsec">
      <div className="items">
        <h1 className="normtext">Our Latest Project</h1>
        <p className="paragraph">This is Our Latest Project Images You can see Here</p>
      </div>
      <div className="imagesec">
        {
          data.map((images,index)=>(
            <div className="img" key={index}>
            <img src={images.url} ></img>
            </div>
          ))
        }
      </div>
     </div>
    </>
  );
};

export default Home;
