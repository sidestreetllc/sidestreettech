'use client'
import Image from 'next/image'
import Link from 'next/link'
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
								<Link href="/contact" className="tf-btn style-3 text-anime-style-1">
									Work With Joshua
									<i className="icon-chevron-right" />
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-4">
							<div className="card-member first tf-hover">
								<div className="image hover-14 hover-1">
									<Image
										width="0"
										height="0"
										sizes="100vw"
										style={{ width: "100%", height: "auto" }}
										src="/images/avatar/team-member-1.jpg" data-src="/images/avatar/team-member-1.jpg" alt="Joshua Kuhn, Founder and Principal" className="lazyload" />
								</div>
								<div className="content">
									<span className="name"> Joshua Kuhn </span>
									<p className="duty">Founder &amp; Principal</p>
									<ul className="social-list style-5 style-4">
										<li>
											<Link href="https://www.linkedin.com/company/sidestreet-media" target="_blank">
												<i className="icon-linkedin" />
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-7 offset-lg-1">
							<div className="content h-100 flex flex-column justify-center">
								<p className="text mb-30">
									Joshua founded Sidestreet in 2010 &mdash; first as 5thPixel Media in New Orleans, then
									Sidestreet NOLA, and finally Sidestreet after relocating to Spartanburg in 2013. More than
									fifteen years later, he still runs point on every client account.
								</p>
								<p className="text mb-30">
									His background is broadcast journalism and media production, with work that included
									NBC News, ESPN, and regional television across the South. That discipline shows up in how
									Sidestreet Technology approaches every project: precision, deadline awareness, and getting
									it right the first time.
								</p>
								<p className="text">
									No bait-and-switch on who&rsquo;s in the room, no handoff to junior staff, no mystery about
									what you&rsquo;re paying for. The person you meet is the person who does the work.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
