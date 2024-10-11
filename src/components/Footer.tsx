import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
	return (
		<div className="py-10 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-200 text-sm mt-28">
			{/* TOP */}
			<div className="flex flex-col md:flex-row justify-between gap-24">
				{/* LEFT */}
				<div className="w-full md:w-1/2 lg:w-1/4 flex flex-col justify-between">
					<Link href="/">
						<div className="text-2xl tracking-wide">LAMA</div>
					</Link>
					<p>© 2006-2021 ООО "ДВИН"</p>
				</div>
				{/* CENTER */}
				<div className="hidden lg:flex justify-between w-1/2">
					<div className="flex flex-col justify-between">
						<h1 className="font-medium text-base">Помощь с подбором</h1>
						<div className="flex flex-col gap-6">
							<p>Помощь с подбором</p>
						</div>
					</div>
					<div className="flex flex-col justify-between">
						<h1 className="font-medium text-base">Оптовым покупателям</h1>
						<div className="flex flex-col gap-6">
							<p>Помощь с подбором</p>
						</div>
					</div>
					<div className="flex flex-col justify-between">
						<h1 className="font-medium text-white text-base">О компании</h1>
						<h1 className="font-medium text-white text-base">Новости</h1>
						<h1 className="font-medium text-white text-base">
							Доставка и оплата
						</h1>
						<h1 className="font-medium text-white text-base">Отзывы</h1>
						<h1 className="font-medium text-white text-base">
							Оптовым покупателям
						</h1>
						<h1 className="font-medium text-white text-base">
							Ответы на вопросы
						</h1>
					</div>
				</div>
				{/* RIGHT */}
				<div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
					<h1 className="font-medium text-lg">SUBSCRIBE</h1>
					<div className="flex gap-6">
						<Image src="/facebook.png" alt="" width={16} height={16} />
						<Image src="/instagram.png" alt="" width={16} height={16} />
						<Image src="/youtube.png" alt="" width={16} height={16} />
						<Image src="/pinterest.png" alt="" width={16} height={16} />
						<Image src="/x.png" alt="" width={16} height={16} />
					</div>
					<p>
						Be the first to get the latest news about trends, promotions, and
						much more!
					</p>
					<div className="flex">
						{/* <input
							type="text"
							placeholder="Email address"
							className="p-4 w-3/4"
						/>
						<button className="w-1/4 bg-lama text-white">JOIN</button> */}
					</div>
					{/* <span className="font-semibold">Secure Payments</span>
					<div className="flex justify-between">
						<Image src="/discover.png" alt="" width={40} height={20} />
						<Image src="/skrill.png" alt="" width={40} height={20} />
						<Image src="/paypal.png" alt="" width={40} height={20} />
						<Image src="/mastercard.png" alt="" width={40} height={20} />
						<Image src="/visa.png" alt="" width={40} height={20} />
					</div> */}
				</div>
			</div>
		</div>
	)
}

export default Footer
