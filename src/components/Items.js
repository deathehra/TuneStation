import React, { useEffect } from 'react'

function Items(props) { //song object, onClick function

    return (

        <div id={props.song.id}>
            {/* onClick: sends song details to Search.js and navigates to /listen */}
            <div onClick={props.onClick} className="group relative flex items-center gap-3  p-2 sm:p-3 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition cursor-pointer" >
                <img alt="thumbnail"
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover flex-shrink-0"
                    src={props.song.image[2].link} 
                />
                <div className="flex-grow">
                    <h2 className="text-sm sm:text-[15px] font-medium truncate text-black dark:text-white">{props.song.name ? props.song.name.replace(/&quot;/g, '"') : props.song.title.replace(/&quot;/g, '"')}</h2>
                    <p className="text-xs sm:text-sm truncate text-gray-600 dark:text-gray-400">{props.song.primaryArtists ? props.song.primaryArtists : props.song.artist}</p>
                </div>

                {props.song.type && <span className="absolute right-2 top-2 inline-flex items-center justify-center px-2 py-0.5 mr-2 text-xs font-bold leading-none dark:text-deep-900 dark:bg-light-200 bg-deep-900 text-light-100 rounded-full">{props.song.type.toUpperCase()}</span>}
            </div>
        </div>
    )
}

export default Items
