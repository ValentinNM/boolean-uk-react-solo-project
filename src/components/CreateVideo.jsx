import { useEffect, useState } from "react";

export default function CreateVideo (props) { 
    const {videos,playlists, setVideos} = props;

    console.log("props in EditVideoForm: ", props)
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')
    const [visibility, setVisibility] = useState('')
    const [thumbnail, setThumbnail] = useState('')
    const [playlistId, setPlaylistId] = useState(null)
    const [comments, setComments] = useState('')
    const [views, setViews] = useState('')
    const [likevsdislike, setLikesvsdislikes] = useState('')
    const [date, setDate] = useState('')
    const [madeForKids, setMadeForKids] = useState('')
    const [ageRestriction, setAgeRestriction] = useState('')
    // const [playlists, setPlaylists] = useState(playlists);

    const handleSubmit = (event) => { 
        event.preventDefault();

        const videoToUpload = { 
            title,
            description,
            thumbnail,
            visibility,
            ageRestriction,
            date,
            views,
            comments,
            likevsdislike,
            madeForKids,
            playlistId: 2
        }

        const fetchOptions = {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(videoToUpload)
          };
        
          fetch("http://localhost:3030/videos", fetchOptions)
          .then((res) => res.json())
          .then((newVideo) => {
            console.log("videos POST request: ", newVideo);

            const videoToAdd = { 
                ...newVideo
                // , playlist: 
            }
            console.log("videoToAdd: ", videoToAdd)
            setVideos([...videos, videoToAdd]);
          })
    }

    const handleTitle = (event) => {
        console.log("title: ", event.target.value)
        setTitle(event.target.value)
}
    const handleDescription = (event) => {
        console.log("description: ", event.target.value)
        setDescription(event.target.value)
    }

    const handleVisibility = (event) => {
        console.log("visibility: ", event.target.value)
        // const capitalised = capitalizeFirstLetter(event.target.value)
        // console.log("capitalised: ",capitalised)
        setVisibility(event.target.value)
    }

    // will need the belwo function wwhen filtering by 
    // visibility in content contnet component
    // function capitalizeFirstLetter(string) {
    //     return string.charAt(0).toUpperCase() + string.slice(1);
    // }

    const handleThumbnail = (event) => {
        console.log("selected thumbnail: ", event.target.value)
        setThumbnail (event.target.value)
    }
    const handlePlaylist = (event) => {
        console.log("playlist to select: ", event.target.value)   
        // videoToUpload.playlistId
        let transform = parseInt(event.target.value)
        setPlaylistId (transform)
    }
    console.log("playlisId:", playlistId)

    const handleMadeForKids = (event) => {
        console.log("handleMadeForKids to select: ", event.target.value)   
        setMadeForKids(event.target.value)
    } 
    
    const handleAgeRestriction = (event) =>{
        console.log("handleAgeRestriction to select: ", event.target.value)   
        setAgeRestriction(event.target.value)
    }

    const handleDate = (event) => { 
        console.log('inside handleDate: ', event.target.value)
        setDate(event.target.value)
    }

    return(
        <div className="edit-video-component__main-container" >
            
        <header className="dotted">
            <h3>Video name {} </h3>
            <div>Saved as draft</div>
            <button>Leave feedback</button>
            <button>X</button> // closing button

        {/* Progrss bar */}
        <div className="progress-bar">
            Inside progress bar element
        </div>
        </header>
        <div className="two-column-grid__header">

        <section>
        <h2>Details</h2>
        <form onSubmit={handleSubmit} className="" action="">
        <label htmlFor="title">Title </label>
        <input type="text" name="title" id="title" onChange={handleTitle} />
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" cols="30" rows="10" placeholder="Tell viewers about your video" onChange={handleDescription}></textarea>
        <div className="thumbnail_area">
            <strong>Thumbnail</strong>
            <p>Select or upload a picture that shows what's in your video. A good thumbnail stands out and draws viewers' attention. Learn more</p>
            <div className="main_thumbnails_container">
            <label>
                <img className="video_thumbnail"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9_emie4s_xuVFMK6np-8ChNX54KD-LmJ4ew&usqp=CAU" alt="thumbnail1" /></label>
                <input type="radio" name="thumbnail" id="1" value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9_emie4s_xuVFMK6np-8ChNX54KD-LmJ4ew&usqp=CAU" onChange={handleThumbnail} />
            <label>
                <img className="video_thumbnail" src="https://miro.medium.com/max/1400/1*2oszyW4ja3z9-VLfTjBwFA.jpeg" alt="thumbnail2" /></label>
                <input type="radio" name="thumbnail" id="2" value="https://miro.medium.com/max/1400/1*2oszyW4ja3z9-VLfTjBwFA.jpeg" onChange={handleThumbnail} />
            <label>
                <img className="video_thumbnail"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlM4kbpQOpMtL27TzsZsI5PFT9EbFdHpsGSQ&usqp=CAU" alt="thumbnail3" /></label>
                <input
                type="radio" name="thumbnail" id="3"
                value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlM4kbpQOpMtL27TzsZsI5PFT9EbFdHpsGSQ&usqp=CAU"
                onChange={handleThumbnail} />
            </div>
        </div>
        <div>
            <label htmlFor="date">
                <h4>Select the go live date: </h4>
                <input type="date" name="date" onChange={handleDate}/>
            </label>
        </div>
        <div>
            <h4>Playlist</h4>
            <p>Add your video to one or more playlists. Playlists can help viewers to discover your content faster. Learn more</p>
                <select onChange={handlePlaylist} name="playlists-dropdown" id="">
                <option value="">Please select...</option>
                {playlists.map((playlist, index) => {
                    const  {id, name} = playlist
                    return(
                        <option key={index} value={id}>{name}</option>
                        )
                    })}
                    </select>
            {/* 
            <ul>
                <li>
                    <label htmlFor="">
                        <input onChange={handlePlaylist} name="motivational" type="checkbox"/>
                        Motivational
                    </label>
                </li>
                <li>
                    <label htmlFor="">
                        <input onChange={handlePlaylist} name="sports" type="checkbox"/>
                        Sports
                    </label>
                </li>
            </ul>
            */}
        </div>
        <div className="visibility-selection">
            <h4>Visibility: </h4>
            <select onChange={handleVisibility} name="dropdown" id="">
                <option value="">Select</option>
                <option value="public">Public</option>
                <option value="unlisted">Unlisted</option>
                <option value="hiden">Hiden</option>
            </select>
        </div>
        <div>
            <h4>Audience</h4>
            <p>Regardless of your location, you're legally required to comply with the Children's Online Privacy Protection Act (COPPA) and/or other laws. You're required to tell us whether your videos are 'Made for Kids'. What is 'Made for Kids' content?</p>
            <blockquote>
            Features like personalised ads and notifications won't be available on videos 'Made for Kids'. Videos that are set as 'Made for Kids' by you are more likely to be recommended alongside other children's videos. Learn more
            </blockquote>
            <div>
                <label htmlFor="">
                    <input type="radio" name="kids-validation" id="1" value="yes" onChange={handleMadeForKids}/>
                    <p>Yes, it's 'Made for Kids'</p>
                </label>
                <label htmlFor="">
                    <input type="radio" name="kids-validation" id="2" value="no" onChange={handleMadeForKids}/>
                    <p>No, it's not 'Made for Kids'</p>
                </label>
            </div>
        </div>
        {/* this section is supposed to toggle and expand */}
        {/* if */}
        <div>
            <h4>Age restriction</h4>
            <h5>Do you want to restrict your video to an adult audience?</h5>
            <p>Age-restricted videos are not shown in certain areas of YouTube. These videos may have limited or no ads monetisation. Learn more</p>
            <div>
                <label htmlFor="">
                    <input type="radio" id="yes" name="legal-age" value="yes" onChange={handleAgeRestriction} />
                    <p>Yes, restrict my video to viewers over 18</p>
                </label>
                <label htmlFor="">
                    <input type="radio" id="no" name="legal-age" value="no" onChange={handleAgeRestriction} />
                    <p>No, don't restrict my video to viewers over 18 only</p>
                </label>
            </div>
        </div>
        <div>
            <button type="submit">Submit</button>
        </div>
        </form>
        </section>

        <aside className="dotted editForm_aside_video_section">
            <div className="video_main_container">
                <iframe className="dotted" src="" frameBorder="0">
                </iframe>
                <h4>Videolink</h4>
                <h4>Filename</h4>
            </div>
        </aside>
            </div>        
        </div>
    )
} 