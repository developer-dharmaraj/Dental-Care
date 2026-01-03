const BrandLogo = () => {
    const brandLogo = ["Dental Care"]
    return (
        <div className="text-2xl font-medium text-white">
            {brandLogo.map((item) => (
                <div key={item}>{item}</div>
            ))}
        </div>
    )
}

export default BrandLogo;