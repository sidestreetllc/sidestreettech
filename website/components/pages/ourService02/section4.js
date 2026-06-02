'use client'
import CounterUp from '@/components/elements/CounterUp'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
export default function Section4() {
	const [isAccordion, setIsAccordion] = useState(1)

	const handleAccordion = (key) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}
	return (
		<>

			<section className="s-faq-2 tf-spacing-1">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-5">
							<div className="content">
								<p className="s-sub-title">
									<i className="icon-angles-right moveLeftToRight" />
									FAQs
								</p>
								<p className="s-title mb-40 text-anime-wave">
									Asked
									<span>
										Questions
									</span>
								</p>
								<div className="tf-accordion style-3 accordion" id="accordionExample">
									<div className="accordion-item">
										<h2 className="accordion-header" onClick={() => handleAccordion(1)}>
											<button className={isAccordion == 1 ? "accordion-button collapsed" : "accordion-button"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
												What is managed IT?
											</button>
										</h2>
										<div id="collapseOne" className={isAccordion == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												Managed IT means we run your technology for a flat monthly fee — monitoring, patching, security, backups, and help desk — instead of you paying by the hour when something breaks. You get a whole team and predictable costs.
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" onClick={() => handleAccordion(2)}>
										<button className={isAccordion == 2 ? "accordion-button collapsed" : "accordion-button"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
												How does onboarding work?
											</button>
										</h2>
										<div id="collapseTwo" className={isAccordion == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												We start with a free assessment of your systems, security, and backups, lay out a clear roadmap, then deploy monitoring and security and bring your team on with little to no disruption.
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" onClick={() => handleAccordion(3)}>
										<button className={isAccordion == 3 ? "accordion-button collapsed" : "accordion-button"}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
												What types of businesses do you work with?
											</button>
										</h2>
										<div id="collapseThree" className={isAccordion == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												Mostly Upstate organizations from 10 to 250 employees — manufacturers and their suppliers, professional services firms, healthcare and dental practices, and logistics companies along the I-85 corridor.
											</div>
										</div>
									</div>
									<div className="accordion-item ">
										<h2 className="accordion-header" onClick={() => handleAccordion(4)}>
										<button className={isAccordion == 4 ? "accordion-button collapsed last" : "accordion-button last"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
												Do you provide cybersecurity and backups?
											</button>
										</h2>
										<div id="collapseFour" className={isAccordion == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												Yes — security and monitored backups are built into every plan, including endpoint and email protection, MFA, patching, staff training, and a tested recovery plan.
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 offset-lg-1">
							<div className="image-wrap">
								<div className="image">
									<Image
										width="0"
										height="0"
										sizes="100vw"
										style={{ width: "100%", height: "auto" }}
										src="/images/section/faq-2.jpg" data-src="/images/section/faq-2.jpg" alt="" className="lazyload" />
								</div>
								<div className="item-customer style-3 rellax default" data-rellax-speed="0.3">
									<Link href="/#" className="mb-15">10m+ Customer</Link>
									<ul className="list-author mb-40">
										<li>
											<Image
												width="0"
												height="0"
												sizes="100vw"
												style={{ width: "100%", height: "auto" }}
												src="/images/avatar/testimonial-author-1.jpg" alt="" />
										</li>
										<li>
											<Image
												width="0"
												height="0"
												sizes="100vw"
												style={{ width: "100%", height: "auto" }}
												src="/images/avatar/customer-1.jpg" alt="" />
										</li>
										<li>
											<Image
												width="0"
												height="0"
												sizes="100vw"
												style={{ width: "100%", height: "auto" }}
												src="/images/avatar/customer-3.jpg" alt="" />
										</li>
										<li>
											<Image
												width="0"
												height="0"
												sizes="100vw"
												style={{ width: "100%", height: "auto" }}
												src="/images/avatar/customer-4.jpg" alt="" />
										</li>
									</ul>
									<span className="line mb-30" />
									<div className="wg-counter style-6">
										<div className="odometer style-6"><CounterUp count={10} /></div>
										<span className="sub-odo">%</span>
									</div>
									<p>
										Customers are Satisfied with the Services
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
