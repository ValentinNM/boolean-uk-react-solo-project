import { useState, useEffect } from "react";

export default function EditVideo (props)  { 

    const {playlists, videoToEdit} = props;
    //  console.log("props inside EditVideo: ", videoToEdit, playlists)

    const [videoToUpdate, setVideoToUpdate] = useState ({
        title: "",
        description: "",
        thumbnail: "",
        visibility: "",
        ageRestriction: "",
        date: "",
        views: null, 
        comments: null,   
        likevsdislike: "",
        madeForKids: "",
        playlist: {
            id: null ,
            name: ""
        }
    })

    // keep trak of the changes in the component 
    useEffect(() => { 
        if(videoToEdit) { 
            const { title, description, thumbnail,
                visibility,
                ageRestriction,
                date,
                views, 
                comments,   
                likevsdislike,
                madeForKids,
                playlist
                } = videoToEdit
                
                const { id, name } = playlist

                // we are making a copy of the videoToEdit vealue
                // every time when we update one of the above keys
                setVideoToUpdate({...videoToEdit})
            }
        }, [videoToEdit])
            
    const handleSubmit = (event) => { 
        event.preventDefault();

        const updatedVideoId = videoToEdit.id
        
        const updatedVideo = {
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
            playlistId
        }

          const fetchOptions = {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedVideo)
          };

          fetch(`http://localhost:3030/videos/${updatedVideoId}`, fetchOptions)
         .then((res) => res.json())
         .then((recentUpdate) => { 
             console.log("recentUpdate: ", recentUpdate)
         })
    }

    useEffect(() => {         
        if(videoToEdit) { 
            console.log("useEffect inside EditVideo")
            setVideoToUpdate(videoToEdit)
        }
    }, [videoToEdit]);

    const handleVideoToUpdateInputs = event => { 

        // console.log("input inside EditVideo component: ", event.target.type, event.target.value, event.target.checked)
        
        const inputType = event.target.type;
        const inputName = event.target.name;
        const isChecked = event.target.checked; // for the radio inputs
        const isValue = event.target.value;

        // console.log("inside handleVideoToUpdateImputs", "\n" ,"inputType: ", inputType, "\n", "inputName: ", inputName, "\n", "isChecked: ", isChecked)

        console.log({inputName, inputType, isChecked})

        if(inputType === "option") { 
            // console.log("inputType if option:", inputType)
            setVideoToUpdate({
                ...videoToUpdate,
                [inputName]: event.target.value
            })
        } else if ((inputType === "radio") && (isValue === videoToEdit.thumbnail)) {
            console.log ("bajajvasdkb")
            // !isChecked
            setVideoToUpdate({
                ...videoToUpdate,
                [inputName]: event.target.value
            })
        } else { 
            console.log("big ERROR: ", inputName, inputType)

            setVideoToUpdate({
                ...videoToUpdate,
                [inputName]: event.target.value
            })
        }
    }

    return(
      <div className="edit-video-component__main-container" >
          
      <header className="create_header">
          <h3>Video name supposed to be here {} </h3>
          <div> In a parallel universe this was supposed to be saved as draft</div>
          <button> Don't leave feedback ???? </button>
          <button> X </button>

      {/* Progrss bar */}
      <div className="progress-bar">

      </div>
      </header>
      <div className="two-column-grid__header">

      <section>
      <h2>Details</h2>
      <form
      onSubmit={handleSubmit}
      className="">
      <label htmlFor="title">Title </label>
      <input
      type="text"
      name="title"
      id="title"
      onChange={handleVideoToUpdateInputs}
      value={videoToUpdate.title}
      />
      <label htmlFor="description">Description</label>
      <textarea
      name="description"
      value={videoToUpdate.description}
      onChange={handleVideoToUpdateInputs}
      id="description"
      cols="30" rows="10"
      placeholder="Tell viewers about your video"
      >
      </textarea>
      <div className="thumbnail_area">
          <strong>Thumbnail</strong>
          <p>Select or upload a picture that shows what's in your video. A good thumbnail stands out and draws viewers' attention. Learn more</p>
          <div className="main_thumbnails_container">
            <label>
                <img className="video_thumbnail"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9_emie4s_xuVFMK6np-8ChNX54KD-LmJ4ew&usqp=CAU" alt="thumbnail1"/></label>
                <input type="radio" name="thumbnail"
                checked={videoToEdit.thumbnail === "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9_emie4s_xuVFMK6np-8ChNX54KD-LmJ4ew&usqp=CAU"}
                id="1"
                value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9_emie4s_xuVFMK6np-8ChNX54KD-LmJ4ew&usqp=CAU"
                onChange={handleVideoToUpdateInputs}
                />
            <label>
                <img className="video_thumbnail" src="https://miro.medium.com/max/1400/1*2oszyW4ja3z9-VLfTjBwFA.jpeg" alt="thumbnail2" /></label>
                <input type="radio" name="thumbnail"
                checked={videoToEdit.thumbnail === "https://miro.medium.com/max/1400/1*2oszyW4ja3z9-VLfTjBwFA.jpeg"}
                id="2" value="https://miro.medium.com/max/1400/1*2oszyW4ja3z9-VLfTjBwFA.jpeg"
                onChange={handleVideoToUpdateInputs}
                />
            <label>
                <img className="video_thumbnail"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlM4kbpQOpMtL27TzsZsI5PFT9EbFdHpsGSQ&usqp=CAU" alt="thumbnail3" /></label>
                <input
                type="radio" name="thumbnail"
                checked={videoToEdit.thumbnail === "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlM4kbpQOpMtL27TzsZsI5PFT9EbFdHpsGSQ&usqp=CAU"}
                id="3"
                value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlM4kbpQOpMtL27TzsZsI5PFT9EbFdHpsGSQ&usqp=CAU"
                onChange={handleVideoToUpdateInputs}
                />
            </div>
      </div>
      <div>
            <label htmlFor="date">
                <h4>Select the go live date: </h4>
                <input type="date" name="date" value={videoToUpdate.date}
                onChange={handleVideoToUpdateInputs}
                />
            </label>
        </div>
        <div>

        </div>
            <h4>Playlist</h4>
            <p>Add your video to one or more playlists. Playlists can help viewers to discover your content faster. Learn more</p>
                <select
                onChange={handleVideoToUpdateInputs}
                name="playlists-dropdown" id="">
                <option value="">Please select...</option>
                {playlists.map((playlist, index) => {
                    const  {id, name} = playlist
                    return(
                        <option name="playlist" key={index}
                        value={id}
                        selected={videoToEdit.playlist.id}
                        >{name} </option>
                        )
                    })}
                    </select>
      <div className="visibility-selection">
          <h4>Visibility: </h4>
          //here I might need  diffrent handler type
          <select onChange={handleVideoToUpdateInputs} name="dropdown" id="">   
          {
          ["Unlisted", "Hiden", "Public"].map(visibility =>
          <option name="visibility" value={visibility} selected={videoToEdit.visibility === visibility}>
          {(visibility)}
          </option>)}
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
                    <input
                    name="madeForKids"
                    type="radio"
                    checked={videoToEdit.madeForKids === "yes"}
                    onChange={handleVideoToUpdateInputs}
                    id="1" value="yes"/>
                    <p>Yes, it's 'Made for Kids'</p>
                </label>
                <label htmlFor="">
                    <input
                    name="madeForKids" 
                    type="radio"
                    checked={videoToEdit.madeForKids === "no"}
                    onChange={handleVideoToUpdateInputs}
                    id="2" value="no"/>
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
                  <input
                  name="ageRestriction"
                  type="radio"
                  onChange={handleVideoToUpdateInputs}
                  checked={videoToEdit.ageRestriction === "yes"}
                  value="yes" />
                  <p>Yes, restrict my video to viewers over 18</p>
              </label>
              <label htmlFor="">
                  <input
                  name="ageRestriction"
                  type="radio"
                  onChange={handleVideoToUpdateInputs}
                  checked={videoToEdit.ageRestriction === "no"}
                  value="no" />
                  <p>No, don't restrict my video to viewers over 18 only</p>
              </label>
          </div>
      </div>
      <div>
          <button type="submit" onClick={handleSubmit}>Submit Changes</button>
      </div>

      </form>
      </section>

      <aside className="editForm_aside_video_section">
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