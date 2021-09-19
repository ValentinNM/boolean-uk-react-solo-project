
export default function EditVideoForm () { 

    return(
        <div className="edit-video-component__main-container" >
            
        <header className="dotted">
            <h3>Video name {} </h3>
            <div>Saved as draft</div>
            <button>Leave feedback</button>
            <button><strong>X</strong></button> // closing button

        {/* Progrss bar */}
        <div className="progress-bar">
            Inside progress bar element
        </div>
        </header>
        <div className="two-column-grid__header">

        <section>
        <h2>Details</h2>
        <form action="">
        <label htmlFor="name">Title (required)</label>
        <input type="text" name="name" id="name" required minLength="1" />
        <label htmlFor="">Description</label>
        <textarea name="description" id="description" cols="30" rows="10" placeholder="Tell viewers about your video"></textarea>
        <div className="thumbnail_area">
            <strong>Thumbnail</strong>
            <p>Select or upload a picture that shows what's in your video. A good thumbnail stands out and draws viewers' attention. Learn more</p>
            <div className="main_thumbnails_container">
            <input type="file" name="thumbnail" id="thumbnail" />
            <div><img src="" alt="thumbnail1" />
            </div>
            <div><img src="" alt="thumbnail2" />
            </div>
            <div><img src="" alt="thumbnail3" />
            </div>
            </div>
        </div>
        <div>
            <h4>Playlist</h4>
            <p>Add your video to one or more playlists. Playlists can help viewers to discover your content faster. Learn more</p>
            <select name="" id="">
                <option value="">Select</option>
                <label htmlFor="">
                <input type="checkbox" />
                </label>
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
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
                    <input type="radio" />
                    <p>Yes, it's 'Made for Kids'</p>
                </label>
                <label htmlFor="">
                    <input type="radio" />
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
        </div>
        <div>
            <h4></h4>
            <p></p>
        </div>
        </form>
        </section>

        <aside className="dotted editForm_aside_video_section">
            <div className="video_main_container">
                <iframe className="dotted" src="" frameborder="0">
                </iframe>
                <h4>Videolink</h4>
                <h4>Filename</h4>
            </div>
        </aside>
            </div>        
        </div>
    )
} 