import NewsCard from "./NewsCard"
import ReadMoreCards from "./ReadMoreCards"

export default function ReadMorePosts(){
    return (
        <>
            <div className="all-news flex flex-wrap items-start justify-center grid-flow-row-dense gap-10 mb-6">
                <ReadMoreCards />
                <ReadMoreCards />
                <ReadMoreCards />
                <ReadMoreCards />
                <ReadMoreCards />
            </div>
        </>
    )
}