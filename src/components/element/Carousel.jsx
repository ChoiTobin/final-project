import Carousel from "react-bootstrap/Carousel";
import { ReactComponent as Photo } from "../../img/previewPic.svg";

const Carousels = ({ imgUrls }) => {
  return ( 
    <Carousel variant="dark">
      <Carousel.Item>
        {imgUrls.length !== 0 ? (
          imgUrls.map((imgs, id) => {
          return (
            <div>
              <img
                className="d-block w-100"
                src={imgs}
                alt="slide"
                key={id}
                // style={{ width: "318.82px", height: "169.13px" }}
              />
            </div>
          );
        })
        ) : (
            <div>
              <Photo/> <span>이미지 미리보기</span>
            </div>
        )
        }
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;
