
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
											Tell us a bit about your business and what you need. We'll get back to you within one business day.
										</p>
										<form action="#" className="form-comment style-3">
											<div className="cols mb-20">
												<fieldset>
													<input type="text" placeholder="Name" required />
												</fieldset>
												<fieldset>
													<input type="number" placeholder="Phone" required />
												</fieldset>
											</div>
											<div className="cols mb-20">
												<fieldset>
													<input type="email" placeholder="Email" required />
												</fieldset>
												<fieldset>
													<input type="text" placeholder="Subject" required />
												</fieldset>
											</div>
											<div className="cols mb-20">
												<fieldset>
													<textarea placeholder="Message" />
												</fieldset>
											</div>
											<div className="checkbox-item mb-30">
												<label>
													<span className="text">Save my name, email, and website in this browser
														for
														the next time I comment.</span>
													<input type="checkbox" className="checkbox-item" defaultChecked />
													<span className="btn-checkbox" />
												</label>
											</div>
											<div className="bot">
												<button type="submit" className="tf-btn text-anime-style-1">
													Send Message
													<i className="icon-chevron-right" />
												</button>
											</div>
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
