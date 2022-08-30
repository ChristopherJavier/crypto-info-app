import { useNavigate } from "react-router-dom"
import svgS1 from "../assets/Home/undraw_crypto_portfolio.svg"
import svgS2 from "../assets/Home/undraw_ether.svg"

const Home = ({ topCoins }) => {
    const navigate = useNavigate()

    const handleClick = (event) => {
        event.preventDefault()
        navigate("/coins")
    }

    return (
        <div className="w-full">
            <div className="w-full h-[90vh] md:h-[90vh] flex flex-col md:flex-row-reverse justify-center items-center">
                <img src={svgS1} alt="info" className="scale-[0.65] md:scale-[1] md:relative md:w-[50%] md:h-[50%] md:mr-[10vw]" />
                <h1 className="text-base md:text-3xl tracking-wide leading-6 md:ml-[10vw]">
                    <span className="text-lg md:text-5xl text-[#0042CC]">The prices of all cryptocurrencies</span><br />
                    in one place
                </h1>
            </div>
            <div className="w-full h-screen flex flex-col justify-around items-center">
                <h2 className="text-lg md:text-5xl text-[#0042CC]">Popular Coins</h2>
                <div className="w-[80%] h-[70vh] bg-[#0042CC] rounded-lg my-2 flex justify-center text-white items-center">
                    {topCoins
                        ? (
                            <table className="w-[80%] text-center my-2">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Coin</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {topCoins.map(coin => (
                                        <tr key={coin.id}>
                                            <td>{coin.market_data.market_cap_rank}</td>
                                            <td>{coin.name}</td>
                                            <td>${coin.market_data.current_price.usd}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )
                        : (<>Top 10 Coins</>)
                    }
                </div>
                <button className="my-4 bg-[#0042CC] p-2 rounded-lg text-white md:w-[200px]" onClick={handleClick}>See more cryptocurrencies</button>
            </div>
            <div className="w-full h-screen flex flex-col justify-center my-2 md:my-0">
                <h2 className="text-lg md:text-5xl self-center text-[#0042CC]">Keep up to date with the cryptos</h2>
                <p className="text-base md:text-3xl self-center mt-5 ">See the market cap of a crypto and more</p>
                <img src={svgS2} alt="ether and people" className="scale-[0.80] md:scale-[1] md:w-[50%] md:h-[50%] self-center md:mt-3" />
            </div>
        </div>
    )
}

export default Home