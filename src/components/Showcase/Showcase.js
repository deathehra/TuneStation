import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

import Heading from './Heading'
import Songs from './Songs'
import Albums from './Albums'
import Playlists from './Playlists';


function Showcase(props) {

    const navigate = useNavigate(); //for navigating to /listen

    const [trending_songs, setTrendingSongs] = useState([])
    const [trending_albums, setTrendingAlbums] = useState([])

    const [top_albums, setTopAlbums] = useState([])
    const [trending_podcasts, setTrendingPodcasts] = useState([])
    
    const [playlists, setPlaylists] = useState([])
    const [charts, setCharts] = useState([])

    const searchFromId = async (id) => {
        let raw_resp = await fetch(`https://jiosaavn-api-codyandersan.vercel.app/songs?id=${id}`)
        let resp = await raw_resp.json()
        props.setDetails(resp.data[0])
        navigate("/listen")
    }

    /**
     * Main function that fetches homepage API sets the homepage data
     */
    const setHomepageData = async () => {
        let uri = "https://jiosaavn-api-codyandersan.vercel.app/modules?language=hindi"

        props.setProgress(30)
        let data = await fetch(uri)
        props.setProgress(50)

        let resp = await data.json()
        props.setProgress(70)

        //Trending songs:
        setTrendingSongs(getShowcase(resp["data"]["trending"]["songs"], "song"))

        //Trending albums:
        setTrendingAlbums(getShowcase(resp["data"]["trending"]["albums"], "album"))

        // Trending Podcasts
        setTrendingPodcasts(getShowcase(resp["data"]["trending"]["shows"], "show",))

        //Top albums:
        setTopAlbums(getShowcase(resp["data"]["albums"], "album"))

        //Playlists:        
        setPlaylists(getShowcase(resp["data"]["playlists"], "playlist"))

        //Charts:
        setCharts(getShowcase(resp["data"]["charts"], "playlist"))

        props.setProgress(100)
    }

    /**
     * Helper function for shuffling the array of songs/albums
     * @param {array} array Array of song/album to be shuffled
     * @returns shuffled array
     */
    const shuffle = (array) => {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    /**
     * Takes a list of songs/albums and returns it in the form of showcase
     * @param {Array} data The array of songs/albums of which to get the showcase
     * @param {String} type The type of data (song/album/playlist), so as to avoid different type being displayed with another type of data
     * @returns the name, image, id of the data
     */
   const getShowcase = (data, type, limit = 12) => {
    if (!Array.isArray(data)) return []

    const data_showcase = []

    for (let i = 0; i < data.length && data_showcase.length < limit; i++) {
        if (data[i]?.type === type) {
            data_showcase.push({
                name: data[i].name || data[i].title,
                image: data[i].image?.[2]?.link,
                id: data[i].id
            })
        }
    }

    return shuffle(data_showcase)
}



    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0; //scroll to top of page
        document.title = "Popular Now - DeathMusic"
        setHomepageData()
    }, [])



    return (
        <div className={props.theme}>
            {/* <div className="text-4xl text-pink-300 mx-5 mb-2 ">Good evening,</div> */}
            <section className="text-black dark:text-gray-400 bg-light-100 dark:bg-deep-900 body-font justify-center py-5">
                <div className="container px-5 py-24 mx-auto mb-0 ">

                    <Heading title="Trending Now" />
                    <Songs songs={trending_songs} searchFromId={searchFromId} />

                    <Heading title="Popular Albums" />
                    <Albums albums={trending_albums} setAlbumId={props.setAlbumId} />

                    <Heading title="Editorial Picks" />
                    <Albums albums={top_albums} setAlbumId={props.setAlbumId} />

                    <Heading title="Trending Podcasts" />
                    <Playlists playlists={trending_podcasts} setPlaylistId={props.setPlaylistId} />
     
                    <Heading title="Top Charts" />
                    <Playlists playlists={charts} setPlaylistId={props.setPlaylistId} />

                    <Heading title="Made for you" />
                    <Playlists playlists={playlists} setPlaylistId={props.setPlaylistId} />


                </div>
            </section>
        </div>
    )
}

export default Showcase
