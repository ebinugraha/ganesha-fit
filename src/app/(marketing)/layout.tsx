import { Navbar } from "@/components/layout/marketing/navbar"

const MarketingLayout = ({children} : {children : React.ReactNode}) => {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    )
}

export default MarketingLayout