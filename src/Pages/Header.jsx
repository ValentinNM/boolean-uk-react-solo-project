import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Header() { 

    return  (
        <header className="header header_container">
                <div className=" two_column_grid header_left_menu" >
                    <button className="expand_menu_logo">
                        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjYxMnB4IiBoZWlnaHQ9IjYxMnB4IiB2aWV3Qm94PSIwIDAgNjEyIDYxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjEyIDYxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGcgaWQ9Il94MzNfXzZfIj4NCgkJPGc+DQoJCQk8cGF0aCBkPSJNNTgxLjQsNTIwLjE5OUgzMC42Yy0xNi44OTEsMC0zMC42LDEzLjcwOS0zMC42LDMwLjZDMCw1NjcuNjkxLDEzLjcwOSw1ODEuNCwzMC42LDU4MS40aDU1MC44DQoJCQkJYzE2Ljg5MSwwLDMwLjYtMTMuNzA5LDMwLjYtMzAuNjAyQzYxMiw1MzMuOTA4LDU5OC4yOTEsNTIwLjE5OSw1ODEuNCw1MjAuMTk5eiBNMzAuNiw5MS43OTloNTUwLjgNCgkJCQljMTYuODkxLDAsMzAuNi0xMy43MDgsMzAuNi0zMC42YzAtMTYuODkyLTEzLjcwOS0zMC42LTMwLjYtMzAuNkgzMC42QzEzLjcwOSwzMC42LDAsNDQuMzA4LDAsNjEuMg0KCQkJCUMwLDc4LjA5MSwxMy43MDksOTEuNzk5LDMwLjYsOTEuNzk5eiBNNTgxLjQsMjc1LjM5OUgzMC42QzEzLjcwOSwyNzUuMzk5LDAsMjg5LjEwOCwwLDMwNnMxMy43MDksMzAuNiwzMC42LDMwLjZoNTUwLjgNCgkJCQljMTYuODkxLDAsMzAuNi0xMy43MDksMzAuNi0zMC42UzU5OC4yOTEsMjc1LjM5OSw1ODEuNCwyNzUuMzk5eiIvPg0KCQk8L2c+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" />
                    </button> 
                    <div className="youTube_studio_logo">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/YouTube_Studio_logo.svg/2560px-YouTube_Studio_logo.svg.png" alt="" />
                    </div>
                </div>
                <form className="header_searchbar_form"
                // onSubmit = {handleSubmit}
                action=""
                >
                    <input
                   className="main_header_searchbar"
                   type="text"
                   placeholder="Search accross your channel"
                //    placeholder={<img className="header_search_magnifier" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6IzREQkJFQjsiIGQ9Ik00OTMuMjEsNDUwLjc5YzExLjcyLDExLjcxLDExLjcyLDMwLjcxLDAsNDIuNDJjLTUuODYsNS44Ni0xMy41Myw4Ljc5LTIxLjIxLDguNzkNCglzLTE1LjM1LTIuOTMtMjEuMjEtOC43OWwtOTYuNTctOTYuNTdjMTUuNzctMTIuNCwzMC4wMi0yNi42NSw0Mi40Mi00Mi40Mkw0OTMuMjEsNDUwLjc5eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGRjVDRDsiIGQ9Ik0zNTMuODMsMzExLjQxbDQyLjgxLDQyLjgxYy0xMi40LDE1Ljc3LTI2LjY1LDMwLjAyLTQyLjQyLDQyLjQybC00Mi44MS00Mi44MXYtMC4wMQ0KCWMxNi4yNy0xMS44MSwzMC42LTI2LjE0LDQyLjQxLTQyLjQxSDM1My44M3oiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiM0REJCRUI7IiBkPSJNMzkwLDIwMGMwLDQxLjU4LTEzLjQzLDgwLjA5LTM2LjE4LDExMS40MWMtMTEuODEsMTYuMjctMjYuMTQsMzAuNi00Mi40MSw0Mi40MQ0KCUMyODAuMDksMzc2LjU3LDI0MS41OCwzOTAsMjAwLDM5MEM5NS4yMywzOTAsMTAsMzA0Ljc3LDEwLDIwMFM5NS4yMywxMCwyMDAsMTBTMzkwLDk1LjIzLDM5MCwyMDB6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojQkVFN0Y0OyIgZD0iTTIwMCw1MGM4Mi43MSwwLDE1MCw2Ny4yOSwxNTAsMTUwcy02Ny4yOSwxNTAtMTUwLDE1MFM1MCwyODIuNzEsNTAsMjAwUzExNy4yOSw1MCwyMDAsNTB6Ii8+DQo8cGF0aCBkPSJNNTAwLjI4MSw0NDMuNzE5bC0xMzMuNDgtMTMzLjQ4QzM4OC41NDYsMjc3LjQ4NSw0MDAsMjM5LjU1NSw0MDAsMjAwQzQwMCw4OS43MiwzMTAuMjgsMCwyMDAsMFMwLDg5LjcyLDAsMjAwDQoJczg5LjcyLDIwMCwyMDAsMjAwYzM5LjU1NiwwLDc3LjQ4Ni0xMS40NTUsMTEwLjIzOS0zMy4xOThsMzYuODk1LDM2Ljg5NWMwLjAwNSwwLjAwNSwwLjAxLDAuMDEsMC4wMTYsMC4wMTZsOTYuNTY4LDk2LjU2OA0KCUM0NTEuMjc2LDUwNy44MzgsNDYxLjMxOSw1MTIsNDcyLDUxMnMyMC43MjQtNC4xNjIsMjguMjc4LTExLjcxNkM1MDcuODM3LDQ5Mi43MzEsNTEyLDQ4Mi42ODcsNTEyLDQ3Mg0KCVM1MDcuODM3LDQ1MS4yNjksNTAwLjI4MSw0NDMuNzE5eiBNMzI2LjUxNiwzNTQuNzkzYzEwLjM1LTguNDY3LDE5LjgxMS0xNy45MjgsMjguMjc3LTI4LjI3N2wyOC4zNzEsMjguMzcxDQoJYy04LjYyOCwxMC4xODMtMTguMDk0LDE5LjY1LTI4LjI3NywyOC4yNzdMMzI2LjUxNiwzNTQuNzkzeiBNMjAsMjAwYzAtOTkuMjUyLDgwLjc0OC0xODAsMTgwLTE4MHMxODAsODAuNzQ4LDE4MCwxODANCgljMCwzOC4xNzUtMTEuODUxLDc0LjY2Ny0zNC4yNzIsMTA1LjUzNWMtMTEuMjE3LDE1LjQ1My0yNC43MzksMjguOTc2LTQwLjE5Miw0MC4xOTJjMCwwLjAwMS0wLjAwMSwwLjAwMS0wLjAwMiwwLjAwMg0KCUMyNzQuNjY3LDM2OC4xNDksMjM4LjE3NSwzODAsMjAwLDM4MEMxMDAuNzQ4LDM4MCwyMCwyOTkuMjUyLDIwLDIwMHogTTQ4Ni4xMzksNDg2LjEzOWMtMy43OCwzLjc4LTguODAxLDUuODYxLTE0LjEzOSw1Ljg2MQ0KCXMtMTAuMzU5LTIuMDgxLTE0LjEzOS01Ljg2MWwtODguNzk1LTg4Ljc5NWMxMC4xMjctOC42OTEsMTkuNTg3LTE4LjE1LDI4LjI3Ny0yOC4yNzdsODguNzk4LDg4Ljc5OA0KCUM0ODkuOTE5LDQ2MS42MzksNDkyLDQ2Ni42NTgsNDkyLDQ3MlM0ODkuOTE5LDQ4Mi4zNjEsNDg2LjEzOSw0ODYuMTM5eiIvPg0KPHBhdGggZD0iTTM2MCwyMDBjMC04OC4yMjUtNzEuNzc1LTE2MC0xNjAtMTYwUzQwLDExMS43NzUsNDAsMjAwczcxLjc3NSwxNjAsMTYwLDE2MFMzNjAsMjg4LjIyNSwzNjAsMjAweiBNMjAwLDM0MA0KCWMtNzcuMTk2LDAtMTQwLTYyLjgwNC0xNDAtMTQwUzEyMi44MDQsNjAsMjAwLDYwczE0MCw2Mi44MDQsMTQwLDE0MFMyNzcuMTk2LDM0MCwyMDAsMzQweiIvPg0KPHBhdGggZD0iTTMwNi4zMTcsMTY5Ljk5NWM1LjE1NS0xLjk4MSw3LjcyOS03Ljc2Niw1Ljc0OC0xMi45MjJjLTguNjExLTIyLjQxMi0yMy42MDQtNDEuNTc0LTQzLjM2LTU1LjQxMw0KCUMyNDguNDc5LDg3LjQ5LDIyNC43MjEsODAsMjAwLDgwYy01LjUyMiwwLTEwLDQuNDc4LTEwLDEwczQuNDc4LDEwLDEwLDEwYzQxLjA5OSwwLDc4LjYzMSwyNS44MTgsOTMuMzk2LDY0LjI0Nw0KCWMxLjUyOCwzLjk3Niw1LjMxNyw2LjQxNiw5LjMzNyw2LjQxNkMzMDMuOTI1LDE3MC42NjMsMzA1LjEzOCwxNzAuNDQ4LDMwNi4zMTcsMTY5Ljk5NXoiLz4NCjxwYXRoIGQ9Ik0zMTAsMTkwYy01LjUyLDAtMTAsNC40OC0xMCwxMHM0LjQ4LDEwLDEwLDEwczEwLTQuNDgsMTAtMTBTMzE1LjUyLDE5MCwzMTAsMTkweiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" />}
                    // value={mainHeaderSearchInput}
                    // onChange={handleSearchedInput}
                    />
                </form>
                <div className="three_column_grid">
                <Button 
                  sx={{
                    color: "red"
                  }}
                 variant="contained" href="#contained-buttons">Link</Button>
                 
                 <Button 
                    sx={{color: "red"}}
                    variant="contained"
                    href="#contained-buttons">
                    <Link to="/create-video">Create</Link>
                 </Button>
                    <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 50, height: 50 }}
                    />
                </div>
            </header>
    )
}