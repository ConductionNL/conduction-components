import * as React from "react";
import { Carousel } from "react-responsive-carousel";
import { render } from "react-dom";
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import * as styles from "./Slider.module.css";

interface SliderProps {
  items: { labels?: string; images: JSX.Element }[];
}

export const Slider: React.FC<SliderProps> = ({ items }) => {
  render() {
  return (
    <Carousel>
      {items.map(({ labels, images }, idx) => (
        <div>
          {images}
          <p>{labels}</p>
        </div>
      ))}
    </Carousel>
  );
  }};

ReactDOM.render(< />, document.querySelector('.demo-carousel'));

