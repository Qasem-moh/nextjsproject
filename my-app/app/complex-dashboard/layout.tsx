import UserAnalystics from "@/components/UserAnalystics"
import RevenuMetrics from "@/components/RevenuMetrics"
import Notifications from "@/components/Notifications"

export default function DashboardLayout({children,}:{
    children:React.ReactNode
}){
    return(
        <>
        <div>{children}</div>
            <UserAnalystics/>
            <RevenuMetrics/>
            <Notifications/>
        </>
    )
}