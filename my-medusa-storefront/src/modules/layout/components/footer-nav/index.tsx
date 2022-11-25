import clsx from "clsx"
import { useCollections } from "medusa-react"
import Link from "next/link"
import CountrySelect from "../country-select"

const FooterNav = () => {
  const { collections } = useCollections()

  return (
    <div className="content-container flex flex-col gap-y-8 pt-16 pb-8">
      <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between">
        <div className="text-small-regular grid grid-cols-6  gap-x-16">
          {/* support */}
          <div className="flex flex-col gap-y-2"></div>
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
          {/* gap1 */}
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
                  <a className="underlineForLinks">LP Store Support</a>
                </Link>
              </li>
            </ul>
          </div>
          {/* gap2 */}
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
                  <a className="underlineForLinks">LP Store Support</a>
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

      <div className="flex flex-col-reverse gap-y-4 justify-center xsmall:items-center xsmall:flex-row xsmall:items-end xsmall:justify-between">
        <span className="text-xsmall-regular text-gray-500">
          © Copyright 2022 LP
        </span>
        <div className="min-w-[316px] flex xsmall:justify-end">
          {/* <CountrySelect />  Cena do Shipping To */}
        </div>
      </div>
    </div>
  )
}

export default FooterNav
