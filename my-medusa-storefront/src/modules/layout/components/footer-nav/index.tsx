import clsx from "clsx"
import { useCollections } from "medusa-react"
import Link from "next/link"
import CountrySelect from "../country-select"

const FooterNav = () => {
  const { collections } = useCollections()

  return (
    <div style={{ textAlign: "center" }}>
      <div className="content-container flex flex-col gap-y-8 pt-16 pb-8">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-center">
          <div className="text-small-regular grid grid-cols-4  gap-x-16">
            {/* collections */}
            <div className="flex flex-col gap-y-2">
              <span className="text-base-semi">Collections</span>
              <ul
                className={clsx("grid grid-cols-1 gap-y-2", {
                  "grid-cols-2": (collections?.length || 0) > 4,
                })}
              >
                {collections?.map((c) => (
                  <li key={c.id}>
                    <Link href={`/collections/${c.id}`}>
                      <a>{c.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* support */}
            <div className="flex flex-col gap-y-2">
              <span className="text-base-semi">Support</span>
              <ul className="grid grid-cols-1 gap-y-2">
                <li>
                  <Link href={""}>
                    <a className="underlineForLinks">Get Help</a>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <a className="underlineForLinks">Registration & Warranty</a>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <a className="underlineForLinks">Ł&amp;Ƥ Store Support</a>
                  </Link>
                </li>
              </ul>
            </div>
            {/* Company */}
            <div className="flex flex-col gap-y-2">
              <span className="text-base-semi">Company</span>
              <ul className="grid grid-cols-1 gap-y-2">
                <li>
                  <Link href={""}>
                    <a className="underlineForLinks">About Us</a>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <a className="underlineForLinks">Careers</a>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <a className="underlineForLinks">Contact Us</a>
                  </Link>
                </li>
              </ul>
            </div>
            {/* social media */}
            <div className="flex flex-col gap-y-2">
              <span className="text-base-semi">Social Media</span>
              <ul className="grid grid-cols-1 gap-y-2">
                <li>
                  <Link href={""}>
                    <a className="underlineForLinks">Facebook</a>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <a className="underlineForLinks">Instagram</a>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <a className="underlineForLinks">Twitter</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <br />
        {/* Nav CopyRights */}
        <div style={{ textAlign: "center" }}>
          <span className="text-xsmall-regular text-gray-500">
            Copyright © 2022 Ł&amp;Ƥ Inc. All rights
            reserved.&nbsp;&nbsp;&nbsp;&nbsp; Legal
            Terms&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;Privacy
            Policy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;Cookie
            Policy
          </span>
          <div className="min-w-[316px] flex xsmall:justify-end">
            {/* <CountrySelect />  Cena do Shipping To */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterNav
