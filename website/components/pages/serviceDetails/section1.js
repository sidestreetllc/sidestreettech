'use client'
import { useState } from 'react'
import CounterUp from '@/components/elements/CounterUp'
import Image from 'next/image'
import Link from 'next/link'
export default function Section1() {
	const [isAccordion, setIsAccordion] = useState(1)

	const handleAccordion = (key) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}
	return (
		<>

			<section className="s-service-detail">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-8">
							<div className="content">
								<div className="entry-image tf-hover mb-40">
									<div className="hover-1">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/section/service-detail.jpg" data-src="/images/section/service-detail.jpg" alt="" className="lazyload" />
									</div>
								</div>
								<p className="title s1 mb-10 text-anime-wave">
									Managed IT & Helpdesk Support
								</p>
								<p className="text s1 mb-25">
									We run your day-to-day IT so your team doesn't have to. From the help desk to the server room, we keep your technology monitored, patched, secure, and backed up — for one predictable monthly fee. When something needs attention, you get a local team that already knows your environment and picks up the phone.
								</p>
								<p className="text s2 mb-40">We start with a full assessment of your systems, security, and backups — so we
									understand exactly what you're running and where the risks and quick wins are
									before we take anything over.
									strategies
								</p>
								<h3 className="title-2 s1 text-anime-wave">
									What's Included:
								</h3>
								<p className="text s3">We focus on keeping your systems quiet and stable — fixing the root cause, not just
									the symptom — so technology stops interrupting your business.
								</p>
								<ul className="list-1">
									<li>
										<div className="number">
											<p>
												1
											</p>
										</div>
										<div >
											<h6>
												<Link href="/#">Help Desk & Remote Support</Link>
											</h6>
											<p>
												Real people who know your setup, reachable by call, ticket, or chat. Most issues are resolved remotely the same business day — many within the hour.
											</p>
										</div>
									</li>
									<li>
										<div className="number">
											<p>
												2
											</p>
										</div>
										<div >
											<h6>
												<Link href="/#">Proactive Monitoring & Patching</Link>
											</h6>
											<p>
												We watch your systems around the clock and keep everything patched and up to date, so problems get caught and fixed before they ever reach your team.
												a compelling
											</p>
										</div>
									</li>
									<li>
										<div className="number">
											<p>
												3
											</p>
										</div>
										<div >
											<h6>
												<Link href="/#">Security & Backup</Link>
											</h6>
											<p>
												Endpoint and email protection, multi-factor authentication, and monitored backups — layered security that keeps you protected and recoverable.
												(pay-per-click) campaigns.
											</p>
										</div>
									</li>
								</ul>
								<div className="entry-image-2 mb-40">
									<div className="image"><Image
										width="0"
										height="0"
										sizes="100vw"
										style={{ width: "100%", height: "auto" }}
										src="/images/section/service-detail-2.jpg" data-src="/images/section/service-detail-2.jpg" alt="" className="lazyload" />
									</div>
									<div className="experience">
										<div className="wg-counter style-9">
											<div className="odometer style-9"><CounterUp count={10} /></div>
											<span className="sub-odo">+</span>
										</div>
										<h4 className="sub-exp">
											Our Experience <br />
											Team Members
										</h4>
									</div>
								</div>
								<h3 className="title-2 s2 mb-15 text-anime-wave">
									Our Easy Working Process
								</h3>
								<p className="text s4 mb-50">
									This gives you clear, documented visibility into your IT — what you have, how it's
									protected, and what we recommend next.
									services in a way that is
									client-focused and actionable for potential businesses looking to grow their
									your current setup.
								</p>
								<ul className="list-2 mb-70">
									<li>
										<p className="step-number">Step 01</p>
										<h6 className="caption">
											Discovery & Assessment
										</h6>
										<div className="icon">
											<i className="icon-check-2" />
										</div>
										<p className="text">
											We learn your business and audit your systems, security, and backups before taking anything over.
										</p>
									</li>
									<li>
										<p className="step-number"> Step 02</p>
										<h6 className="caption">
											Roadmap & Plan
										</h6>
										<div className="icon">
											<i className="icon-check-2" />
										</div>
										<p className="text">
											We document what we found and lay out a clear, prioritized plan — explained in plain language.
										</p>
									</li>
									<li>
										<p className="step-number">Step 03</p>
										<h6 className="caption">
											Implementation
										</h6>
										<div className="icon">
											<i className="icon-check-2" />
										</div>
										<p className="text">
											We deploy monitoring, security, and backups and onboard your team — then keep improving, continuously
											performance.
										</p>
									</li>
								</ul>
								<h3 className="title-2 s3 mb-15 text-anime-wave">
									Frequently Asked Questions
								</h3>
								<p className="text s5 mb-40">
									We offer a wide range of services, including strategic planning, operations
									managed IT, cloud, cybersecurity, and AI integration
									strategy, digital transformation, market research, and organizational development.
									Our goal is to provide tailored
									solutions that help businesses grow, streamline.
								</p>
								<div className="tf-accordion style-4 style-2 accordion" id="accordionExample">
									<div className="accordion-item">
										<h2 className="accordion-header"onClick={() => handleAccordion(1)}>
											<button className={`accordion-button ${isAccordion === 1 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
												What is managed IT?
											</button>
										</h2>
										<div id="collapseOne" className={`accordion-collapse collapse ${isAccordion === 1 ? 'show' : ''}`} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												Our process typically starts with a discovery phase, where we assess
												your business needs and goals, we develop a customized strategy,
												followed by implementation and continuous monitoring.
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header"onClick={() => handleAccordion(2)}>
											<button className={`accordion-button ${isAccordion === 2 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
												How does the managed IT process work?
											</button>
										</h2>
										<div id="collapseTwo" className={`accordion-collapse collapse ${isAccordion === 2 ? 'show' : ''}`} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												Our process typically starts with a discovery phase, where we assess
												your business needs and goals, we develop a customized strategy,
												followed by implementation and continuous monitoring.
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header"onClick={() => handleAccordion(3)}>
											<button className={`accordion-button ${isAccordion === 3 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
												What types of businesses do you work with?
											</button>
										</h2>
										<div id="collapseThree" className={`accordion-collapse collapse ${isAccordion === 3 ? 'show' : ''}`} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												Our process typically starts with a discovery phase, where we assess
												your business needs and goals, we develop a customized strategy,
												followed by implementation and continuous monitoring.
											</div>
										</div>
									</div>
									<div className="accordion-item last">
										<h2 className="accordion-header"onClick={() => handleAccordion(4)}>
											<button className={`accordion-button ${isAccordion === 4 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
												How much do your managed IT services cost?
											</button>
										</h2>
										<div id="collapseFour" className={`accordion-collapse collapse ${isAccordion === 4 ? 'show' : ''}`} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												Our process typically starts with a discovery phase, where we assess
												your business needs and goals, we develop a customized strategy,
												followed by implementation and continuous monitoring.
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="tf-sidebar">
								<div className="sb-item mb-20">
									<div className="sb-title">
										<i className="icon-repair fs-20 color-main-black" />
										<h5 className="title">Popular Services</h5>
									</div>
									<div className="sb-content sb-category">
										<ul className="category-list">
											<li>
												<Link href="/#">
													Managed IT & Helpdesk
													<i className="icon-chevron-right" />
												</Link>
											</li>
											<li>
												<Link href="/#">
													Cybersecurity
													<i className="icon-chevron-right" />
												</Link>
											</li>
											<li>
												<Link href="/#">
													Cloud & Microsoft 365
													<i className="icon-chevron-right" />
												</Link>
											</li>
											<li>
												<Link href="/#">
													Backup & Disaster Recovery
													<i className="icon-chevron-right" />
												</Link>
											</li>
											<li>
												<Link href="/#">
													AI Integration & Automation
													<i className="icon-chevron-right" />
												</Link>
											</li>
											<li>
												<Link href="/#">
													vCIO & IT Strategy
													<i className="icon-chevron-right" />
												</Link>
											</li>
										</ul>
									</div>
								</div>
								<div className="sb-item mb-20">
									<div className="sb-title">
										<i className="icon-house fs-20 color-main-black" />
										<h5 className="title">Company Information</h5>
									</div>
									<div className="sb-content sb-download">
										<ul className="btn-down-list">
											<li>
												<Link href="/#" className="btn-download">Download pdf
													<div className="icon">
														<i className="icon-file-pdf">
														</i>
													</div>
												</Link>
											</li>
											<li>
												<Link href="/#" className="btn-download style-2">
													Download Doc
													<div className="icon">
														<i className="icon-file">
														</i>
													</div>
												</Link>
											</li>
										</ul>
									</div>
								</div>
								<div className="sb-item sb-contact">
									<div className="sb-content">
										<p className="s-title style-2 mb-30 text-anime-wave">
											Ready to Get Free <br />
											<span>
												Consultation ?
											</span>
										</p>
										<form action="#" className="form-contact bg-transparent style-3">
											<div className="cols mb-10">
												<fieldset>
													<input type="text" placeholder="Full Name" required />
												</fieldset>
											</div>
											<div className="cols mb-10">
												<fieldset>
													<input type="email" placeholder="Email" required />
												</fieldset>
											</div>
											<div className="cols mb-10">
												<fieldset>
													<input type="text" placeholder="Subject" required />
												</fieldset>
											</div>
											<div className="cols mb-10">
												<fieldset>
													<textarea className="h-100px" placeholder="Write message" />
												</fieldset>
											</div>
											<button type="submit" className="tf-btn full text-anime-style-1">
												Get Consultation
												<i className="icon-chevron-right" />
											</button>
										</form>
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
