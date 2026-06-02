
import Image from 'next/image'
import Link from 'next/link'
export default function Section1() {
	return (
		<>

			<section className="s-blog-standard">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-8">
							<div className="content-section">
								<div className="article-blog-item mb-50 tf-hover">
									<div className="entry-image hover-14 hover-1">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											className="lazyload" src="/images/blog/blog-1.jpg" alt="" />
										<div className="tag-wrap">
											<p>Technology</p>
										</div>
									</div>
									<div className="entry-meta">
										<ul className="meta-list">
											<li className="entry author">
												<div className="icon">
													<i className=" icon-user" />
												</div>
												<Link href="/#">
													Joshua Kuhn
												</Link>
											</li>
											<li className="entry date">
												<div className="icon">
													<i className="icon-calendar-days" />
												</div>
												<Link href="/#">
													25 September 2024
												</Link>
											</li>
											<li className="entry comment">
												<div className="icon">
													<i className="icon-comments" />
												</div>
												<Link href="/#">
													Comments (05)
												</Link>
											</li>
										</ul>
									</div>
									<div className="entry-title">
										<p className="font-main-2 text-anime-wave">
											Cloud or On-Prem? A Straight Answer for Upstate Businesses
											Success
										</p>
									</div>
									<div className="entry-text">
										<p>
											Most small businesses don't need a server closet anymore — but “move everything to the cloud” isn't always right either. Here's how we help clients decide, and what it actually costs.
											Read more on the blog.
										</p>
									</div>
									<div className="entry-btn">
										<Link href="/blog-details" className="tf-btn small text-anime-style-1">
											Read More
											<i className="icon-chevron-right" />
										</Link>
									</div>
								</div>
								<div className="article-blog-item mb-50 tf-hover">
									<div className="entry-image hover-14 hover-1">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											className="lazyload" src="/images/blog/blog-2.jpg" alt="" />
										<div className="tag-wrap">
											<p>Technology</p>
										</div>
									</div>
									<div className="entry-meta">
										<ul className="meta-list">
											<li className="entry author">
												<div className="icon">
													<i className=" icon-user" />
												</div>
												<Link href="/#">
													Joshua Kuhn
												</Link>
											</li>
											<li className="entry date">
												<div className="icon">
													<i className="icon-calendar-days" />
												</div>
												<Link href="/#">
													25 September 2024
												</Link>
											</li>
											<li className="entry comment">
												<div className="icon">
													<i className="icon-comments" />
												</div>
												<Link href="/#">
													Comments (05)
												</Link>
											</li>
										</ul>
									</div>
									<div className="entry-title">
										<p className="font-main-2 text-anime-wave">
											Using AI Safely: A Practical Guide for Small Businesses
											Success
										</p>
									</div>
									<div className="entry-text">
										<p>
											Your team is probably already using ChatGPT. The question is whether your company data is safe. Here's how to roll out AI with the right guardrails — without slowing anyone down.
											Read more on the blog.
										</p>
									</div>
									<div className="entry-btn">
										<Link href="/blog-details" className="tf-btn small text-anime-style-1">
											Read More
											<i className="icon-chevron-right" />
										</Link>
									</div>
								</div>
								<div className="block-quote mb-50">
									<p className="cite font-main-2">
										"Technology should make your team faster, not get in their way. That’s the whole job."
										and guiding ."
									</p>
									<div className="bot">
										<Link href="/#" className="author-name hover-text-main-yellow">
											Joshua Kuhn
										</Link>
									</div>
								</div>
								<div className="article-blog-item mb-50 tf-hover">
									<div className="entry-image hover-14 hover-1">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											className="lazyload" src="/images/blog/blog-3.jpg" alt="" />
										<div className="tag-wrap">
											<p>Technology</p>
										</div>
									</div>
									<div className="entry-meta">
										<ul className="meta-list">
											<li className="entry author">
												<div className="icon">
													<i className=" icon-user" />
												</div>
												<Link href="/#">
													Joshua Kuhn
												</Link>
											</li>
											<li className="entry date">
												<div className="icon">
													<i className="icon-calendar-days" />
												</div>
												<Link href="/#">
													25 September 2024
												</Link>
											</li>
											<li className="entry comment">
												<div className="icon">
													<i className="icon-comments" />
												</div>
												<Link href="/#">
													Comments (05)
												</Link>
											</li>
										</ul>
									</div>
									<div className="entry-title">
										<p className="font-main-2 text-anime-wave">
											Five Cybersecurity Basics Every Upstate Business Should Have
											Success
										</p>
									</div>
									<div className="entry-text">
										<p>
											You don't need an enterprise budget to be hard to hack. These five fundamentals — MFA, patching, backups, email filtering, and training — stop the vast majority of attacks.
											Read more on the blog.
										</p>
									</div>
									<div className="entry-btn">
										<Link href="/blog-details" className="tf-btn small text-anime-style-1">
											Read More
											<i className="icon-chevron-right" />
										</Link>
									</div>
								</div>
								<div className="block-quote mb-50">
									<p className="cite font-main-2">
										"Technology should make your team faster, not get in their way. That’s the whole job."
										and guiding ."
									</p>
									<div className="bot">
										<Link href="/#" className="author-name hover-text-main-yellow">
											Joshua Kuhn
										</Link>
									</div>
								</div>
								<div className="pagination-section">
									<ul>
										<li><Link href="#" className="active">1</Link></li>
										<li><Link href="/#">2</Link></li>
										<li><Link href="/#">3</Link></li>
										<li><Link href="/#">4</Link></li>
									</ul>
									<Link href="/#" className="btn-next-pagination">
										Next
										<i className="icon-chevron-right fs-12">
										</i>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="tf-sidebar">
								<div className="sb-item sb-search mb-30">
									<form action="#" className="form-sb-search">
										<fieldset>
											<input type="text" placeholder="Search here" required />
										</fieldset>
										<button type="submit" className="btn-search">
											<i className="icon-search" />
										</button>
									</form>
								</div>
								<div className="sb-item mb-30">
									<div className="sb-title">
										<i className="icon-bolt fs-20 color-main-black" />
										<h5 className="title">
											Category
										</h5>
									</div>
									<div className="sb-content sb-category">
										<ul className="category-list">
											<li>
												<Link href="/#">
													Managed IT
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
													Managed IT
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
													AI & Automation
													<i className="icon-chevron-right" />
												</Link>
											</li>
											<li>
												<Link href="/#">
													Managed IT
													<i className="icon-chevron-right" />
												</Link>
											</li>
										</ul>
									</div>
								</div>
								<div className="sb-item mb-30">
									<div className="sb-title">
										<i className="icon-bolt fs-20 color-main-black" />
										<h5 className="title">
											Recent News
										</h5>
									</div>
									<div className="sb-content sb-news">
										<ul className="news-list">
											<li className="tf-hover">
												<div className="image hover-1">
													<img
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src="/images/blog/recent-new-1.jpg" alt="" />
												</div>
												<div className="content">
													<div className="caption">
														<Link href="/#" className=" font-main-2">
															Managed IT Can Transform Company’s
														</Link>
													</div>
													<p className="date">
														20 September 2024
													</p>
												</div>
											</li>
											<li className="tf-hover">
												<div className="image hover-1">
													<img
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src="/images/blog/recent-new-2.jpg" alt="" />
												</div>
												<div className="content">
													<div className="caption">
														<Link href="/#" className=" font-main-2">
															Role Managed IT in Driving Innovation
														</Link>
													</div>
													<p className="date">
														20 September 2024
													</p>
												</div>
											</li>
											<li className="tf-hover">
												<div className="image hover-1">
													<img
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src="/images/blog/recent-new-3.jpg" alt="" />
												</div>
												<div className="content">
													<div className="caption">
														<Link href="/#" className=" font-main-2">
															Why Strategic to Planning to Business Success"
														</Link>
													</div>
													<p className="date">
														20 September 2024
													</p>
												</div>
											</li>
											<li className="tf-hover">
												<div className="image hover-1">
													<img
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src="/images/blog/recent-new-4.jpg" alt="" />
												</div>
												<div className="content">
													<div className="caption">
														<Link href="/#" className=" font-main-2">
															Why Every Business Needs Technology Strategy
														</Link>
													</div>
													<p className="date">
														20 September 2024
													</p>
												</div>
											</li>
										</ul>
									</div>
								</div>
								<div className="sb-item sb-tag mb-30">
									<div className="sb-title">
										<i className="icon-bolt fs-20 color-main-black" />
										<h5 className="title">
											Popular Tags
										</h5>
									</div>
									<div className="sb-content sb-tag">
										<ul className="tag-popular-list">
											<li><Link href="/#">Business</Link></li>
											<li><Link href="/#">Technology</Link></li>
											<li><Link href="/#">Tech</Link></li>
											<li><Link href="/#">Finance</Link></li>
											<li><Link href="/#">Startup</Link></li>
											<li><Link href="/#">Marketing</Link></li>
											<li><Link href="/#">Management</Link></li>
											<li><Link href="/#">Corporate</Link></li>
										</ul>
									</div>
								</div>
								<div className="sb-item sb-service">
									<div className="tf-overlay" />
									<div className="image">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "100%" }}
											src="/images/blog/service-sidebar.jpg" alt="" />
									</div>
									<div className="content">
										<p className="font-main-2 text-anime-wave">
											Professional &amp; Experience Business
											<span>
												Services
											</span>
										</p>
										<Link href="/#" className="tf-btn text-anime-style-1">
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
