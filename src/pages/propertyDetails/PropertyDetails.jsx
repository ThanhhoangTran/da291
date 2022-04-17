import "./propertydetails.css";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  ContactPhone,
  Email,
  Instagram,
  Facebook,
  Twitter,
} from "@mui/icons-material";
const renderDetail = (el) => {
  return (
    <div className="card_detail">
      <div className="card_detail_img">
        <img src={el.webformatURL} />
      </div>
      <div className="card_detail_desc">
        <h3>{el.tags.split(", ").join(" ")}</h3>
        <div className="card_detail_content">
          <div className="card_detail_address">
            22 First street, Ha Noi, Viet Nam
          </div>
          <div className="card_detail_content_desc">
            My dream house is a UFO house above a forest with mountain range and
            clouds surroundings. There will have 6 large rooms. In each rooms,
            it will have a super smart TV, a super smart car ,high-tech robot
            Super smart TV help me surf the Internet and watch video online.
            <div className="card_detail_price">Price $1,25,000</div>
          </div>
        </div>
        <div className="card_detail_contact">
          <ContactPhone className="icon" />
          <Email className="icon" />
          <Instagram className="icon" />
          <Facebook className="icon" />
          <Twitter className="icon" />
        </div>
      </div>
    </div>
  );
};
const PropertyDetails = () => {
  const { idPro } = useParams();
  const [cards, setCards] = useState(null);
  useEffect(() => {
    const BASE_URL =
      "https://pixabay.com/api/?key=25103186-7ff47398d053bed25725fe25b";
    axios
      .get(BASE_URL, {
        params: { id: idPro },
      })
      .then((res) => {
        setCards(...res.data.hits);
      });
  }, []);
  return (
    <div id="propertyDetails">
      <div className="propertyPage_label">
        <h3>Properties Details</h3>
        <p>
          <Link to="/">Home</Link>/<a href="#">Properties Details</a>
        </p>
      </div>
      <div className="section">
        <div className="propertyDetails_container">
          {cards ? renderDetail(cards) : null}
        </div>
      </div>
    </div>
  );
};
export default PropertyDetails;
