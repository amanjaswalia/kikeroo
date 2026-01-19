export default function GroupTripBanner() {
  return (
    <div
      className="mt-16 bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/image 26.png)' }}
    >
      <div className="py-12 md:py-20 lg:py-[80px] px-5 md:px-12 lg:px-[200px] text-white">
        <p className="text-xl md:text-3xl lg:text-[45px] font-semibold leading-tight">
          Travel with your friends.<br />
          it&apos;s so easy with kikeroo!
        </p>
        <button className="mt-6 bg-kik-gold text-black font-semibold text-base md:text-xl px-6 md:px-8 py-3 md:py-4 rounded hover:bg-opacity-80 transition">
          Start a group trip
        </button>
      </div>
    </div>
  )
}
