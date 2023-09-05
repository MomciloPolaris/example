


const Rating = () => {
return (
<div id="RatingCoach" className="sm:w-4/5 sm:m-auto">
    <p id="RatingTitle" className="text-xl font-bold text-[#4F4F4F] ">
        <img className="inline-block mr-2" src="src/assets/images/HalfStar.png" alt="" />
        Rating
    </p>
    <div className=" h-0.5 w-full bg-[#D9D9D9] inline-block"></div>

    <div id="RatingContent" className="mt-10">
        <div className="flex items-center ">
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <title>First star</title>
                <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
            </svg>
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <title>Second star</title>
                <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
            </svg>
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <title>Third star</title>
                <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
            </svg>
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <title>Fourth star</title>
                <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
            </svg>
            <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Fifth star</title>
                <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
            </svg>
            <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5
            </p>
        </div>

        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-6">1,745 global
            ratings</p>
        <div className="flex items-center mt-4">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-500">5 star</span>
            <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700 sm:w-4/6">
                <div className="h-5 bg-yellow-400 rounded w-3/4"></div>
            </div>
            <span className="text-sm font-medium text-blue-600 dark:text-blue-500 ">70%</span>
        </div>
        <div className="flex items-center mt-4">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-500">4 star</span>
            <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700 sm:w-4/6">
                <div className="h-5 bg-yellow-400 rounded w-1/6"></div>
            </div>
            <span className="text-sm font-medium text-blue-600 dark:text-blue-500">17%</span>
        </div>
        <div className="flex items-center mt-4">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-500">3 star</span>
            <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700 sm:w-4/6">
                <div className="h-5 bg-yellow-400 rounded w-1/12"></div>
            </div>
            <span className="text-sm font-medium text-blue-600 dark:text-blue-500">8%</span>
        </div>
        <div className="flex items-center mt-4">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-500">2 star</span>
            <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700 sm:w-4/6">
                <div className="h-5 bg-yellow-400 rounded w-5"></div>
            </div>
            <span className="text-sm font-medium text-blue-600 dark:text-blue-500">4%</span>
        </div>
        <div className="flex items-center mt-4">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-500">1 star</span>
            <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700 sm:w-4/6">
                <div className="h-5 bg-yellow-400 rounded w-1"></div>
            </div>
            <span className="text-sm font-medium text-blue-600 dark:text-blue-500">1%</span>
        </div>
    </div>
</div>
);
};

export default Rating;