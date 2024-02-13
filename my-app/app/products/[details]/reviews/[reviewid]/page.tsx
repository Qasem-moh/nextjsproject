export default function Review({params,}:{
    params:{
        details:string,
        reviewid:string
    }
}){
    return(
        <div>
            <h3>review id {params.reviewid} and details id {params.details}</h3>
        </div>
    )
}