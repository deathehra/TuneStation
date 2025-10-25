import React, { useEffect } from 'react'

function Terms(props) {

    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        document.title = "Terms of Use - DeathMusic"
    }, [])

    return (
        <div className={props.theme}>
            <div className="container px-5 pt-28 pb-10 mx-auto text-gray-700 dark:text-gray-400 body-font bg-light-100 dark:bg-deep-900 ">
                <div className="flex flex-col text-center w-full mb-10">
                    <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-black dark:text-white'>Terms of Use for DeathMusic</h1>
                    <p className='text-lg sm:text-xl text-gray-900 dark:text-gray-100'>Welcome to DeathMusic, an online music streaming and downloading platform built for the sole purpose of personal use and learning. By accessing or using DeathMusic, you agree to be bound by these Terms of Use. If you do not agree to these Terms of Use, please <b>do not</b> use DeathMusic.</p>
                </div>
                <hr />
                <br />
                <ul className='text-gray'>
  <li>
    <span className='font-bold text-gray-800 dark:text-gray-100'>&#8620; Personal Project:</span> DeathMusic is a ReactJS learning project, created for fun and non-commercial purposes.
  </li>
  <br />
  <li>
    <span className='font-bold text-gray-800 dark:text-gray-100'>&#8620; Music & Usage:</span> Use DeathMusic to stream or download music for personal, non-commercial use only. Do not share downloaded music or engage in any illegal activity.
  </li>
  <br />
  <li>
    <span className='font-bold text-gray-800 dark:text-gray-100'>&#8620; Third-Party API:</span> DeathMusic uses an unofficial API to fetch music data. All rights to the music remain with the original owners.
  </li>
  <br />
  <li>
    <span className='font-bold text-gray-800 dark:text-gray-100'>&#8620; Copyright Notice:</span> All music, albums, and playlists available through DeathMusic belong to their respective copyright holders. DeathMusic does not claim ownership of any content. If a copyright owner requests removal of their content, we will promptly comply and take necessary action to ensure no infringement occurs. This project respects intellectual property rights and exists solely for educational and personal use.
  </li>
</ul>


                <br/>
                <hr />
                <br />
                <p>By using Deathmusic, you <b>agree</b> to comply with these Terms of Use. We reserve the right to modify or update these Terms of Use at any time without notice. If you continue to use DeathMusic after any changes to the Terms of Use have been made, you agree to be bound by the revised Terms of Use.</p>
            </div>
        </div>
    )
}

export default Terms
