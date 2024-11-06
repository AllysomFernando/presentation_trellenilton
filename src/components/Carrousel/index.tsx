import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import Cards, { CardProps } from "../Cards";

type CarrouselProps = {
	items: CardProps[];
};

export default function Carrousel({ items }: CarrouselProps) {
	return (
		<div>
			<Swiper
				spaceBetween={-100}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{ clickable: true }}
				navigation
				slidesPerView={3}
				modules={[Pagination, Navigation, Autoplay]}
			>
				{items.map((item) => (
					<SwiperSlide key={item.id}>
						<Cards items={[item]} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
