export default function Details({params}: { params: { details: string } }) {
    return (<div>
            <h1>Hello World!</h1>
            <h4>Here details page {params.details}</h4>
        </div>)
}