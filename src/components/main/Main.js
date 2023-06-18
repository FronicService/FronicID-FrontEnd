import React from 'react';
import servers from '../../img/servers.svg'
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Main() {

    return (
        <div className={"my-36 flex justify-center"}>
            <div className={"w-4/6 flex items-center justify-center h-52 gap-5"}>
                <div className={"h-full"}>
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
                <Swiper
                    className={"h-full w-96"}
                    modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    centeredSlides={true}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Main