
export default function ChannelContent ()  { 

    return (
        <div className="dotted content_container">
        <h2>Channel Content </h2>
        <h2>Inside ChannelContent function</h2>
        <nav>
            <ul>
                <li>Uploads</li>
                <li>Live</li>
            </ul>
        </nav>
            {/* // filter section for restrictions */}
        <div className="two_column_grid filter_section">
            {/* filter icon */}
            <img src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTUwNC41IDBoLTQ5N2MtNC4xNDIgMC03LjUgMy4zNTctNy41IDcuNXY3NS40YzAgNC4xNDMgMy4zNTggNy41IDcuNSA3LjVoMzQuN2M0LjE0MiAwIDcuNS0zLjM1NyA3LjUtNy41cy0zLjM1OC03LjUtNy41LTcuNWgtMjcuMnYtNjAuNGg0ODJ2NjAuNGgtNDI0LjhjLTQuMTQyIDAtNy41IDMuMzU3LTcuNSA3LjVzMy4zNTggNy41IDcuNSA3LjVoNDMyLjNjNC4xNDIgMCA3LjUtMy4zNTcgNy41LTcuNXYtNzUuNGMwLTQuMTQzLTMuMzU4LTcuNS03LjUtNy41eiIvPjxwYXRoIGQ9Im00MDUuMSAyMTAuOGgtMjk4LjJjLTQuMTQyIDAtNy41IDMuMzU3LTcuNSA3LjV2NzUuNGMwIDQuMTQzIDMuMzU4IDcuNSA3LjUgNy41aDI5OC4yYzQuMTQyIDAgNy41LTMuMzU3IDcuNS03LjV2LTc1LjRjMC00LjE0My0zLjM1OC03LjUtNy41LTcuNXptLTcuNSA3NS40aC0yODMuMnYtNjAuNGgyODMuMnoiLz48cGF0aCBkPSJtNDU0LjggMTA1LjRoLTM5Ny42Yy00LjE0MiAwLTcuNSAzLjM1Ny03LjUgNy41djc1LjRjMCA0LjE0MyAzLjM1OCA3LjUgNy41IDcuNWgzOTcuNmM0LjE0MiAwIDcuNS0zLjM1NyA3LjUtNy41di03NS40YzAtNC4xNDItMy4zNTgtNy41LTcuNS03LjV6bS03LjUgNzUuNGgtMzgyLjZ2LTYwLjRoMzgyLjZ6Ii8+PHBhdGggZD0ibTMwNS43IDQyMS42aC05OS40Yy00LjE0MiAwLTcuNSAzLjM1Ny03LjUgNy41djc1LjRjMCA0LjE0MyAzLjM1OCA3LjUgNy41IDcuNWg5OS40YzQuMTQyIDAgNy41LTMuMzU3IDcuNS03LjV2LTc1LjRjMC00LjE0My0zLjM1OC03LjUtNy41LTcuNXptLTcuNSA3NS40aC04NC40di02MC40aDg0LjR6Ii8+PHBhdGggZD0ibTM1NS40IDMxNi4yaC0xOTguOGMtNC4xNDIgMC03LjUgMy4zNTctNy41IDcuNXY3NS40YzAgNC4xNDMgMy4zNTggNy41IDcuNSA3LjVoMTk4LjhjNC4xNDIgMCA3LjUtMy4zNTcgNy41LTcuNXYtNzUuNGMwLTQuMTQyLTMuMzU4LTcuNS03LjUtNy41em0tNy41IDc1LjRoLTE4My44di02MC40aDE4My44eiIvPjwvZz48L3N2Zz4="/>
            <select name="" id="">
                <option value="">Filter</option> 
                <option value="">To be edited</option>
            </select>
        </div>
        
        <div className="multi_filtering_options">
            <input name="video" id="video" type="checked" />
            <h5>Visibility</h5>
            <h5>Restricctions</h5>
            <h5>Date</h5>
            <h5>Views</h5>
            <h5>Comments</h5>
            <h5>Likes(vs. dislikes)</h5>
        </div>
        <div className="video_listing_area">
            {/* map through db and have a video object rendered in li */}
            <ul>
                <li>
                    <input type="checkbox" />
                    {/* status Publiuc/ draft */}
                    <div>
                        <img src="" alt="icon" />
                        <p>Public</p>
                    </div>
                <div>Restrictions</div>
                <div className="sort_by_date">
                    <p>Data</p>
                    <img src="" alt="up or down arrow" />
                </div>
                <div> Views </div>
                <div> Comments </div>
                <button className="edit_draft" >
                Edit Draft
                </button>
                </li>
            </ul>
        </div>

        </div>
    ) 

}