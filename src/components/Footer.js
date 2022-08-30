const Footer = () => {
    return (
        <div className="w-full flex flex-col bg-[#0042CC] text-white py-5 md:py-[10]">
            <div className="w-[80%] self-center">
                <h3 className="text-base md:text-3xl">Disclaimer</h3>
                <p className="text-sm md:text-lg">The purpose of this application
                    is only for show the prices of
                    differents cryptocurrencies.
                    We don't sell or offer cryptocurrencies.
                </p>
                <p className="text-sm md:text-lg">
                    This app is powered by the
                    <span className="font-bold"> CoinGecko API</span>
                    <br />
                    <br />
                    <span className="text-base font-extrabold md:text-xl">
                        CryptoInfo is not associated with CoinGecko or
                        any of its goods and services
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Footer