import { fetchAllFeedbacks } from "@/lib/actions/feedback.actions"
import moment from "moment";


const FeedbackTable = async () => {
  const feedbackData = await fetchAllFeedbacks() || [];
  return (
    <div className="space-y-4">
      {[...feedbackData].reverse().map((feedback) => (
        <details
          key={feedback._id}
          className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              {feedback?.name} <span className="text-xs text-muted text-green-400">({feedback?.email})</span>
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <div className="mt-4 leading-relaxed text-gray-700">
            <p>{feedback?.message}</p>
            <p className="text-xs text-muted-foreground pt-2">{moment(feedback?.createdAt).fromNow()}</p>
          </div>
        </details>
      ))}
    </div>
  )
}

export default FeedbackTable
