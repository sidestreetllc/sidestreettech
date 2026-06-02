
import CounterUp from '@/components/elements/CounterUp'
import Image from 'next/image'
import Link from 'next/link'
export default function Section1() {
	return (
		<>

			<section className="s-team-detail">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-4">
							<div className="profile">
								<div className="entry-avatar tf-hover">
									<div className="hover-1">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/avatar/team-detail.jpg" data-src="/images/avatar/team-detail.jpg" alt="" className="lazyload" />
									</div>
								</div>
								<p className="entry-name font-main-2 fw-7 text-anime-style-2">
									Joshua Kuhn
								</p>
								<p className="entry-duty wow fadeInUp" data-wow-delay="0s">
									Founder & Principal
								</p>
								<span className="line" />
								<h5 className="title-profile">
									Contact Me
								</h5>
								<span className="line s2 mb-40">
								</span>
								<ul className="contact-infor-list">
									<li className="wow fadeInUp" data-wow-delay="0s">
										<p className="caption">
											Email Address
										</p>
										<Link href="mailto:hello@sidestreet.tech" className="infor">
											hello@sidestreet.tech
										</Link>
									</li>
									<li className="wow fadeInUp" data-wow-delay="0s">
										<p className="caption">
											Need a Call
										</p>
										<Link href="tel:+18645743811" className="infor">
											864-574-3811
										</Link>
									</li>
									<li className="wow fadeInUp" data-wow-delay="0s">
										<p className="caption">
											Location
										</p>
										<Link href="https://maps.google.com/?q=55MainStreet,d-blockNewYork" className="infor" target="_blank">
											55 Main Street, d-block, New York
										</Link>
									</li>
								</ul>
								<span className="line" />
								<h5 className="title-profile">
									Follow Us
								</h5>
								<span className="line s2 type-2 mb-30" />
								<ul className="social-list w-h-45 style-4">
									<li className="wow fadeInUp" data-wow-delay="0s">
										<Link href="/#">
											<i className="icon-facebook" />
										</Link>
									</li>
									<li className="wow fadeInUp" data-wow-delay="0.1s">
										<Link href="/#">
											<i className="icon-twitter" />
										</Link>
									</li>
									<li className="wow fadeInUp" data-wow-delay="0.2s">
										<Link href="/#">
											<i className="icon-linkedin" />
										</Link>
									</li>
									<li className="wow fadeInUp" data-wow-delay="0.3s">
										<Link href="/#">
											<i className="icon-youtube" />
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-8">
							<div className="content">
								<h2 className="hello text-anime-wave">
									Hello
								</h2>
								<p className="text s1 mb-50">
									Joshua founded Sidestreet in 2010 and still runs point on every client account. He has spent his career building and supporting technology for businesses across the Southeast — cloud, security, networks, and the media and production systems many companies rely on. His approach is direct: the senior person you meet is the person who does the work, and technology should make your team faster, not get in the way.
								</p>
								<p className="title font-main-2 fw-7 mb-20">
									Professional Qualification
								</p>
								<p className="text s2 mb-40">
									Professional skills encompass a broad range of abilities and expertise that are
									essential for success in any career. These include both hard skills, such as
									technical
									proficiency, data analysis, and management, as well as soft skills like
									communication,
									leadership, problem-solving adaptability. Mastering professional skills allows
									individuals to effectively contribute to their organization, collaborate
								</p>
								<ul className="list mb-50">
									<li>
										<div className="number">
											<span>1</span>
										</div>
										<div >
											<h6 className="type">
												Market Research &amp; Competitor Analysis
											</h6>
											<p>
												Gain a deeper understanding of your industry landscape and target
												audience
												through in-depth market research. We analyze competitor strategies,
												identify
												market gaps.
											</p>
										</div>
									</li>
									<li>
										<div className="number">
											<span>2</span>
										</div>
										<div >
											<h6 className="type">
												Brand Strategy Development
											</h6>
											<p>
												We help you build or refine your brand identity to ensure consistency
												and
												relevance. From defining your brand’s mission and values to creating a
												compelling
											</p>
										</div>
									</li>
									<li>
										<div className="number">
											<span>3</span>
										</div>
										<div >
											<h6 className="type">
												Digital AI & Automation
											</h6>
											<p>
												Reach your customers where they are. Our digital marketing solutions
												cover
												SEO, social media marketing, email marketing, and PPC (pay-per-click)
												campaigns.
											</p>
										</div>
									</li>
								</ul>
								<ul className="list-skill style-2 mb-50">
									<li>
										<p className="skill-name">
											Managed IT
										</p>
										<div className="wg-progress">
											<div className="progress tf-animate-1">
												<div className="progress-bar" role="progressbar" style={{ width: '89%' }} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
											</div>
											<div className="wg-counter style-5">
												<div className="style-5 odometer">
												<CounterUp count={89} />
												</div>
												<span className="sub-odo">%</span>
											</div>
										</div>
									</li>
									<li>
										<p className="skill-name">
											Marketing Technology
										</p>
										<div className="wg-progress">
											<div className="progress tf-animate-1">
												<div className="progress-bar" role="progressbar" style={{ width: '67%' }} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
											</div>
											<div className="wg-counter style-5">
												<div className="style-5-2 odometer">
													<CounterUp count={67} />
												</div>
												<span className="sub-odo">%</span>
											</div>
										</div>
									</li>
									<li>
										<p className="skill-name">
											Financial Technology
										</p>
										<div className="wg-progress">
											<div className="progress tf-animate-1">
												<div className="progress-bar" role="progressbar" style={{ width: '83%' }} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
											</div>
											<div className="wg-counter style-5">
												<div className="style-5-3 odometer">
												<CounterUp count={83} />
												</div>
												<span className="sub-odo">%</span>
											</div>
										</div>
									</li>
									<li>
										<p className="skill-name">
											Corporate Technology
										</p>
										<div className="wg-progress">
											<div className="progress tf-animate-1">
												<div className="progress-bar" role="progressbar" style={{ width: '70%' }} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
											</div>
											<div className="wg-counter style-5">
												<div className="style-5-4 odometer">
												<CounterUp count={70} />
												</div>
												<span className="sub-odo">%</span>
											</div>
										</div>
									</li>
								</ul>
								<p className="title font-main-2 fw-7 mb-20 text-anime-wave">
									Awards Winning
								</p>
								<p className="text s3 mb-50">
									Our award-winning services reflect our commitment to excellence, innovation, and
									client
									success. Over the years, we’ve been recognized for our outstanding performance in
									every part of your technology — from managed IT and cloud to security and AI — and
									leadership. These accolades serve as a testament to the quality of our work, the
									dedication of our team, and the trust our clients place in us.
								</p>
								<div className="wg-partner style-2">
									<Link href="/#">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											className="img1" src="/images/partner/quora.png" alt="" />
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											className="img2" src="/images/partner/quora.png" alt="" />
									</Link>
									<Link href="/#">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											className="img1" src="/images/partner/rakuten.png" alt="" />
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											className="img2" src="/images/partner/rakuten.png" alt="" />
									</Link>
									<Link href="/#">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											className="img1" src="/images/partner/consumer_reports.png" alt="" />
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											className="img2" src="/images/partner/consumer_reports.png" alt="" />
									</Link>
									<Link href="/#">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											className="img1" src="/images/partner/forbes.png" alt="" />
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											className="img2" src="/images/partner/forbes.png" alt="" />
									</Link>
									<Link href="/#">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											className="img1" src="/images/partner/hubspot.png" alt="" />
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											className="img2" src="/images/partner/hubspot.png" alt="" />
									</Link>
									<Link href="/#">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											className="img1" src="/images/partner/roku.png" alt="" />
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											className="img2" src="/images/partner/roku.png" alt="" />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
