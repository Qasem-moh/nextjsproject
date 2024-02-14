import {notFound} from "next/navigation";

export default function Review({params,}:{
    params:{
        details:string,
        reviewid:string,
    }
}){
    if (parseInt(params.reviewid) > 1000) {
        notFound();
    }
    return(
        <div>
            <h3>review id {params.reviewid} and details id {params.details}</h3>
        </div>
    )
}