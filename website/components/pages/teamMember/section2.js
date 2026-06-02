
import Image from 'next/image'
import Link from 'next/link'
export default function Section2() {
	return (
		<>
			<section className="s-meet-team tf-spacing-2">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="heading mb-70">
								<p className="s-sub-title mb-18 justify-center">
									<i className="icon-angles-right moveLeftToRight" />
									who you work with
								</p>
								<p className="s-title text-center letter-space-0 text-anime-style-2">
									Senior-Led,
									<span>
										No Handoffs
									</span>
								</p>
							</div>
						</div>
					</div>
					<div className="row align-items-center">
						<div className="col-lg-4">
							<div className="card-member style-2 tf-hover">
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
									<ul className="social-list style-4">
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
							<div className="content">
								<p className="text mb-30">
									Joshua Kuhn founded Sidestreet in 2010 &mdash; first as 5thPixel Media in New Orleans,
									then Sidestreet NOLA, and finally Sidestreet after relocating to Spartanburg in 2013.
									More than fifteen years later, he still runs point on every client account.
								</p>
								<p className="text mb-30">
									His background is broadcast journalism and media production, with work that included
									NBC News, ESPN, and regional television across the South. That discipline shows up in how
									Sidestreet Technology approaches every project: precision, deadline awareness, and a
									commitment to getting it right the first time.
								</p>
								<p className="text mb-40">
									The approach is direct: no bait-and-switch on who&rsquo;s in the room, no handoff to
									junior staff, no mystery about what you&rsquo;re paying for. The person you meet is the
									person who does the work.
								</p>
								<Link href="/contact" className="tf-btn">
									Work With Joshua
									<i className="icon-chevron-right" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
