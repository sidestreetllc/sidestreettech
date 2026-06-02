
import Image from 'next/image'
import Link from 'next/link'
export default function Section1() {
	return (
		<>

			<section className="s-case-detail ">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="content">
								<div className="top">
									<div >
										<h2 className="title mb-50 text-anime-wave">
											Modernizing IT for a <br /> Growing Upstate <br /> Manufacturer
										</h2>
										<span className="line mb-40" />
										<p className="text s1 mb-20">
											We replaced aging servers with a secure hybrid cloud setup, locked down security, and added 24/7 monitoring and a same-day help desk.
										</p>
										<p className="text s2">
											Frequent downtime and untested backups were putting
											were
											orders at risk.
										</p>
									</div>
									<div className="entry-image-right tf-hover">
										<div className="hover-1">
											<Image
												width="0"
												height="0"
												sizes="100vw"
												style={{ width: "100%", height: "auto" }}
												src="/images/section/case-detail.jpg" data-src="/images/section/case-detail.jpg" alt="" className="lazyload" />
										</div>
									</div>
								</div>
								<div className="entry-meta">
									<ul>
										<li>
											<p className="name-meta">Clients</p>
											<h6 className="sub-meta">Pixel Art Company</h6>
										</li>
										<li>
											<p className="name-meta">Start Date</p>
											<h6 className="sub-meta">23 August 2024</h6>
										</li>
										<li>
											<p className="name-meta">Duration:</p>
											<h6 className="sub-meta">3 Month 8 Days</h6>
										</li>
										<li>
											<p className="name-meta">Location:</p>
											<h6 className="sub-meta">Spartanburg County, SC</h6>
										</li>
										<li>
											<p className="name-meta">Service:</p>
											<h6 className="sub-meta">Managed IT</h6>
										</li>
									</ul>
								</div>
								<div className="entry-image tf-hover">
									<div className="bg-image">
										<div className="rellax" data-rellax-speed={1}>
											<div className="hover-1">
												<Image
													width="0"
													height="0"
													sizes="100vw"
													style={{ width: "100%", height: "auto" }}
													src="/images/section/case-detail-2.jpg" data-src="/images/section/case-detail-2.jpg" alt="" className="lazyload" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<p className="title-2 s1 text-anime-style-2">
								The Project Story
							</p>
							<p className="text s3">
								After a full assessment, we found the real risks: an aging on-site server with no failover,
								backups that hadn't been tested in over a year, no multi-factor authentication, and a
								help-desk gap that left staff waiting hours when something broke on the floor. We mapped
								a plan to fix all of it.
							</p>
						</div>
						<div className="col-lg-6">
							<p className="title-2 s1 text-anime-style-2">
								The Challenge
							</p>
							<p className="text s3 mb-0">
								A growing Upstate manufacturer was scaling fast, but their technology hadn't kept up.
								An aging server, inconsistent backups, and no real security plan meant every outage
								threatened production and shipping. With no internal IT staff, they needed a local
								partner to take it all on and make it reliable â without hiring a full IT
								department. They brought in Sidestreet to assess everything and
								run it going forward.
							</p>
						</div>
						<div className="col-lg-12">
							<span className="line s1" />
							<p className="title-2 s2 text-anime-wave">
								The Results
							</p>
							<p className="text s4 mb-30">
								We migrated files and email to a secure Microsoft 365 environment, replaced the failing
								server with a hybrid setup that keeps shop-floor systems fast and local, and layered in
								endpoint and email security with MFA plus monitored, tested backups. We also added
								24/7 monitoring and a same-day help desk.
							</p>
						</div>
						<div className="grid-layout-2 mb-100">
							<div className="wg-benefit wow fadeInUp" data-wow-delay="0s">
								<h6 className="name">
									Downtime
								</h6>
								<p className="infor">
									Dropped sharply once monitoring and proactive patching replaced the old break-fix
									scramble.
								</p>
							</div>
							<div className="wg-benefit wow fadeInUp" data-wow-delay="0.1s">
								<h6 className="name">
									Inventory Costs
								</h6>
								<p className="infor">
									Recovery time went from days to hours, with backups now tested on a schedule, and
									staff get help the same day.
								</p>
							</div>
							<div className="wg-benefit wow fadeInUp" data-wow-delay="0s">
								<h6 className="name">
									Lead Times
								</h6>
								<p className="infor">
									Were shortened by 40%, leading to faster order fulfillment and they improved
									customer satisfaction.
								</p>
							</div>
							<div className="wg-benefit wow fadeInUp" data-wow-delay="0.2s">
								<h6 className="name">
									Technology Integration
								</h6>
								<p className="infor">
									Gave the owner clear visibility into systems, security, and backups — with quarterly reviews to plan ahead instead of react
								</p>
							</div>
						</div>
						<span className="line s2" />
						<div className="bot">
							<Link href="/#" className="btn-case prev">
								<div className="image-wrap">
									<Image
										width="0"
										height="0"
										sizes="100vw"
										style={{ width: "100%", height: "auto" }}
										src="/images/section/prev-case.jpg" alt="" />
									<div className="icon style-circle">
										<i className="icon-arrow-top-right" />
									</div>
								</div>
								<div >
									<p className="tag">
										Corporate, Business, Finance
									</p>
									<p className="name-case">
										Experience Improvement Increased
									</p>
								</div>
							</Link>
							<Link href="/#" className="btn-case next">
								<div >
									<p className="tag">
										Corporate, Business, Finance
									</p>
									<p className="name-case">
										Digital Transformation for Business
									</p>
								</div>
								<div className="image-wrap">
									<div className="icon style-circle">
										<i className="icon-arrow-top-right" />
									</div>
									<Image
										width="0"
										height="0"
										sizes="100vw"
										style={{ width: "100%", height: "auto" }}
										src="/images/section/next-case.jpg" alt="" />
								</div>
							</Link>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
