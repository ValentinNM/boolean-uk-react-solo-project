import { useState, useEffect } from "react";

export default function EditVideo (props)  { 

    const {videoToEdit} = props;
     console.log("props inside EditVideo: ", videoToEdit)

    const [videoToUpdate, setVideoToUpdate] = useState ({
        title: "",
        description: "",
        thumbnail: "",
        visibility: false,
        ageRestriction: false,
        date: "",
        views: "", 
        comments: "",   
        likevsdislike: "",
        madeForKids: false
    })

    useEffect(() => {         
        if(videoToEdit) { 
            console.log("useEffect inside EditVideo")
            setVideoToUpdate(videoToEdit)
        }
    }, [videoToEdit]);

    const handleVideoToUpdateInputs = event => { 

        const inputType = event.target.type;
        const inputName = event.target.name;

        console.log("inside handleVideoToUpdateImputs: ", inputType, inputName)

        if(inputType === "option") { 
            console.log("inputType if option:", inputType)
        } 

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
      <form
      className="" action="">
      <label htmlFor="title">Title </label>
      <input type="text" name="title" id="title"
      value={videoToUpdate.title}
      />
      <label htmlFor="description">Description</label>
      <textarea name="description" id="description" cols="30" rows="10" placeholder="Tell viewers about your video"
      ></textarea>
      <div className="thumbnail_area">
          <strong>Thumbnail</strong>
          <p>Select or upload a picture that shows what's in your video. A good thumbnail stands out and draws viewers' attention. Learn more</p>
          <div className="main_thumbnails_container">
          <label>
              <img className="video_thumbnail"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9_emie4s_xuVFMK6np-8ChNX54KD-LmJ4ew&usqp=CAU" alt="thumbnail1" /></label>
              <input type="radio" value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9_emie4s_xuVFMK6np-8ChNX54KD-LmJ4ew&usqp=CAU"
               />
          <label>
              <img className="video_thumbnail" src="https://miro.medium.com/max/1400/1*2oszyW4ja3z9-VLfTjBwFA.jpeg" alt="thumbnail2" /></label>
              <input type="radio" value="https://miro.medium.com/max/1400/1*2oszyW4ja3z9-VLfTjBwFA.jpeg"
              />
          <label>
              <img className="video_thumbnail"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlM4kbpQOpMtL27TzsZsI5PFT9EbFdHpsGSQ&usqp=CAU" alt="thumbnail3" /></label>
              <input
              type="radio"
              value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlM4kbpQOpMtL27TzsZsI5PFT9EbFdHpsGSQ&usqp=CAU"
               />
          </div>
      </div>
      <select name="" id="">
          <option value="">Please select...</option>
          {/* {playlists.map((playlist) => {
              const  {id, name} = playlist
              return(
                  <option value={id}>{name}</option>
              )
          })} */}
      </select>
      <div>
          <h4>Playlist</h4>
          <p>Add your video to one or more playlists. Playlists can help viewers to discover your content faster. Learn more</p>
          <ul>
              <li>
                  <label htmlFor="">
                      <input
                      name="motivational" type="checkbox"/>
                      Motivational
                  </label>
              </li>
              <li>
                  <label htmlFor="">
                      <input
                      name="sports" type="checkbox"/>
                      Sports
                  </label>
              </li>
          </ul>
      </div>
      <div className="visibility-selection">
          <h4>Visibility: </h4>
          <select name="" id="">
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
                  <input type="radio" value="yes"/>
                  <p>Yes, it's 'Made for Kids'</p>
              </label>
              <label htmlFor="">
                  <input type="radio" value="no"/>
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
                  <input type="radio" value="yes" />
                  <p>Yes, restrict my video to viewers over 18</p>
              </label>
              <label htmlFor="">
                  <input type="radio" value="no" />
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