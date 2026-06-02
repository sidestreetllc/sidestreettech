
import Image from 'next/image'
export default function Section1() {
	return (
		<>

			<section className="s-mission tf-spacing-3">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-5">
							<div className="image">
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									src="/images/section/mission-1.jpg" data-src="/images/section/mission-1.jpg" alt="" className="lazyload tf-animate-2" />
							</div>
						</div>
						<div className="col-lg-7">
							<div className="content">
								<p className="s-sub-title mb-13">
									<i className="icon-angles-right moveLeftToRight" />
									Mission &amp; vision
								</p>
								<p className="s-title mb-30 text-anime-wave">
									Our Mission &amp; Vision <br /> for the Upstate
									<span>
										Success
									</span>
								</p>
								<p className="text mb-50">
									We are the managed IT arm of Sidestreet, a Spartanburg company serving businesses
									since 2010. Our purpose is simple: make modern, secure, AI-ready technology
									genuinely accessible to every business in the Upstate — and stand behind it.
								</p>
								<ul className="list">
									<li className="wow fadeInUp" data-wow-delay="0s">
										<div className="title-top">
											<div className="icon">
												<i className="flaticon-rocket" />
											</div>
											<p className="company">
												Company Mission
											</p>
										</div>
										<p className="text">
											To give Upstate businesses enterprise-grade IT, security, and AI without the enterprise overhead — delivered by senior people who answer the phone and stand behind their work.
										</p>
									</li>
									<li className="wow fadeInUp" data-wow-delay="0s">
										<div className="title-top">
											<div className="icon">
												<i className="flaticon-opportunity" />
											</div>
											<p className="company">
												Company Vision
											</p>
										</div>
										<p className="text">
											To be the most trusted technology partner in Upstate South Carolina — the local team businesses call first when they want IT that just works.
										</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
