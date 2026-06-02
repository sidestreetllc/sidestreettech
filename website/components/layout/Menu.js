'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Menu() {
	const pathname = usePathname()

	const isActive = (path) => pathname === path ? "current" : ""
	const isParentActive = (paths) => paths.some(path => pathname.startsWith(path)) ? "current" : ""

	return (
		<ul className="nav-list">
			<li className={`item ${isActive("/")}`}><Link href="/"><span>Home</span></Link></li>
			<li className={`item ${isActive("/about-us")}`}><Link href="/about-us"><span>About</span></Link></li>
			<li className={`item has-child ${isParentActive(["/our-service", "/our-service-02", "/service-details"])}`}>
				<Link href="#"><span>Services</span></Link>
				<ul className="sub-nav">
					<li className={isActive("/our-service")}><Link href="/our-service"><span> Managed IT & Support </span></Link></li>
					<li className={isActive("/our-service-02")}><Link href="/our-service-02"><span> Cloud & Cybersecurity </span></Link></li>
					<li className={isActive("/service-details")}><Link href="/service-details"><span> AI Integration </span></Link></li>
				</ul>
			</li>
			<li className={`item has-child ${isParentActive(["/case-study-01", "/case-details"])}`}>
				<Link href="#"><span>Work</span></Link>
				<ul className="sub-nav">
					<li className={isActive("/case-study-01")}><Link href="/case-study-01"><span> Case Studies </span></Link></li>
					<li className={isActive("/case-details")}><Link href="/case-details"><span> Case Detail </span></Link></li>
				</ul>
			</li>
			<li className={`item has-child ${isParentActive(["/pricing-table", "/faqs", "/career"])}`}>
				<Link href="#"><span>Company</span></Link>
				<ul className="sub-nav">
					<li className={isActive("/pricing-table")}><Link href="/pricing-table"><span> Pricing </span></Link></li>
					<li className={isActive("/faqs")}><Link href="/faqs"><span> FAQs </span></Link></li>
					<li className={isActive("/career")}><Link href="/career"><span> Careers </span></Link></li>
				</ul>
			</li>
			<li className={`item has-child ${isParentActive(["/blog-standard", "/blog-details"])}`}>
				<Link href="#"><span>Insights</span></Link>
				<ul className="sub-nav">
					<li className={isActive("/blog-standard")}><Link href="/blog-standard"><span> Blog </span></Link></li>
					<li className={isActive("/blog-details")}><Link href="/blog-details"><span> Article </span></Link></li>
				</ul>
			</li>
			<li className={`item ${isActive("/contact")}`}><Link href="/contact"><span>Contact</span></Link></li>
		</ul>
	)
}
