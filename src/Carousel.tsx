// idea from https://www.sonahangrai.com/react/horizontal-scroll-with-button-in-react/, https://blog.logrocket.com/building-carousel-component-react-hooks/
import { useRef } from 'react';
import styles from './Carousel.module.css';

const DEFAULT_GAP = 10;

export const Carousel = () => {
  let sliderRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    const current = sliderRef.current;
    if (current) {
      // current.scrollLeft += current.clientWidth * 0.5;
      current.scrollLeft += (current.children[0] as HTMLDivElement).offsetWidth + DEFAULT_GAP;
    }
  };

  const handlePrev = () => {
    const current = sliderRef.current;
    if (current) {
      // current.scrollLeft -= current.clientWidth * 0.5;
      current.scrollLeft -= (current.children[0] as HTMLDivElement).offsetWidth + DEFAULT_GAP;
    }
  };

  const handleOnScroll = ({ nativeEvent: { target } }: React.UIEvent<HTMLDivElement, UIEvent>) => {
    if (target) {
      const element = target as HTMLDivElement;
      console.log(element.scrollLeft, element.scrollWidth, element.clientWidth);
    }
  };

  return (
    <>
      <div className={styles.carousel} ref={sliderRef} onScroll={handleOnScroll}>
        {[...new Array(10)].map((_item, index) => (
          <div key={`ci-${index}`} className={styles.carousel__item}>
            {index}
          </div>
        ))}
      </div>
      <div className={styles['carousel__buttons-container']}>
        <button className={styles.carousel__button} onClick={handlePrev}>
          PREV
        </button>
        <button className={styles.carousel__button} onClick={handleNext}>
          NEXT
        </button>
      </div>
    </>
  );
};
