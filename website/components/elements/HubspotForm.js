'use client'
import { useEffect } from 'react'

// Embeds the Sidestreet HubSpot contact form.
// Same form used on hellosidestreet.com (portal 243459715, region na2).
export default function HubspotForm() {
	useEffect(() => {
		const SRC = 'https://js-na2.hsforms.net/forms/embed/243459715.js'
		// Avoid injecting the script more than once across navigations.
		if (!document.querySelector(`script[src="${SRC}"]`)) {
			const s = document.createElement('script')
			s.src = SRC
			s.defer = true
			document.body.appendChild(s)
		}
	}, [])

	return (
		<div
			className="hs-form-frame"
			data-region="na2"
			data-form-id="dd84494e-4ddd-4214-b0b3-0c080224d51a"
			data-portal-id="243459715"
		/>
	)
}
