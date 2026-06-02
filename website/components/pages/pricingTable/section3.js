'use client'
import { useState } from 'react'
import Link from 'next/link'
export default function Section3() {
	const [isAccordion, setIsAccordion] = useState(1)

	const handleAccordion = (key) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}
	return (
		<>

			<section className="s-faq-3 tf-spacing-2">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-5">
							<div className="content">
								<p className="s-sub-title mb-15">
									<i className="icon-angles-right moveLeftToRight" />
									faqs
								</p>
								<p className="s-title mb-30 text-anime-wave">
									Frequently Asked
									<span>
										Querstions
									</span>
								</p>
								<p className="text mb-30">
									Straight answers on what managed IT costs and what is included — so you can compare proposals and budget with confidence.
								</p>
								<Link href="/faqs" className="tf-btn small style-4 text-anime-style-1">
									Get A Quote
									<i className="icon-chevron-right" />
								</Link>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="tf-accordion style-4 style-2 accordion" id="accordionExample">
								<div className="accordion-item">
									<h2 className="accordion-header" onClick={() => handleAccordion(1)}>
										<button className={`accordion-button ${isAccordion === 1 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
											How is your pricing structured?
										</button>
									</h2>
									<div id="collapseOne" className={`accordion-collapse collapse ${isAccordion === 1 ? 'show' : ''}`} data-bs-parent="#accordionExample">
										<div className="accordion-body">
											We price per user, per month, so your cost is predictable and scales cleanly as your team changes. Most Upstate businesses land between roughly $125 and $300 per user depending on environment complexity, security needs, and compliance requirements. You always get a line-item breakdown of what's included.
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h2 className="accordion-header" onClick={() => handleAccordion(2)}>
										<button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
											What's included in the monthly fee?
										</button>
									</h2>
									<div id="collapseTwo" className={`accordion-collapse collapse ${isAccordion === 2 ? 'show' : ''}`} data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Every plan covers help desk support, proactive monitoring and patching, endpoint and email security, Microsoft 365 or Google Workspace administration, and monitored backups. Higher tiers add cloud architecture, 24/7 security monitoring, compliance support, and AI integration. We tell you up front what's in your plan and what would ever cost extra.
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h2 className="accordion-header" onClick={() => handleAccordion(3)}>
										<button className={`accordion-button ${isAccordion === 2 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
											Are there setup or onboarding fees?
										</button>
									</h2>
									<div id="collapseThree" className={`accordion-collapse collapse ${isAccordion === 3 ? 'show' : ''}`} data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Most engagements include a one-time onboarding to document your environment, tighten security, and get monitoring in place. We scope it transparently based on your size and complexity and quote it before you commit â no surprises.
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h2 className="accordion-header" onClick={() => handleAccordion(4)}>
										<button className={`accordion-button ${isAccordion === 3 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
											Do I have to sign a long-term contract?
										</button>
									</h2>
									<div id="collapseFour" className={`accordion-collapse collapse ${isAccordion === 4 ? 'show' : ''}`} data-bs-parent="#accordionExample">
										<div className="accordion-body">
											We keep terms clear and reasonable. We'd rather earn your business every month by keeping your systems running well than lock you into something you can't leave. We'll walk through the agreement line by line before anything is signed.
										</div>
									</div>
								</div>
								<div className="accordion-item last">
									<h2 className="accordion-header" onClick={() => handleAccordion(5)}>
										<button className={`accordion-button ${isAccordion === 4 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
											What if my team grows or shrinks?
										</button>
									</h2>
									<div id="collapseFive" className={`accordion-collapse collapse ${isAccordion === 5 ? 'show' : ''}`} data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Per-user pricing means your bill tracks your actual headcount. Add people as you hire, and the cost adjusts â no renegotiating the whole contract because you opened a second location or brought on a seasonal crew.
										</div>
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
