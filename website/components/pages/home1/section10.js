'use client'
import { sliderBlog } from "@/utils/swiperOptions"
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"
export default function Section10() {
	return (
		<>

			<section className="s-new-blog tf-spacing-1">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="content text-center mb-70">
								<p className="s-sub-title justify-center mb-17">
									<i className="icon-angles-right moveLeftToRight" />
									insights
								</p>
								<p className="s-title text-anime-wave">
									Future-Proof Your Business with <br />
									Strategic
									<span>
										Technology
									</span>
								</p>
							</div>
							<Swiper {...sliderBlog} className="swiper-container slider-blog overflow-hidden">
								<div className="swiper-wrapper">
									<SwiperSlide>
										<div className="card-blog-item tf-hover">
											<Link href="/blog-details">
												<div className="entry-image mb-30 hover-1 hover-14">
													<Image
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src="/images/blog/card-blog-item-1.jpg" data-src="/images/blog/card-blog-item-1.jpg" alt="" className="lazyload" />
													<div className="entry-date">
														<p className="day">25</p>
														<p className="month">Sep</p>
													</div>
												</div>
											</Link>
											<div className="entry-meta mb-20">
												<ul className="meta-list">
													<li >
														<Link href="/#"> Cloud </Link>
													</li>
													<li>
														<span className="line" />
													</li>
													<li >
														<Link href="/#"> Admin </Link>
													</li>
													<li>
														<span className="line" />
													</li>
													<li >
														<Link href="/#"> Comments (05) </Link>
													</li>
												</ul>
											</div>
											<Link href="/blog-standard" className="title fw-7 mb-10 text-clamp-2">
												Cloud or On-Prem? A Straight Answer
												in Business Success
											</Link>
											<p className="text mb-25">
												When the cloud makes sense, when it doesn't, and what it actually costs over three years.</p>
											<Link href="/blog-standard" className="tf-btn style-8 small type-2">
												Read More
												<i className="icon-chevron-right" />
											</Link>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-blog-item tf-hover">
											<Link href="/blog-details">
												<div className="entry-image mb-30 hover-1 hover-14">
													<Image
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src="/images/blog/card-blog-item-2.jpg" data-src="/images/blog/card-blog-item-2.jpg" alt="" className="lazyload" />
													<div className="entry-date">
														<p className="day">25</p>
														<p className="month">Sep</p>
													</div>
												</div>
											</Link>
											<div className="entry-meta mb-20">
												<ul className="meta-list">
													<li >
														<Link href="/#"> AI </Link>
													</li>
													<li>
														<span className="line" />
													</li>
													<li >
														<Link href="/#"> Admin </Link>
													</li>
													<li>
														<span className="line" />
													</li>
													<li >
														<Link href="/#"> Comments (05) </Link>
													</li>
												</ul>
											</div>
											<Link href="/blog-standard" className="title fw-7 mb-10 text-clamp-2">
												Using AI Safely: A Practical Guide for Small Teams
											</Link>
											<p className="text mb-25">
												Based the findings from the discovery engineers create a
												tailored
												strategy that addresses
											</p>
											<Link href="/blog-standard" className="tf-btn style-8 small type-2">
												Read More
												<i className="icon-chevron-right" />
											</Link>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-blog-item tf-hover">
											<Link href="/blog-details">
												<div className="entry-image mb-30 hover-1 hover-14">
													<Image
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src="/images/blog/card-blog-item-3.jpg" data-src="/images/blog/card-blog-item-3.jpg" alt="" className="lazyload" />
													<div className="entry-date">
														<p className="day">25</p>
														<p className="month">Sep</p>
													</div>
												</div>
											</Link>
											<div className="entry-meta mb-20">
												<ul className="meta-list">
													<li >
														<Link href="/#"> Cloud </Link>
													</li>
													<li>
														<span className="line" />
													</li>
													<li >
														<Link href="/#"> Admin </Link>
													</li>
													<li>
														<span className="line" />
													</li>
													<li >
														<Link href="/#"> Comments (05) </Link>
													</li>
												</ul>
											</div>
											<Link href="/blog-standard" className="title fw-7 mb-10 text-clamp-2">
												5 Cybersecurity Basics Every SC Business Needs
											</Link>
											<p className="text mb-25">
												Helps businesses develop long-term strategies for growth,
												competitive
												advantage and market
											</p>
											<Link href="/blog-standard" className="tf-btn style-8 small type-2">
												Read More
												<i className="icon-chevron-right" />
											</Link>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-blog-item tf-hover">
											<Link href="/blog-details">
												<div className="entry-image mb-30 hover-1 hover-14">
													<Image
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src="/images/blog/card-blog-item-2.jpg" data-src="/images/blog/card-blog-item-2.jpg" alt="" className="lazyload" />
													<div className="entry-date">
														<p className="day">25</p>
														<p className="month">Sep</p>
													</div>
												</div>
											</Link>
											<div className="entry-meta mb-20">
												<ul className="meta-list">
													<li >
														<Link href="/#"> AI </Link>
													</li>
													<li>
														<span className="line" />
													</li>
													<li >
														<Link href="/#"> Admin </Link>
													</li>
													<li>
														<span className="line" />
													</li>
													<li >
														<Link href="/#"> Comments (05) </Link>
													</li>
												</ul>
											</div>
											<Link href="/blog-standard" className="title fw-7 mb-10 text-clamp-2">
												Using AI Safely: A Practical Guide for Small Teams
											</Link>
											<p className="text mb-25">
												Based the findings from the discovery engineers create a
												tailored
												strategy that addresses
											</p>
											<Link href="/blog-standard" className="tf-btn style-8 small type-2">
												Read More
												<i className="icon-chevron-right" />
											</Link>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-blog-item tf-hover">
											<Link href="/blog-details">
												<div className="entry-image mb-30 hover-1 hover-14">
													<Image
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src="/images/blog/card-blog-item-3.jpg" data-src="/images/blog/card-blog-item-3.jpg" alt="" className="lazyload" />
													<div className="entry-date">
														<p className="day">25</p>
														<p className="month">Sep</p>
													</div>
												</div>
											</Link>
											<div className="entry-meta mb-20">
												<ul className="meta-list">
													<li >
														<Link href="/#"> Cloud </Link>
													</li>
													<li>
														<span className="line" />
													</li>
													<li >
														<Link href="/#"> Admin </Link>
													</li>
													<li>
														<span className="line" />
													</li>
													<li >
														<Link href="/#"> Comments (05) </Link>
													</li>
												</ul>
											</div>
											<Link href="/blog-standard" className="title fw-7 mb-10 text-clamp-2">
												5 Cybersecurity Basics Every SC Business Needs
											</Link>
											<p className="text mb-25">
												Helps businesses develop long-term strategies for growth,
												competitive
												advantage and market
											</p>
											<Link href="/blog-standard" className="tf-btn style-8 small type-2">
												Read More
												<i className="icon-chevron-right" />
											</Link>
										</div>
									</SwiperSlide>
								</div>
							</Swiper>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
