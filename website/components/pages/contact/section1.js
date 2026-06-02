
import Image from 'next/image'
import Link from 'next/link'
export default function Section1() {
	return (
		<>

			<section className="s-page-contact tf-spacing-1">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="content">
								<div className="wg-office tf-hover">
									<div className="entry-image hover-1 wow zoomIn">
										<div className="image">
											<Image
												width="0"
												height="0"
												sizes="100vw"
												style={{ width: "100%", height: "auto" }}
												src="/images/widget/office-1.jpg" data-src="/images/widget/office-1.jpg" className="lazyload" alt="" />
										</div>
									</div>
									<h3>
										<Link href="/#" className="name">
											Spartanburg HQ
										</Link>
									</h3>
									<p className="sub">
										Our team is ready to assist you every <br />
										step of the way ensuring
									</p>
									<span className="line" />
									<ul className="contact-infor-list style-2">
										<li>
											<Link href="https://maps.google.com/?q=Spartanburg,SC" className="infor" target="_blank">
												Downtown Spartanburg, SC 29306
											</Link>
										</li>
										<li>
											<Link href="mailto:hello@sidestreet.tech" className="infor">
												hello@sidestreet.tech
											</Link>
										</li>
										<li>
											<Link href="tel:+18647750100" className="infor">
												+1 (864) 775-0100
											</Link>
										</li>
									</ul>
								</div>
								<div className="wg-office tf-hover">
									<div className="entry-image hover-1 wow zoomIn">
										<div className="image">
											<Image
												width="0"
												height="0"
												sizes="100vw"
												style={{ width: "100%", height: "auto" }}
												src="/images/widget/office-2.jpg" data-src="/images/widget/office-2.jpg" className="lazyload" alt="" />
										</div>
									</div>
									<h3>
										<Link href="/#" className="name">
											Service Area
										</Link>
									</h3>
									<p className="sub">
										Our team is ready to assist you every <br />
										step of the way ensuring
									</p>
									<span className="line" />
									<ul className="contact-infor-list style-2">
										<li>
											<Link href="https://maps.google.com/?q=Greenville,SC" className="infor" target="_blank">
												Serving Greenville, Spartanburg & the Upstate
											</Link>
										</li>
										<li>
											<Link href="mailto:hello@sidestreet.tech" className="infor">
												hello@sidestreet.tech
											</Link>
										</li>
										<li>
											<Link href="tel:+18647750100" className="infor">
												+1 (864) 775-0100
											</Link>
										</li>
									</ul>
								</div>
								<div className="wg-office tf-hover">
									<div className="entry-image hover-1 wow zoomIn">
										<div className="image">
											<Image
												width="0"
												height="0"
												sizes="100vw"
												style={{ width: "100%", height: "auto" }}
												src="/images/widget/office-3.jpg" data-src="/images/widget/office-3.jpg" className="lazyload" alt="" />
										</div>
									</div>
									<h3>
										<Link href="/#" className="name">
											Support Desk
										</Link>
									</h3>
									<p className="sub">
										Our team is ready to assist you every <br />
										step of the way ensuring
									</p>
									<span className="line" />
									<ul className="contact-infor-list style-2">
										<li>
											<Link href="https://maps.google.com/?q=Spartanburg,SC" className="infor" target="_blank">
												Remote & on-site, Mon–Fri 8am–6pm
											</Link>
										</li>
										<li>
											<Link href="mailto:hello@sidestreet.tech" className="infor">
												hello@sidestreet.tech
											</Link>
										</li>
										<li>
											<Link href="tel:+18647750100" className="infor">
												+1 (864) 775-0100
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
