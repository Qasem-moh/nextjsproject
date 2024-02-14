import {Metadata} from "next";

type Props = {
    params: {
        productid: string
    }
}
export const generateMetadata = async ({params}: Props):Promis<Metadata> => {
    const title=await new Promise((resolve=>{
        setTimeout(()=>{
            resolve(`iphone ${params.details}`)
        },1000)
    }))
    return {
        title: `Product ${title}`
    }
}


export default function Details({params}: { params: { details: string } }) {
    return (<div>
            <h1>Hello World!</h1>
            <h4>Here details page {params.details}</h4>
        </div>)
}