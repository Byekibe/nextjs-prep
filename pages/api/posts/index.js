import { posts } from "@/data";

const postHandler = (req, res) => {
    res.status(200).json(posts)
}


export default postHandler