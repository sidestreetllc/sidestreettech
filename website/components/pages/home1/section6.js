'use client'
import Image from 'next/image'
import Link from 'next/link'
export default function Section6() {
	return (
		<>

			<section className="s-team">
				<div className="tf-marquee slider-saylo style-2">
					<div className="wrap-marquee">
						<div className="marquee-item">
							<p className="font-main-2 text">the sidestreet team</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">the sidestreet team</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">the sidestreet team</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">the sidestreet team</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">the sidestreet team</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">the sidestreet team</p>
						</div>
					</div>
				</div>
				<div className="tf-container">
					<div className="row align-items-center">
						<div className="col-lg-5">
							<div className="card-member first tf-hover mb-0">
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
						<div className="col-lg-6 offset-lg-1">
							<div className="content">
								<p className="s-sub-title mb-17">
									<i className="icon-angles-right moveLeftToRight" />
									who you work with
								</p>
								<p className="s-title letter-space-0 mb-30 text-anime-wave-right">
									One Local Partner, <span> Senior-Led </span>
								</p>
								<p className="text mb-30">
									Joshua Kuhn founded Sidestreet in 2010 and still runs point on every account.
									His background is broadcast &mdash; NBC News, ESPN, and regional television &mdash;
									where there are no second takes. That same precision and deadline discipline is
									how Sidestreet Technology runs your systems.
								</p>
								<p className="text mb-40">
									The approach is simple: no bait-and-switch on who&rsquo;s in the room, no handoff
									to junior staff, no mystery about what you&rsquo;re paying for. The person you
									meet is the person who does the work.
								</p>
								<Link href="/contact" className="tf-btn style-3">
									Work With Joshua
									<i className="icon-chevron-right" />
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="tf-overlay" />
			</section>

		</>
	)
}
