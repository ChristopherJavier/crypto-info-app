const Coins = ({ coins }) => {

    return (
        <div className="w-full">
            <div className="w-full flex flex-col justify-around items-center">
                <h2 className="text-lg md:text-5xl text-[#0042CC]">Cryptocurrencies</h2>
                <div className="w-[90%] bg-[#0042CC] rounded-lg my-2 flex justify-center text-white items-center">
                    {coins
                        ? (
                            <table className="w-[80%] text-center my-2">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Coin</th>
                                        <th>Price</th>
                                        <th>24h</th>
                                        <th>Market cap</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {coins.map(coin => (
                                        <tr key={coin.id}>
                                            <td>{coin.market_data.market_cap_rank}</td>
                                            <td>{coin.name}</td>
                                            <td>${coin.market_data.current_price.usd}</td>
                                            <td>{coin.market_data.price_change_percentage_24h}%</td>
                                            <td>${coin.market_data.market_cap.usd}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )
                        : (<div>No cryptocurrencies info available</div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Coins