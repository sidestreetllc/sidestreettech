
import Link from 'next/link'
export default function Section1() {
	return (
		<>

			<section className="s-pricing tf-spacing-3">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="heading mb-70">
								<p className="s-sub-title mb-18 justify-center">
									<i className="icon-angles-right moveLeftToRight" />
									pricing package
								</p>
								<p className="s-title text-center text-anime-style-2">
									Flexible Pricing Packages for Your <br /> Business
									<span>
										Needs
									</span>
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="wg-pricing ">
								<div className="plan">
									<p>Essential</p>
								</div>
								<div className="price-wrap mb-20">
									<p className="price">
										$125<span>/user / month</span>
									</p>
								</div>
								<p className="text mb-25">
									We provide a range of managed IT packages
									tailored to your unique needs.
								</p>
								<Link href="/#" className="tf-btn style-3 full mb-35">
									Choose Package
									<i className="icon-chevron-right" />
								</Link>
								<ul className="benefit-list">
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											Help desk & remote support
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											Proactive monitoring & patching
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											Endpoint & email security
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-xmark" />
										</div>
										<p>
											Microsoft 365 or Google Workspace admin
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-xmark" />
										</div>
										<p>
											Monitored backups
										</p>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="wg-pricing style-2 ">
								<div className="rating-group">
									<i className="icon-star" />
									<i className="icon-star" />
									<i className="icon-star" />
								</div>
								<div className="plan">
									<p>Complete</p>
								</div>
								<div className="price-wrap mb-20">
									<p className="price">
										$199
										<span> /user / month</span>
									</p>
								</div>
								<p className="text mb-25">
									We provide a range of managed IT packages
									tailored to your unique needs.
								</p>
								<Link href="/#" className="tf-btn style-3 full mb-35">
									Choose Package
									<i className="icon-chevron-right" />
								</Link>
								<ul className="benefit-list">
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											Everything in Essential
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											24/7 monitoring & faster response
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											Cloud & network management
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											Multi-factor authentication & security training
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-xmark" />
										</div>
										<p>
											Quarterly technology reviews
										</p>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="wg-pricing last ">
								<div className="plan">
									<p>Complete + AI</p>
								</div>
								<div className="price-wrap mb-20">
									<p className="price">
										$275
										<span> /user / month</span>
									</p>
								</div>
								<p className="text mb-25">
									We provide a range of managed IT packages
									tailored to your unique needs.
								</p>
								<Link href="/#" className="tf-btn style-3 full mb-35">
									Choose Package
									<i className="icon-chevron-right" />
								</Link>
								<ul className="benefit-list">
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											Everything in Complete
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											Safe AI rollout (Copilot, Claude, ChatGPT)
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											AI policy, guardrails & staff training
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											Workflow automation
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											Priority senior-led support
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
