import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Button } from "@relume_io/relume-ui";
import Card from "./Card";

const CardContent = ({ children }) => <div className="p-4">{children}</div>;
const arrowStyles = {
  position: "absolute",
  zIndex: 2,
  top: "calc(50% - 15px)",
  width: 45,
  height: 45,
  cursor: "pointer",
  background: "rgba(127, 133, 146, 0.4)",
  borderRadius: "50%",
  padding: "5px",
};
const indicatorStyles = {
  background: "rgba(127, 133, 146, 0.4)",
  width: 8,
  height: 8,
  display: 'inline-block',
  margin: '0 8px',
};
export const ProductCarousel = ({ title, description, products }) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const chunkSize = 4;
    const productChunks = [];

    for (let i = 0; i < products.length; i += chunkSize) {
      productChunks.push(products.slice(i, i + chunkSize));
    }
    console.log(productChunks);
    setData(productChunks);
  }, [products]);

  const handleButtonClick = (e) => {
    e.preventDefault();
    navigate('/product-search');
  }
  return (
    <div className="my-12 p-4 bg-gradient-to-r from-blue-100 to-purple-200 cursor-pointer">
        <div className="mb-12 grid grid-cols-1 items-end gap-12 md:mb-18 md:grid-cols-[1fr_max-content] lg:mb-20 lg:gap-20">
          <div className="max-w-lg">
            <h1 className="mb-3 text-5xl font-bold md:mb-4 md:text-7xl lg:text-8xl">
              {title}
            </h1>
            <p className="md:text-md">
              {description}
            </p>
          </div>
          <div className="hidden md:flex h-full items-center mr-4">
            <Button variant="secondary" size="primary" title="View all" className="bg-blue-500 hover:bg-blue-600 text-white" onClick={handleButtonClick}>
              View All
            </Button>
          </div>
        </div>
        <Carousel
      showThumbs={false}
      showStatus={false}
      showArrows={true}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <FaArrowLeft
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{ ...arrowStyles, left: 5 }}
          />
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <FaArrowRight
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{ ...arrowStyles, right: 5 }}
          />
        )
      }
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        if (isSelected) {
            return (
                <li
                    style={{ ...indicatorStyles, background: '#000' }}
                    aria-label={`Selected: ${label} ${index + 1}`}
                    title={`Selected: ${label} ${index + 1}`}
                />
            );
        }
        return (
            <li
                style={indicatorStyles}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                key={index}
                role="button"
                tabIndex={0}
                title={`${label} ${index + 1}`}
                aria-label={`${label} ${index + 1}`}
            />
        );
    }}
    >
      {data.map((chunk, index) => (
        <div key={index} className="grid grid-cols-4 gap-4">
          {chunk.map((product) => (
            <Card key={product.id} className="p-4 rounded-2xl shadow-lg">
              <img
                src={product.image_url}
                alt={product.name}
                className="h-40 w-full object-cover rounded-lg"
              />
              <CardContent>
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-sm text-gray-500 min-h-[2.5rem] leading-relaxed">{product.description}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-yellow-500">5.0 ⭐</span>
                  <span className="text-green-600">${product.price}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ))}
    </Carousel>
    </ div>

  );
};
