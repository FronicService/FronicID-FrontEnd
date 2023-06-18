import React from 'react';
import servers from '../../img/servers.svg'
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Main() {

    const swiperRef = React.useRef();
    const swipeNext = React.useRef();
    const swipePrev = React.useRef();

    return (
        <div className={"my-28 w-full flex justify-center"}>
            <div className={"w-9/12 flex items-center justify-center h-80 gap-5"}>
                <div className={"h-full flex flex-col justify-center"}>
                    <h1 className={"text-5xl font-bold "}>Один аккаунт <br/> для всех сервисов</h1>
                    <div
                        className="flex items-center justify-start mt-5">
                        <a href="#"
                           className="btn flex mb-2 ml-0 items-center justify-center btn primary-button w-full rounded-lg p-2 text-white ease-in duration-100 h-12 bg-blue-500 w-64">
                            Создать аккаунт
                        </a>
                        <a href="#"
                           className="btn flex mb-2 ml-0 items-center justify-center btn primary-button w-full rounded-lg p-2 text-blue-600 ease-in duration-100 h-12 bg-blue-300 ml-5 w-52">
                            Войти
                        </a>
                    </div>
                </div>
                <div className={"flex items-center ml-24"}>
                    <div className={"relative"}>
                        <button ref={swipePrev} className={"bg-gray-50 text-blue-500 shadow-md absolute z-10 w-10 h-10 -left-5 rounded-full ease-in duration-100 opacity-85 hover:opacity-100 disabled:opacity-0"} onClick={() => swiperRef.current?.slidePrev()}>
                            🡨
                        </button>
                    </div>
                    <Swiper
                        className={"h-full card banner"}
                        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                            swipePrev.current.disabled = true;
                        }}
                        onSlideChange={(swiper) => {
                            swipeNext.current.disabled = swiper.isEnd;
                            swipePrev.current.disabled = swiper.activeIndex === 0;
                        }}
                        centeredSlides
                        slidesPerView={1}
                        pagination={{ clickable: true, dynamicBullets: true }}
                    >
                        <SwiperSlide>
                            <div className={"flex justify-center items-center h-full w-full"}>
                                <div className="lds-ring">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div></SwiperSlide>
                        <SwiperSlide><div className={"flex justify-center items-center h-full w-full"}>
                            <div className="lds-ring">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide><div className={"flex justify-center items-center h-full w-full"}>
                            <div className="lds-ring">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide><div className={"flex justify-center items-center h-full w-full"}>
                            <div className="lds-ring">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div></SwiperSlide>
                    </Swiper>
                    <div className={"relative"}>
                        <button ref={swipeNext} className={"bg-gray-50 text-blue-500 shadow-md absolute z-10 w-10 h-10 rounded-full -right-5 ease-in duration-100 opacity-85 hover:opacity-100 disabled:opacity-0"} onClick={() => {
                            swiperRef.current?.slideNext()
                        }}>
                            🡪
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Main