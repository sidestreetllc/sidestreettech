
import Image from 'next/image'
import Link from 'next/link'
export default function Section2() {
	return (
		<>

			<section className="s-process tf-spacing-1">
				<div className="tf-overlay" />
				<div className="bg-image">
					<div className="rellax" data-rellax-speed="0.3">
						<Image
							width="0"
							height="0"
							sizes="100vw"
							style={{ width: "100%", height: "100%" }}
							src="/images/section/process.jpg" data-src="/images/section/process.jpg" alt="" className="lazyload" />
					</div>
				</div>
				<div className="content-wrap">
					<div className="tf-container">
						<div className="row">
							<div className="col-lg-6">
								<div className="heading mb-50">
									<p className="s-sub-title text-white mb-15">
										<i className="icon-angles-right moveLeftToRight" />
										working process
									</p>
									<p className="s-title text-white text-anime-wave">
										Onboarding, Done Right <br />
										to Process
										<span>
											Roadmap
										</span>
									</p>
								</div>
								<div className="wg-step-skill ">
									<p className="title font-main-2 mb-30 ">
										A clear, four-step path from first call to fully managed.
									</p>
									<span className="line" />
									<ul className="benefit-list">
										<li>
											<div className="icon">
												<i className="icon-check-2" />
											</div>
											<p>
												How Onboarding Works
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check-2" />
											</div>
											<p>
												What You Can Expect
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check-2" />
											</div>
											<p>
												Built for the Long Term
											</p>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-6 ">
								<div className="wg-process mb-10 wow fadeInUp" data-wow-delay="0s">
									<div className="right">
										<div className="step-number">
											<span>
												step 01
											</span>
										</div>
										<Link href="/#" className="name-process font-main-2">
											Discovery & Assessment
										</Link>
									</div>
									<p className="text">
										We start by learning your business and auditing what you have — systems, security, backups, and the headaches slowing your team down.
									</p>
								</div>
								<div className="wg-process mb-10 wow fadeInUp" data-wow-delay="0s">
									<div className="right">
										<div className="step-number">
											<span>
												step 02
											</span>
										</div>
										<Link href="/#" className="name-process font-main-2">
											Roadmap & Plan
										</Link>
									</div>
									<p className="text">
										We document what we found and lay out a clear roadmap — quick wins first, then the bigger moves — priced and explained in plain language.
										objectives.
									</p>
								</div>
								<div className="wg-process mb-10 wow fadeInUp" data-wow-delay="0s">
									<div className="right">
										<div className="step-number">
											<span>
												step 03
											</span>
										</div>
										<Link href="/#" className="name-process font-main-2">
											Implementation
										</Link>
									</div>
									<p className="text">
										Deployment & Onboarding: we put monitoring, security, and backups in place and bring your team on smoothly, with little to no disruption.
										across
									</p>
								</div>
								<div className="wg-process  wow fadeInUp" data-wow-delay="0s">
									<div className="right">
										<div className="step-number">
											<span>
												step 04
											</span>
										</div>
										<Link href="/#" className="name-process font-main-2">
											Monitoring & Improvement
										</Link>
									</div>
									<p className="text">
										We watch your systems around the clock, resolve issues before they spread, and meet with you regularly to keep IT aligned with your goals.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
