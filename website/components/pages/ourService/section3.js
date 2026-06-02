
import Image from 'next/image'
import Link from 'next/link'
export default function Section3() {
	return (
		<>

			<section className="s-service-4 tf-spacing-1">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="heading mb-70">
								<p className="s-sub-title mb-15 justify-center">
									<i className="icon-angles-right moveLeftToRight" />
									managed IT services
								</p>
								<p className="s-title text-center text-anime-wave">
									One Partner for Your <br />
									Whole Technology Stack
									<span>
										and sales
									</span>
								</p>
							</div>
							<div className="grid-layout-3">
								<div className="card-service-2 tf-hover ">
									<div className="image hover-1 hover-14">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/widget/card-service-5.jpg" data-src="/images/widget/card-service-5.jpg" alt="" className="lazyload" />
									</div>
									<div className="content">
										<div className="icon">
											<i className="flaticon-data-management" />
										</div>
										<Link href="/service-details" className="title fw-7">
											Managed IT & Helpdesk
										</Link>
										<p className="text">
											Help desk, remote monitoring, patching, and updates — plus vendor and ISP management. Your full IT department on a flat monthly fee, with someone to call when you need it.
										</p>
										<Link href="/service-details" className="tf-btn-readmore style-3">
											Read More
											<i className="icon-chevron-right" />
										</Link>
									</div>
								</div>
								<div className="card-service-2 tf-hover ">
									<div className="image hover-1 hover-14">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/widget/card-service-6.jpg" data-src="/images/widget/card-service-6.jpg" alt="" className="lazyload" />
									</div>
									<div className="content">
										<div className="icon">
											<i className="flaticon-human-resources" />
										</div>
										<Link href="/service-details" className="title fw-7">
											Cybersecurity
										</Link>
										<p className="text">
											Ransomware protection, layered endpoint and email security, MFA, and staff training — with risk management built for small and mid-sized businesses.
										</p>
										<Link href="/service-details" className="tf-btn-readmore style-3">
											Read More
											<i className="icon-chevron-right" />
										</Link>
									</div>
								</div>
								<div className="card-service-2 tf-hover ">
									<div className="image hover-1 hover-14">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/widget/card-service-7.jpg" data-src="/images/widget/card-service-7.jpg" alt="" className="lazyload" />
									</div>
									<div className="content">
										<div className="icon">
											<i className="flaticon-target-1
                                      " />
										</div>
										<Link href="/service-details" className="title fw-7">
											Cloud & Microsoft 365
										</Link>
										<p className="text">
											Microsoft 365, Google Workspace, Google Cloud, and AWS — plus cloud communications and Apple device support (rare to find locally), set up and managed so your team works from anywhere.
										</p>
										<Link href="/service-details" className="tf-btn-readmore style-3">
											Read More
											<i className="icon-chevron-right" />
										</Link>
									</div>
								</div>
								<div className="card-service-2 tf-hover ">
									<div className="image hover-1 hover-14">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/widget/card-service-8.jpg" data-src="/images/widget/card-service-8.jpg" alt="" className="lazyload" />
									</div>
									<div className="content">
										<div className="icon">
											<i className="flaticon-return-of-investment" />
										</div>
										<Link href="/service-details" className="title fw-7">
											Backup & Disaster Recovery
										</Link>
										<p className="text">
											Server and endpoint backups, tested on a schedule, with a clear recovery plan — so a failure or outage is a quick restore, not a business-ending event.
										</p>
										<Link href="/service-details" className="tf-btn-readmore style-3">
											Read More
											<i className="icon-chevron-right" />
										</Link>
									</div>
								</div>
								<div className="card-service-2 tf-hover ">
									<div className="image hover-1 hover-14">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/widget/card-service-9.jpg" data-src="/images/widget/card-service-9.jpg" alt="" className="lazyload" />
									</div>
									<div className="content">
										<div className="icon">
											<i className="flaticon-viral-marketing
                                      " />
										</div>
										<Link href="/service-details" className="title fw-7">
											AI Integration & Automation
										</Link>
										<p className="text">
											Adopt Copilot, Claude, and ChatGPT safely, automate repetitive work, and build custom solutions — with the policies, data protection, and training to do it right.
										</p>
										<Link href="/service-details" className="tf-btn-readmore style-3">
											Read More
											<i className="icon-chevron-right" />
										</Link>
									</div>
								</div>
								<div className="card-service-2 tf-hover ">
									<div className="image hover-1 hover-14">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/widget/card-service-10.jpg" data-src="/images/widget/card-service-10.jpg" alt="" className="lazyload" />
									</div>
									<div className="content">
										<div className="icon">
											<i className="flaticon-solution" />
										</div>
										<Link href="/service-details" className="title fw-7">
											vCIO & IT Strategy
										</Link>
										<p className="text">
											A senior technology advisor in your corner — budgeting, roadmaps, and quarterly reviews — plus media and production technology integration and support when you need it.
										</p>
										<Link href="/service-details" className="tf-btn-readmore style-3">
											Read More
											<i className="icon-chevron-right" />
										</Link>
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
