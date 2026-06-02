'use client'
import { sliderTeam } from "@/utils/swiperOptions"
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"
export default function Section3() {
	return (
		<>

			<section className="s-team">
				<div className="tf-marquee slider-saylo style-2 mb-50">
					<div className="wrap-marquee">
						<div className="marquee-item">
							<p className="font-main-2 text">
								meet our Expert team
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								meet our Expert team
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								meet our Expert team
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								meet our Expert team
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								meet our Expert team
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								meet our Expert team
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								meet our Expert team
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								meet our Expert team
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								meet our Expert team
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								meet our Expert team
							</p>
						</div>
					</div>
				</div>
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="flex justify-space-between item-center mb-70">
								<div className="content">
									<p className="s-sub-title">
										<i className="icon-angles-right moveLeftToRight" />
										leadership
									</p>
									<p className="s-title letter-space-0 text-anime-wave">
										Led by <span> Joshua Kuhn </span>
									</p>
								</div>
								<Link href="/team-member" className="tf-btn style-3 text-anime-style-1">
									Work With Joshua
									<i className="icon-chevron-right" />
								</Link>
							</div>
						</div>
					</div>
				</div>
				<Swiper {...sliderTeam} className="swiper-container slider-team">
					<div className="swiper-wrapper">
						<SwiperSlide>
							<div className="card-member first tf-hover">
								<div className="image hover-14 hover-1">
									<Image
										width="0"
										height="0"
										sizes="100vw"
										style={{ width: "100%", height: "auto" }}
										src="/images/avatar/team-member-1.jpg" data-src="/images/avatar/team-member-1.jpg" alt="" className="lazyload" />
								</div>
								<div className="content">
									<Link href="/team-details" className="name"> Joshua Kuhn </Link>
									<p className="duty">Founder & Principal</p>
									<ul className="social-list style-5 style-4">
										<li>
											<Link href="/#">
												<i className="icon-facebook" />
											</Link>
										</li>
										<li>
											<Link href="/#">
												<i className="icon-twitter" />
											</Link>
										</li>
										<li>
											<Link href="/#">
												<i className="icon-linkedin" />
											</Link>
										</li>
										<li>
											<Link href="/#">
												<i className="icon-youtube" />
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="card-member  tf-hover">
								<div className="image hover-14 hover-1">
									<Image
										width="0"
										height="0"
										sizes="100vw"
										style={{ width: "100%", height: "auto" }}
										src="/images/avatar/team-member-2.jpg" data-src="/images/avatar/team-member-2.jpg" alt="" className="lazyload" />
								</div>
								<div className="content">
									<Link href="/team-details" className="name"> Senior Engineer </Link>
									<p className="duty">Systems Engineer</p>
									<ul className="social-list style-5 style-4">
										<li>
											<Link href="/#">
												<i className="icon-facebook" />
											</Link>
										</li>
										<li>
											<Link href="/#">
												<i className="icon-twitter" />
											</Link>
										</li>
										<li>
											<Link href="/#">
												<i className="icon-linkedin" />
											</Link>
										</li>
										<li>
											<Link href="/#">
												<i className="icon-youtube" />
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="card-member  tf-hover">
								<div className="image hover-14 hover-1">
									<Image
										width="0"
										height="0"
										sizes="100vw"
										style={{ width: "100%", height: "auto" }}
										src="/images/avatar/team-member-3.jpg" data-src="/images/avatar/team-member-3.jpg" alt="" className="lazyload" />
								</div>
								<div className="content">
									<Link href="/team-details" className="name"> Cloud & Security Lead </Link>
									<p className="duty">Systems Engineer</p>
									<ul className="social-list style-5 style-4">
										<li>
											<Link href="/#">
												<i className="icon-facebook" />
											</Link>
										</li>
										<li>
											<Link href="/#">
												<i className="icon-twitter" />
											</Link>
										</li>
										<li>
											<Link href="/#">
												<i className="icon-linkedin" />
											</Link>
										</li>
										<li>
											<Link href="/#">
												<i className="icon-youtube" />
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="card-member last tf-hover">
								<div className="image hover-14 hover-1">
									<Image
										width="0"
										height="0"
										sizes="100vw"
										style={{ width: "100%", height: "auto" }}
										src="/images/avatar/team-member-4.jpg" data-src="/images/avatar/team-member-4.jpg" alt="" className="lazyload" />
								</div>
								<div className="content">
									<Link href="/team-details" className="name"> AI Solutions Engineer </Link>
									<p className="duty">Systems Engineer</p>
									<ul className="social-list style-5 style-4">
										<li>
											<Link href="/#">
												<i className="icon-facebook" />
											</Link>
										</li>
										<li>
											<Link href="/#">
												<i className="icon-twitter" />
											</Link>
										</li>
										<li>
											<Link href="/#">
												<i className="icon-linkedin" />
											</Link>
										</li>
										<li>
											<Link href="/#">
												<i className="icon-youtube" />
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</SwiperSlide>
					</div>
					<div className="tf-overlay" />
				</Swiper>
			</section>

		</>
	)
}
