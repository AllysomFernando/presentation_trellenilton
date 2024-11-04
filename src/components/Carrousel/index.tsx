import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination} from 'swiper/modules';

import Cards, { CardProps } from "../Cards";

type CarrouselProps = {
	items: CardProps[];
};

export default function Carrousel({ items }: CarrouselProps) {
	return (
		<div>
			<Swiper
				modules={[Pagination, Navigation]}
				pagination={{ clickable: true }}
				navigation
				spaceBetween={30}
				slidesPerView={3}
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
