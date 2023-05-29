import React from "react";
import ReactImageZoom from "react-image-zoom";
import Desktop from "../../assets/images/Desktop.jpg";
const Test2 = () => {
  const props = {
    width: 400,
    height: 250,
    zoomWidth: 500,
    img: Desktop,
    offset: { vertical: 0, horizontal: 0 },
  };
  return (
    <>
      <div style={{ maxWidth: "900px", display: "flex", margin: "auto" }}>
        <div style={{ flex: 1 }}>
          {/* <ReactImageZoom {...props} /> */}
          <ReactImageZoom
            width={400}
            height={250}
            zoomWidth={500}
            img={Desktop}
            offset={{ vertical: 0, horizontal: 100 }}
          />
        </div>
        <div style={{ flex: 1 }}></div>
        asdfasdf
      </div>
    </>
  );
};

export default Test2;
