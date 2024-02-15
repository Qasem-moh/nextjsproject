import Card from "@/app/components/card";
import Link from "next/link"
export default function ArchivedNotifications(){
    return (
        <Card>
            <div>Notifications Default </div>
            <Link href="/complex-dashboard"> Default</Link>
        </Card>
    )
}