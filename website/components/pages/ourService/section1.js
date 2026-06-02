
import Image from 'next/image'
import Link from 'next/link'
export default function Section1() {
	return (
		<>

			<section className="s-we-do tf-spacing-3">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="heading mb-70">
								<p className="s-sub-title mb-15 justify-center">
									<i className="icon-angles-right moveLeftToRight" />
									what we do
								</p>
								<p className="s-title text-center text-anime-style-2">
									Everything Your Business Needs <br />
									From One Local
									<span>
										Partner
									</span>
								</p>
							</div>
							<div className="feature-group overflow-hidden">
								<div className="box-icon style-8 ">
									<div className="icon">
										<i className="flaticon-workflow" />
									</div>
									<Link href="/service-details" className="title">
										Managed IT &amp;
										Helpdesk
									</Link>
									<span className="line mb-30" />
									<p className="text">
										Around-the-clock monitoring, patching, and same-day support — a full IT department for one predictable monthly fee.
									</p>
									<div className="image">
										<Link href="/service-details">
											<Image
												width="0"
												height="0"
												sizes="100vw"
												style={{ width: "100%", height: "100%" }}
												src="/images/section/feature.jpg" data-src="/images/section/feature.jpg" alt="" className="lazyload" />
										</Link>
									</div>
								</div>
								<div className="box-icon style-8 ">
									<div className="icon">
										<i className="flaticon-workflow" />
									</div>
									<Link href="/service-details" className="title">
										Cloud &amp;
										Productivity
									</Link>
									<span className="line mb-30" />
									<p className="text">
										Microsoft 365, Google Workspace, and AWS — designed, secured, and managed so your team can work from anywhere.
									</p>
									<div className="image">
										<Link href="/service-details">
											<Image
												width="0"
												height="0"
												sizes="100vw"
												style={{ width: "100%", height: "100%" }}
												src="/images/section/feature.jpg" data-src="/images/section/feature.jpg" alt="" className="lazyload" />
										</Link>
									</div>
								</div>
								<div className="box-icon style-8 ">
									<div className="icon">
										<i className="flaticon-team" />
									</div>
									<Link href="/service-details" className="title">
										AI Integration &amp; Automation
									</Link>
									<span className="line mb-30" />
									<p className="text">
										Put AI to work safely — Copilot, Claude, and ChatGPT with the guardrails and training to protect your data.
									</p>
									<div className="image">
										<Link href="/service-details">
											<Image
												width="0"
												height="0"
												sizes="100vw"
												style={{ width: "100%", height: "100%" }}
												src="/images/section/feature.jpg" data-src="/images/section/feature.jpg" alt="" className="lazyload" />
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
