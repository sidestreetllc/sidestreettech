'use client'
import HubspotForm from "@/components/elements/HubspotForm"
export default function Section9() {
	return (
		<>

			<section className="s-contact">
				<div className="tf-container ">
					<div className="row">
						<div className="col-lg-12">
							<div className="content-wrap">
								<div className="content-left">
									<p className="s-sub-title mb-17">
										<i className="icon-angles-right moveLeftToRight" />
										get in touch
									</p>
									<p className="s-title text-anime-wave-right">
										Ready to Get Free <span>
											Consultation ?
										</span>
									</p>
									<ul className="list ">
										<li className="wow fadeInUp" data-wow-delay="0s">
											<p className="cap">Mailing Address</p>
											<p className="infor">
												P.O. Box 644, <br />
												Spartanburg, SC 29304
											</p>
										</li>
										<li className="wow fadeInUp" data-wow-delay="0.2s">
											<p className="cap">Contact Us</p>
											<p className="infor">
												hello@sidestreet.tech <br />
												864-574-3811
											</p>
										</li>
									</ul>
								</div>
								<div className="content-right">
									<p className="title mb-30 text-center font-main-2">
										Request a Free Assessment
									</p>
									<HubspotForm />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
