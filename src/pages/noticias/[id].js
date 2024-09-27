import { useRouter } from "next/router";
export default function page(){
    const router = useRouter()
    return <>
    <p>post: {router.query.id}</p>
    </>
}