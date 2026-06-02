
import CounterUp from '@/components/elements/CounterUp'
import Image from 'next/image'
import Link from 'next/link'
export default function Section3() {
	return (
		<>

			<section className="s-service tf-spacing-1">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-6">
							<div className="content">
								<p className="s-sub-title mb-17">
									<i className="icon-angles-right moveLeftToRight" />
									what we do
								</p>
								<p className="s-title mb-70 text-anime-wave-right">
									The Full Technology Stack, Managed by <span>One Local Partner</span>
								</p>
								<div className="image tf-hover mb-40">
									<div className="hover-1 hover-14">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/section/s-service.jpg" data-src="/images/section/s-service.jpg" alt="" className="lazyload tf-animate-2" />
									</div>
								</div>
								<p className="text mb-30">
									We provide expert what we do designed to help businesses thrive in
									today’s
									dynamic marketplace. With a team of experienced professionals, we offer
									tailored
									solutions that address your unique challenges, from strategic planning.
								</p>
								<div className="bot">
									<div className="counter-wrap">
										<div className="wg-counter">
											<div className="odometer"><CounterUp count={10} /></div>
											<span className="sub-odo">+</span>
										</div>
										<p className="sub-counter font-main-3 lh-21">
											Upstate Businesses Served
										</p>
									</div>
									<span className="line style-stand">
									</span>
									<Link href="/our-service" className="tf-btn style-3">Explore
										All
										Services <i className="icon-chevron-right" /></Link>
								</div>
							</div>
						</div>
						<div className="col-lg-5 offset-lg-1">
							<div className="box-icon default tf-hover-icon mb-20 wow fadeInUp" data-wow-delay="0s">
								<div className="icon hover-icon-2">
									<i className="flaticon-data-management" />
								</div>
								<Link href="/#" className="title fw-7">
									Managed IT & Support
								</Link>
								<p className="text">
									Sidestreet's managed IT services designed businesses the unlock
									potential
									addressing.
								</p>
								<Link href="/our-service" className="tf-btn-readmore style-3">
									Read More
									<i className="icon-chevron-right" />
								</Link>
							</div>
							<div className="box-icon default tf-hover-icon mb-20 wow fadeInUp" data-wow-delay="0s">
								<div className="icon hover-icon-2">
									<i className="flaticon-human-resources" />
								</div>
								<Link href="/#" className="title fw-7">
									Cybersecurity & Backup
								</Link>
								<p className="text">
									Focuses on optimizing work management and they employee engagement
									engineers
									provide.
								</p>
								<Link href="/our-service" className="tf-btn-readmore style-3">
									Read More
									<i className="icon-chevron-right" />
								</Link>
							</div>
							<div className="box-icon default tf-hover-icon mb-20 wow fadeInUp" data-wow-delay="0s">
								<div className="icon hover-icon-2">
									<i className="flaticon-target-1" />
								</div>
								<Link href="/#" className="title fw-7">
									Cloud & Collaboration
								</Link>
								<p className="text">
									We partner with businesses to develop data-driven strategies that enhance
									customer
									engagement
								</p>
								<Link href="/our-service" className="tf-btn-readmore style-3">
									Read More
									<i className="icon-chevron-right" />
								</Link>
							</div>
							<div className="box-icon default tf-hover-icon mb-20 wow fadeInUp" data-wow-delay="0s">
								<div className="icon hover-icon-2">
									<i className="flaticon-return-of-investment" />
								</div>
								<Link href="/#" className="title fw-7">
									AI Integration
								</Link>
								<p className="text">
									Provides expertise financial planning, budgeting, risk management and
									investment
									strategies financial.
								</p>
								<Link href="/our-service" className="tf-btn-readmore style-3">
									Read More
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
