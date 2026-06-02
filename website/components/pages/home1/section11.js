'use client'
import { sliderPartner } from "@/utils/swiperOptions"
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"
export default function Section11() {
	return (
		<>

			<section className="s-partner">
				<Swiper {...sliderPartner} className="swiper-container slider-partner">
					<div className="swiper-wrapper">
					<SwiperSlide>
						<Link href="/#">
							<span className="tf-overlay" />
							<Image
								width="0"
								height="0"
								sizes="100vw"
								style={{ width: "100%", height: "auto" }}
								className="img1" src="/images/partner/microsoft.svg" alt="microsoft" />
							<Image
								width="0"
								height="0"
								sizes="100vw"
								style={{ width: "100%", height: "auto" }}
								className="img2" src="/images/partner/microsoft.svg" alt="microsoft" />
						</Link>
					</SwiperSlide>
					<SwiperSlide>
						<Link href="/#">
							<span className="tf-overlay" />
							<Image
								width="0"
								height="0"
								sizes="100vw"
								style={{ width: "100%", height: "auto" }}
								className="img1" src="/images/partner/google_workspace.svg" alt="Google Workspace" />
							<Image
								width="0"
								height="0"
								sizes="100vw"
								style={{ width: "100%", height: "auto" }}
								className="img2" src="/images/partner/google_workspace.svg" alt="Google Workspace" />
						</Link>
					</SwiperSlide>
					<SwiperSlide>
						<Link href="/#">
							<span className="tf-overlay" />
							<Image
								width="0"
								height="0"
								sizes="100vw"
								style={{ width: "100%", height: "auto" }}
								className="img1" src="/images/partner/aws.svg" alt="aws" />
							<Image
								width="0"
								height="0"
								sizes="100vw"
								style={{ width: "100%", height: "auto" }}
								className="img2" src="/images/partner/aws.svg" alt="aws" />
						</Link>
					</SwiperSlide>
					<SwiperSlide>
						<Link href="/#">
							<span className="tf-overlay" />
							<Image
								width="0"
								height="0"
								sizes="100vw"
								style={{ width: "100%", height: "auto" }}
								className="img1" src="/images/partner/anthropic.svg" alt="anthropic" />
							<Image
								width="0"
								height="0"
								sizes="100vw"
								style={{ width: "100%", height: "auto" }}
								className="img2" src="/images/partner/anthropic.svg" alt="anthropic" />
						</Link>
					</SwiperSlide>
					<SwiperSlide>
						<Link href="/#">
							<span className="tf-overlay" />
							<Image
								width="0"
								height="0"
								sizes="100vw"
								style={{ width: "100%", height: "auto" }}
								className="img1" src="/images/partner/openai.svg" alt="openai" />
							<Image
								width="0"
								height="0"
								sizes="100vw"
								style={{ width: "100%", height: "auto" }}
								className="img2" src="/images/partner/openai.svg" alt="openai" />
						</Link>
					</SwiperSlide>
					<SwiperSlide>
						<Link href="/#">
							<span className="tf-overlay" />
							<Image
								width="0"
								height="0"
								sizes="100vw"
								style={{ width: "100%", height: "auto" }}
								className="img1" src="/images/partner/apple.svg" alt="apple" />
							<Image
								width="0"
								height="0"
								sizes="100vw"
								style={{ width: "100%", height: "auto" }}
								className="img2" src="/images/partner/apple.svg" alt="apple" />
						</Link>
					</SwiperSlide>
					<SwiperSlide>
						<Link href="/#">
							<span className="tf-overlay" />
							<Image
								width="0"
								height="0"
								sizes="100vw"
								style={{ width: "100%", height: "auto" }}
								className="img1" src="/images/partner/apple.svg" alt="apple" />
							<Image
								width="0"
								height="0"
								sizes="100vw"
								style={{ width: "100%", height: "auto" }}
								className="img2" src="/images/partner/apple.svg" alt="apple" />
						</Link>
					</SwiperSlide>
					<SwiperSlide>
						<Link href="/#">
							<span className="tf-overlay" />
							<Image
								width="0"
								height="0"
								sizes="100vw"
								style={{ width: "100%", height: "auto" }}
								className="img1" src="/images/partner/google_cloud.svg" alt="Google Cloud" />
							<Image
								width="0"
								height="0"
								sizes="100vw"
								style={{ width: "100%", height: "auto" }}
								className="img2" src="/images/partner/google_cloud.svg" alt="Google Cloud" />
						</Link>
					</SwiperSlide>
					</div>
				</Swiper>
			</section>

		</>
	)
}
