import { useDispatch, useSelector } from "react-redux";
import "../styles/banner.scss";
import type { RootState } from "../../store/store";
import { setScroll } from "../../store/reducers/banner";

function Banner() {
    const bannerScroll = useSelector(
        (state: RootState) => state.Banner.scrollPlace
    );
    const dispatch = useDispatch();
    
    const handleScroll = (scrollLocation: number, scroll: number) => {
        dispatch(setScroll(scrollLocation));
        const banner = document.querySelector(".banner");
        if (banner !== null) {
            banner.scrollLeft += scroll;
        }
    };

    return (
        <>
            <div className="banner">
                <img
                    className="banner-image"
                    src="./assets/images/banner1.webp"
                    alt=""
                />
                <img
                    className="banner-image"
                    src="./assets/images/banner2.webp"
                    alt=""
                />
            </div>
            <div className="switch-wrapper">
                <div
                    className={
                        bannerScroll === 0
                            ? "switch-point here"
                            : "switch-point"
                    }
                    onClick={() => handleScroll(0, -1920)}
                ></div>
                <div
                    className={
                        bannerScroll === 1
                            ? "switch-point here"
                            : "switch-point"
                    }
                    onClick={() => handleScroll(1, 1920)}
                ></div>
            </div>
        </>
    );
}

export default Banner;
