import React from "react"

export default function Dashboard()  { 

    return (
        <div className="dashboard_main_container">
        <header className="dashboard_header">
        <h2>
            <strong> Channel dashboard </strong>
        </h2>
        </header>
        <div className="three_column_grid">
        <div className="dotted">
            <h2>Latest YouTube Short Performance</h2>
            <img className="video_thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv0aWbHmx85Ftynk6_QuwLxcZzZZVbtVtE2A&usqp=CAU" alt="last short video" />
        </div>
        <div className="dotted">
            <h2>Channel analytics</h2>
        </div>
        <div className="dotted right_side_suggestions">
            <div className="dotted dashboard_side_suggestion_container">
                <h2>News</h2>
            </div>
            <div className="dotted dashboard_side_suggestion_container">
                <h2>Ideas for you</h2>
            </div>
            <div className="dotted dashboard_side_suggestion_container">
                <h2>Creator Insider</h2>
            </div>
            <div className="dotted dashboard_side_suggestion_container">
            <h2>What's new in Studio</h2>
            <ul>
                <li>
                    <a href="">Faster uploads in YouTube Studio</a>
                </li>
                <li>
                    <a href="">Customise your channel in Studio</a>                    
                </li>
                <li>
                    <a href="">See more creator updates</a>    
                </li>
            </ul>
            </div>
        </div>
        </div>
        </div>
    ) 

}