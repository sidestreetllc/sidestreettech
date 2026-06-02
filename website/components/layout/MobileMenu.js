'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function MobileMenu() {
	const [activeAccordion, setActiveAccordion] = useState(null)
	const pathname = usePathname()

	const toggleAccordion = (key) => {
		setActiveAccordion((prev) => (prev === key ? null : key))
	}

	const isActive = (path) => (pathname === path ? "current" : "")
	const isParentActive = (paths = []) => paths.some((path) => pathname.startsWith(path)) ? "active" : ""

	const menuItems = [
		{ title: "Home", path: "/" },
		{ title: "About", path: "/about-us" },
		{
			title: "Services",
			subMenu: [
				{ title: "Managed IT & Support", path: "/our-service" },
				{ title: "Cloud & Cybersecurity", path: "/our-service-02" },
				{ title: "AI Integration", path: "/service-details" }
			]
		},
		{
			title: "Work",
			subMenu: [
				{ title: "Case Studies", path: "/case-study-01" },
				{ title: "Case Detail", path: "/case-details" }
			]
		},
		{
			title: "Company",
			subMenu: [
				{ title: "Pricing", path: "/pricing-table" },
				{ title: "FAQs", path: "/faqs" },
				{ title: "Careers", path: "/career" }
			]
		},
		{
			title: "Insights",
			subMenu: [
				{ title: "Blog", path: "/blog-standard" },
				{ title: "Article", path: "/blog-details" }
			]
		},
		{ title: "Contact", path: "/contact" }
	]

	return (
		<ul id="menu-mobile-menu" className="menu">
			{menuItems.map((item, index) => {
				const parentActiveClass = isParentActive(item.subMenu?.map(i => i.path) || [])
				const isSubmenuActive = item.subMenu?.some((sub) => isActive(sub.path) === "current")
				const isOpen = activeAccordion === index || isSubmenuActive

				return (
					<li key={index} className={`menu-item menu-item-has-children-mobile  ${item.subMenu ? "menu-item-has-children-mobile" : ""} ${parentActiveClass}`}>
						<Link className={`item-menu-mobile ${isActive(item.path)}`} href={item.path || "#"}>
							{item.title}
							{item.subMenu && (
								<i className={`icon-chevron-down ${isOpen ? "open" : ""}`} onClick={() => toggleAccordion(index)} />
							)}
						</Link>
						{item.subMenu && (
							<ul className="sub-menu-mobile" style={{ display: isOpen ? "block" : "none" }}>
								{item.subMenu.map((sub, subIndex) => (
									<li key={subIndex} className={`menu-item ${isActive(sub.path)}`}>
										<Link href={sub.path}>{sub.title}</Link>
									</li>
								))}
							</ul>
						)}
					</li>
				)
			})}
		</ul>
	)
}
