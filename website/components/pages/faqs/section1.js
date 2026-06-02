'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Section1() {
	const [isAccordion, setIsAccordion] = useState(1)

	const handleAccordion = (key) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}
	return (
		<>

			<section className="s-page-faq">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-8">
							<div className="content">
								<p className="s-sub-title">
									<i className="icon-angles-right moveLeftToRight" />
									faqs
								</p>
								<p className="s-title mb-50 text-anime-wave">
									Frequently Asked
									<span>
										Questions
									</span>
								</p>
								<span className="line" />
								<p className="title text-anime-style-2">
									General Questions
								</p>
								<div className="tf-accordion style-4 style-2 accordion mb-70" id="accordionExample">
									<div className="accordion-item">
										<h2 className="accordion-header" onClick={() => handleAccordion(1)}>
											<button className={`accordion-button ${isAccordion === 1 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
												What types of businesses do you work with?
											</button>
										</h2>
										<div id="collapseOne" className={`accordion-collapse collapse ${isAccordion === 1 ? 'show' : ''}`} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												We focus on small and mid-sized organizations across the Upstate — typically 10 to 250 employees — with the deepest experience in manufacturing and their supplier networks, professional services like law and accounting firms, healthcare and dental practices, and logistics and distribution along the I-85 corridor.
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" onClick={() => handleAccordion(2)}>
											<button className={`accordion-button ${isAccordion === 2 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
												What does a managed IT provider actually do?
											</button>
										</h2>
										<div id="collapseTwo" className={`accordion-collapse collapse ${isAccordion === 2 ? 'show' : ''}`} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												Think of us as your outsourced IT department. We monitor and maintain your computers, servers, networks, and cloud for a flat monthly fee — keeping everything patched, secure, and backed up, fixing problems when they come up, and planning ahead so technology stops getting in your team's way.
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" onClick={() => handleAccordion(3)}>
											<button className={`accordion-button ${isAccordion === 3 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
												How is this different from break-fix or having a “computer guy”?
											</button>
										</h2>
										<div id="collapseThree" className={`accordion-collapse collapse ${isAccordion === 3 ? 'show' : ''}`} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												Break-fix waits for things to break and bills you by the hour, which means your provider only makes money when something goes wrong. Managed services flips that: one predictable fee, and we're rewarded for keeping your systems quiet and stable. You also get a whole team — help desk, security, cloud — instead of a single person who can be out sick or overloaded.
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" onClick={() => handleAccordion(4)}>
											<button className={`accordion-button ${isAccordion === 4 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
												How much do managed IT services cost?
											</button>
										</h2>
										<div id="collapseFour" className={`accordion-collapse collapse ${isAccordion === 4 ? 'show' : ''}`} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												Most Upstate businesses land between roughly $125 and $300 per user per month, depending on how many people you have, how complex your environment is, and your security and compliance needs. We price per user so the cost is predictable and scales cleanly as you grow, and we give you a clear line-item breakdown — no vague all-in number that hides what's included.
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" onClick={() => handleAccordion(5)}>
											<button className={`accordion-button ${isAccordion === 5 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
												Are there long-term contracts or surprise bills?
											</button>
										</h2>
										<div id="collapseFive" className={`accordion-collapse collapse ${isAccordion === 5 ? 'show' : ''}`} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												We keep terms straightforward and put everything in writing up front. Your monthly fee covers the services in your plan, and we tell you in plain language what's included and what would ever cost extra — so there's no bill shock after an incident or an after-hours call.
											</div>
										</div>
									</div>
								</div>
								<span className="line" />
								<p className="title text-anime-style-2">
									Privacy Policy
								</p>
								<div className="tf-accordion style-4 style-2 accordion" id="accordionExample2">
									<div className="accordion-item">
										<h2 className="accordion-header" onClick={() => handleAccordion(6)}>
											<button className={`accordion-button ${isAccordion === 6 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
												How fast do you respond when something breaks?
											</button>
										</h2>
										<div id="collapseOne1" className={`accordion-collapse collapse ${isAccordion === 6 ? 'show' : ''}`} data-bs-parent="#accordionExample2">
											<div className="accordion-body">
												Most issues are handled remotely the same business day, and many within an hour. We monitor your systems around the clock, so we often catch and fix problems before you notice them. When something needs hands on it, we're based in Spartanburg and come on-site across the Upstate.
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" onClick={() => handleAccordion(7)}>
											<button className={`accordion-button ${isAccordion === 7 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo1" aria-expanded="false" aria-controls="collapseTwo1">
												Do you handle cybersecurity?
											</button>
										</h2>
										<div id="collapseTwo1" className={`accordion-collapse collapse ${isAccordion === 7 ? 'show' : ''}`} data-bs-parent="#accordionExample2">
											<div className="accordion-body">
												Yes — security is built into every plan, not sold as an afterthought. That includes endpoint protection, email security, patching, multi-factor authentication, employee awareness, and monitored backups so you can recover quickly from ransomware or hardware failure. For regulated clients we also help with HIPAA and other compliance requirements.
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" onClick={() => handleAccordion(8)}>
											<button className={`accordion-button ${isAccordion === 8 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree1" aria-expanded="false" aria-controls="collapseThree1">
												Can you really help us use AI safely?
											</button>
										</h2>
										<div id="collapseThree1" className={`accordion-collapse collapse ${isAccordion === 8 ? 'show' : ''}`} data-bs-parent="#accordionExample2">
											<div className="accordion-body">
												This is where we stand apart from most local providers. We help businesses adopt tools like Microsoft Copilot, Anthropic's Claude, and ChatGPT with the right guardrails — clear policies, data protection, and staff training — so your team gets hours back each week without putting sensitive information at risk.
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" onClick={() => handleAccordion(9)}>
											<button className={`accordion-button ${isAccordion === 9 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour1" aria-expanded="false" aria-controls="collapseFour1">
												What if we already have someone handling IT internally?
											</button>
										</h2>
										<div id="collapseFour1" className={`accordion-collapse collapse ${isAccordion === 9 ? 'show' : ''}`} data-bs-parent="#accordionExample2">
											<div className="accordion-body">
												That's common, and we work alongside internal staff all the time. We can take the after-hours load, the security and backup monitoring, and the bigger projects off their plate — a co-managed arrangement that makes your in-house person more effective instead of replacing them.
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" onClick={() => handleAccordion(10)}>
											<button className={`accordion-button ${isAccordion === 10 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive1" aria-expanded="false" aria-controls="collapseFive1">
												How do we get started?
											</button>
										</h2>
										<div id="collapseFive1" className={`accordion-collapse collapse ${isAccordion === 10 ? 'show' : ''}`} data-bs-parent="#accordionExample2">
											<div className="accordion-body">
												It starts with a free assessment. We review your current systems, security, and backups, then walk you through what we found and what we'd recommend — no obligation. Call 864-574-3811, email hello@sidestreet.tech, or book a time directly through the site.
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="tf-sidebar">
								<div className="sb-item sb-contact mb-30">
									<div className="sb-content">
										<p className="s-title style-2 mb-30 text-anime-wave">
											Have Any Questions <br />
											<span>
												On your Minds!
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
								<div className="sb-item sb-service">
									<div className="tf-overlay" />
									<div className="image">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/blog/service-sidebar.jpg" alt="" />
									</div>
									<div className="content">
										<p className="font-main-2 text-anime-wave">
											Professional &amp; Experience Business
											<span>
												Services
											</span>
										</p>
										<Link href="/our-service" className="tf-btn text-anime-style-1">
											Get Consultation
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
