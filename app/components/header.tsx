export default function Header() {
    return (
        <header className="flex justify-between items-center px-12 py-6">
            <h1 className="text-3xl font-extrabold tracking-wide">3AM</h1>

            <a
                href="mailto:caladojunior965@gmail.com"
                className="bg-yellow-300 text-black px-6 py-2 font-semibold hover:bg-yellow-400 transition duration-300"
            >
                Contate
            </a>
        </header>
    )
}