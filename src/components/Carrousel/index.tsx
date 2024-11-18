import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Cards, { CardProps } from "../Cards";
import styled from "styled-components";

type CarrouselProps = {
	items: CardProps[];
};
const SwiperContainer = styled.div`
	width: 100%;
	padding: 0 1rem;
`;

export default function Carrousel({ items }: CarrouselProps) {
	return (
		<SwiperContainer>
			<Swiper
				spaceBetween={20}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{ clickable: true }}
				navigation
				modules={[Pagination, Navigation, Autoplay]}
				breakpoints={{
					320: {
						slidesPerView: 1,
						spaceBetween: 10,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					1200: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
				}}
			>
				{items.map((item) => (
					<SwiperSlide key={item.id}>
						<Cards items={[item]} />
					</SwiperSlide>
				))}
			</Swiper>
		</SwiperContainer>
	);
}
