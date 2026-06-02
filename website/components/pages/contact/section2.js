'use client'
import HubspotForm from "@/components/elements/HubspotForm"
export default function Section2() {
	return (
		<>

			<section className="s-map">
				<div className="box-map">
					{/* <div id="map" className="map" /> */}
					<iframe src="https://www.google.com/maps?q=Spartanburg,SC&output=embed" height={825} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
				</div>
				<div className="content-wrap">
					<div className="tf-container">
						<div className="row">
							<div className="col-lg-8 offset-lg-4">
								<div className="content">
									<div className="comment-wrap style-2">
										<h3 className="text-anime-wave">
											Send Us a Message
										</h3>
										<p className="note mb-40">
											Call us, email us, or use the form. If you reach out during business hours, someone will get back to you the same day.
										</p>
										<HubspotForm />
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
