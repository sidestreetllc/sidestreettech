'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from "react"
export default function Section2() {
	useEffect(() => {
		const elements = document.querySelectorAll(
			".tf-animate-1, .tf-animate-2, .tf-animate-3, .tf-animate-4"
		)

		if (!elements.length) return

		const isSmallScreen = window.matchMedia("(max-width: 550px)").matches

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("active-animate")
					}
				})
			},
			{
				root: null, // viewport
				threshold: isSmallScreen ? 0.2 : 0.3, // Adjust based on screen size
			}
		)

		elements.forEach((el) => observer.observe(el))

		return () => {
			elements.forEach((el) => observer.unobserve(el))
		}
	}, [])
	return (
		<>

			<section className="s-why-choose-3 tf-spacing-8">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-7">
							<div className="wg-company">
								<ul className="list">
									<li className="wow fadeInUp" data-wow-delay="0s">
										<div className="title">
											<div className="icon">
												<i className="flaticon-rocket" />
											</div>
											<Link href="/#">
												Company Mission
											</Link>
										</div>
										<p className="text">
											Our mission is to empower businesses by providing innovative, data-driven
											solutions that drive growth, enhance efficiency, and create lasting value.
											We are committed to delivering exceptional service and personalized.
										</p>
									</li>
									<li className="wow fadeInUp" data-wow-delay="0s">
										<div className="title">
											<div className="icon">
												<i className="flaticon-market" />
											</div>
											<Link href="/#">
												Company Vision
											</Link>
										</div>
										<p className="text">
											To be the most trusted technology partner in Upstate South Carolina — the local team businesses call first when they want IT that just works.
										</p>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-5">
							<div className="image tf-hover">
								<div className="hover-1">
									<Image
										width="0"
										height="0"
										sizes="100vw"
										style={{ width: "100%", height: "auto" }}
										src="/images/section/why.jpg" data-src="/images/section/why.jpg" alt="" className="lazyload tf-animate-2" />
								</div>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="content">
								<div className="content-left">
									<p className="s-sub-title text-white">
										<i className="icon-angles-right moveLeftToRight" />
										Why choose us
									</p>
									<p className="s-title text-white mb-30 text-anime-wave">
										Senior People,
										<span>
											Real Accountability
										</span>
									</p>
									<p className="text text-white">
										The senior person you meet is the senior person who does the work. No handoffs to junior staff, no surprise bills, and no waiting days for a callback when something breaks. We run your technology like the critical system it is.
									</p>
								</div>
								<div className="content-right">
									<div className="wg-skill mb-40 ">
										<div className="name">
											<p>
												Managed IT
											</p>
											<p className="percent">
												89%
											</p>
										</div>
										<div className="progress tf-animate-1">
											<div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{ width: '89%' }} />
										</div>
									</div>
									<div className="wg-skill mb-40 ">
										<div className="name">
											<p>
												Cloud & Microsoft 365
											</p>
											<p className="percent">
												73%
											</p>
										</div>
										<div className="progress tf-animate-1">
											<div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{ width: '73%' }} />
										</div>
									</div>
									<div className="wg-skill ">
										<div className="name">
											<p>
												Cybersecurity & Backup
											</p>
											<p className="percent">
												80%
											</p>
										</div>
										<div className="progress tf-animate-1">
											<div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{ width: '80%' }} />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
