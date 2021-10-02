// import React from "react";
// import { useHistory } from "react-router"
import { Link } from "react-router-dom"

export default function AsideMenu () {

    return(
        <aside className=" padding_10 aside_main_menu">
            <div className="aside_avatar_section">
                <div className="cover">
                <img src="https://www.kindpng.com/picc/m/472-4721746_dwayne-johnson-fanny-pack-meme-download-dwayne-johnson.png" alt="" />                </div>
                <h3>Your channel</h3>
                <p>@ da 🗿</p>
            </div>
            <section className="aside_menu_selection">
                <div className="menu-selection__two_column_grid">
                    <ul className="two_column_grid__aside_menu ">
                        <li >
                            <img className="icon" src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0xOTcuMzMyMDMxIDE3MC42Njc5NjloLTE2MGMtMjAuNTg1OTM3IDAtMzcuMzMyMDMxLTE2Ljc0NjA5NC0zNy4zMzIwMzEtMzcuMzM1OTM4di05NmMwLTIwLjU4NTkzNyAxNi43NDYwOTQtMzcuMzMyMDMxIDM3LjMzMjAzMS0zNy4zMzIwMzFoMTYwYzIwLjU4OTg0NCAwIDM3LjMzNTkzOCAxNi43NDYwOTQgMzcuMzM1OTM4IDM3LjMzMjAzMXY5NmMwIDIwLjU4OTg0NC0xNi43NDYwOTQgMzcuMzM1OTM4LTM3LjMzNTkzOCAzNy4zMzU5Mzh6bS0xNjAtMTM4LjY2Nzk2OWMtMi45NDE0MDYgMC01LjMzMjAzMSAyLjM5MDYyNS01LjMzMjAzMSA1LjMzMjAzMXY5NmMwIDIuOTQ1MzEzIDIuMzkwNjI1IDUuMzM1OTM4IDUuMzMyMDMxIDUuMzM1OTM4aDE2MGMyLjk0NTMxMyAwIDUuMzM1OTM4LTIuMzkwNjI1IDUuMzM1OTM4LTUuMzM1OTM4di05NmMwLTIuOTQxNDA2LTIuMzkwNjI1LTUuMzMyMDMxLTUuMzM1OTM4LTUuMzMyMDMxem0wIDAiLz48cGF0aCBkPSJtMTk3LjMzMjAzMSA1MTJoLTE2MGMtMjAuNTg1OTM3IDAtMzcuMzMyMDMxLTE2Ljc0NjA5NC0zNy4zMzIwMzEtMzcuMzMyMDMxdi0yMjRjMC0yMC41ODk4NDQgMTYuNzQ2MDk0LTM3LjMzNTkzOCAzNy4zMzIwMzEtMzcuMzM1OTM4aDE2MGMyMC41ODk4NDQgMCAzNy4zMzU5MzggMTYuNzQ2MDk0IDM3LjMzNTkzOCAzNy4zMzU5Mzh2MjI0YzAgMjAuNTg1OTM3LTE2Ljc0NjA5NCAzNy4zMzIwMzEtMzcuMzM1OTM4IDM3LjMzMjAzMXptLTE2MC0yNjYuNjY3OTY5Yy0yLjk0MTQwNiAwLTUuMzMyMDMxIDIuMzkwNjI1LTUuMzMyMDMxIDUuMzM1OTM4djIyNGMwIDIuOTQxNDA2IDIuMzkwNjI1IDUuMzMyMDMxIDUuMzMyMDMxIDUuMzMyMDMxaDE2MGMyLjk0NTMxMyAwIDUuMzM1OTM4LTIuMzkwNjI1IDUuMzM1OTM4LTUuMzMyMDMxdi0yMjRjMC0yLjk0NTMxMy0yLjM5MDYyNS01LjMzNTkzOC01LjMzNTkzOC01LjMzNTkzOHptMCAwIi8+PHBhdGggZD0ibTQ3NC42Njc5NjkgNTEyaC0xNjBjLTIwLjU4OTg0NCAwLTM3LjMzNTkzOC0xNi43NDYwOTQtMzcuMzM1OTM4LTM3LjMzMjAzMXYtOTZjMC0yMC41ODk4NDQgMTYuNzQ2MDk0LTM3LjMzNTkzOCAzNy4zMzU5MzgtMzcuMzM1OTM4aDE2MGMyMC41ODU5MzcgMCAzNy4zMzIwMzEgMTYuNzQ2MDk0IDM3LjMzMjAzMSAzNy4zMzU5Mzh2OTZjMCAyMC41ODU5MzctMTYuNzQ2MDk0IDM3LjMzMjAzMS0zNy4zMzIwMzEgMzcuMzMyMDMxem0tMTYwLTEzOC42Njc5NjljLTIuOTQ1MzEzIDAtNS4zMzU5MzggMi4zOTA2MjUtNS4zMzU5MzggNS4zMzU5Mzh2OTZjMCAyLjk0MTQwNiAyLjM5MDYyNSA1LjMzMjAzMSA1LjMzNTkzOCA1LjMzMjAzMWgxNjBjMi45NDE0MDYgMCA1LjMzMjAzMS0yLjM5MDYyNSA1LjMzMjAzMS01LjMzMjAzMXYtOTZjMC0yLjk0NTMxMy0yLjM5MDYyNS01LjMzNTkzOC01LjMzMjAzMS01LjMzNTkzOHptMCAwIi8+PHBhdGggZD0ibTQ3NC42Njc5NjkgMjk4LjY2Nzk2OWgtMTYwYy0yMC41ODk4NDQgMC0zNy4zMzU5MzgtMTYuNzQ2MDk0LTM3LjMzNTkzOC0zNy4zMzU5Mzh2LTIyNGMwLTIwLjU4NTkzNyAxNi43NDYwOTQtMzcuMzMyMDMxIDM3LjMzNTkzOC0zNy4zMzIwMzFoMTYwYzIwLjU4NTkzNyAwIDM3LjMzMjAzMSAxNi43NDYwOTQgMzcuMzMyMDMxIDM3LjMzMjAzMXYyMjRjMCAyMC41ODk4NDQtMTYuNzQ2MDk0IDM3LjMzNTkzOC0zNy4zMzIwMzEgMzcuMzM1OTM4em0tMTYwLTI2Ni42Njc5NjljLTIuOTQ1MzEzIDAtNS4zMzU5MzggMi4zOTA2MjUtNS4zMzU5MzggNS4zMzIwMzF2MjI0YzAgMi45NDUzMTMgMi4zOTA2MjUgNS4zMzU5MzggNS4zMzU5MzggNS4zMzU5MzhoMTYwYzIuOTQxNDA2IDAgNS4zMzIwMzEtMi4zOTA2MjUgNS4zMzIwMzEtNS4zMzU5Mzh2LTIyNGMwLTIuOTQxNDA2LTIuMzkwNjI1LTUuMzMyMDMxLTUuMzMyMDMxLTUuMzMyMDMxem0wIDAiLz48L3N2Zz4=" />
                        </li>
                        <li>
                        <Link to="/dashboard">Dashboard </Link>
                        </li>
                    </ul>
                </div>
                <div className="menu-selection__two_column_grid">
                    <ul className="two_column_grid__aside_menu">
                        <li>
                        {/* <img className="icon" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNEODM2MkE7IiBkPSJNNTA2LjcwMywxNDUuNjU1YzAsMC01LjI5Ny0zNy45NTktMjAuMzAzLTU0LjczMWMtMTkuNDIxLTIyLjA2OS00MS40OS0yMi4wNjktNTEuMi0yMi45NTINCglDMzYzLjY5Nyw2Mi42NzYsMjU2LDYxLjc5MywyNTYsNjEuNzkzbDAsMGMwLDAtMTA3LjY5NywwLjg4My0xNzkuMiw2LjE3OWMtOS43MSwwLjg4My0zMS43NzksMS43NjYtNTEuMiwyMi45NTINCglDOS43MSwxMDcuNjk3LDUuMjk3LDE0NS42NTUsNS4yOTcsMTQ1LjY1NVMwLDE5MC42NzYsMCwyMzUuNjk3djQxLjQ5YzAsNDUuMDIxLDUuMjk3LDg5LjE1OSw1LjI5Nyw4OS4xNTkNCglzNS4yOTcsMzcuOTU5LDIwLjMwMyw1NC43MzFjMTkuNDIxLDIyLjA2OSw0NS4wMjEsMjEuMTg2LDU2LjQ5NywyMy44MzVDMTIyLjcwMyw0NDkuMzI0LDI1Niw0NTAuMjA3LDI1Niw0NTAuMjA3DQoJczEwNy42OTcsMCwxNzkuMi02LjE3OWM5LjcxLTAuODgzLDMxLjc3OS0xLjc2Niw1MS4yLTIyLjk1MmMxNS4wMDctMTYuNzcyLDIwLjMwMy01NC43MzEsMjAuMzAzLTU0LjczMVM1MTIsMzIxLjMyNCw1MTIsMjc3LjE4Ng0KCXYtNDEuNDlDNTEyLDE5MC42NzYsNTA2LjcwMywxNDUuNjU1LDUwNi43MDMsMTQ1LjY1NSIvPg0KPHBvbHlnb24gc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIHBvaW50cz0iMTk0LjIwNywxNjYuODQxIDE5NC4yMDcsMzU4LjQgMzYxLjkzMSwyNjQuODI4ICIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" /> */}
                        <img className="icon" src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIC03NCA1MTIuMDAwNjMgNTEyIiB3aWR0aD0iNTEycHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTI3MS4yNzczNDQgMTQ0LjExMzI4MS02MS44ODY3MTktMzguMjM0Mzc1djc2LjQ2ODc1bC4wMDM5MDYgNzYuNDY4NzUgNjEuODgyODEzLTM4LjIzNDM3NSA2MS44OTA2MjUtMzguMjM0Mzc1em0wIDAiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGQ9Im0yMDkuMzkwNjI1IDEwNS44Nzg5MDYgNjEuODg2NzE5IDM4LjIzNDM3NSA2MS44OTA2MjUgMzguMjM0Mzc1LTYxLjg5MDYyNSAzOC4yMzQzNzUtNjEuODgyODEzIDM4LjIzNDM3NS0uMDAzOTA2LTc2LjQ2ODc1em0tMTk1LjU3NDIxOSAxNjMuMzc1YzUuMjQyMTg4IDUwLjEyMTA5NCAyNS4zNjcxODggNzAuMTE3MTg4IDY2LjA5Mzc1IDc2LjQ2ODc1IDc2LjczMDQ2OSAxMS45NjA5MzggMjc1LjQ0OTIxOSAxMS45NjA5MzggMzUyLjE4MzU5NCAwIDQwLjcyMjY1Ni02LjM1MTU2MiA2MC44NDc2NTYtMjYuMzQzNzUgNjYuMDg5ODQ0LTc2LjQ2ODc1IDUuMTI4OTA2LTQ4Ljk5NjA5NCA1LjEyODkwNi0xMjQuODE2NDA2IDAtMTczLjgxMjUtNS4yNDIxODgtNTAuMTIxMDk0LTI1LjM2NzE4OC03MC4xMTcxODctNjYuMDg5ODQ0LTc2LjQ2ODc1LTc2LjczNDM3NS0xMS45NjA5MzctMjc1LjQ1MzEyNS0xMS45NjA5MzctMzUyLjE4MzU5NCAwLTQwLjcyNjU2MiA2LjM1MTU2My02MC44NTE1NjIgMjYuMzQ3NjU2LTY2LjA5Mzc1IDc2LjQ2ODc1LTUuMTI1IDQ4Ljk5NjA5NC01LjEyNSAxMjQuODE2NDA2IDAgMTczLjgxMjV6bTAgMCIgZmlsbD0iI2YwMCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PHBhdGggZD0ibTMyOS44NDc2NTYgMzQzLjQ5MjE4OGMtMjMuNDkyMTg3Ljc5Njg3NC00OC4zMzU5MzcgMS4xOTkyMTgtNzMuODQ3NjU2IDEuMTk5MjE4LTczLjc0NjA5NCAwLTEzOC45OTYwOTQtMy4zMDg1OTQtMTc0LjU1MDc4MS04Ljg1MTU2Mi0zNy45ODgyODEtNS45MjE4NzUtNTMuMDgyMDMxLTIzLjYyMTA5NC01Ny42ODc1LTY3LjYyODkwNi01LjAzNTE1Ny00OC4xNDg0MzgtNS4wMzUxNTctMTIzLjU4MjAzMiAwLTE3MS43MzA0NjkgNC42MDU0NjktNDQuMDA3ODEzIDE5LjY5OTIxOS02MS43MDMxMjUgNTcuNjg3NS02Ny42MjUgNi4xNjc5NjktLjk2NDg0NCAxMy40MTQwNjItMS44Nzg5MDcgMjEuNTQyOTY5LTIuNzIyNjU3IDUuNDk2MDkzLS41NzAzMTIgOS40ODgyODEtNS40ODQzNzQgOC45MTc5NjgtMTAuOTgwNDY4LS41NzAzMTItNS40OTIxODgtNS40OTIxODctOS40ODgyODItMTAuOTgwNDY4LTguOTE0MDYzLTguNDY4NzUuODc4OTA3LTE2LjA1ODU5NCAxLjgzOTg0NC0yMi41NjI1IDIuODUxNTYzLTIzLjY5NTMxMyAzLjY5NTMxMi00MC4zMDQ2ODggMTEuNjUyMzQ0LTUyLjI2NTYyNiAyNS4wMzkwNjItMTIuMzA4NTkzIDEzLjc2NTYyNS0xOS4zNzEwOTMgMzIuOTE3OTY5LTIyLjIzNDM3NCA2MC4yNzM0MzgtNS4xNTYyNSA0OS4zMTY0MDYtNS4xNTYyNSAxMjYuNTc0MjE4IDAgMTc1Ljg5MDYyNSAyLjg2MzI4MSAyNy4zNTU0NjkgOS45MjU3ODEgNDYuNTAzOTA2IDIyLjIzNDM3NCA2MC4yNzM0MzcgMTEuOTYwOTM4IDEzLjM4NjcxOSAyOC41NzAzMTMgMjEuMzQzNzUgNTIuMjY1NjI2IDI1LjAzNTE1NiAzNi41MTE3MTggNS42OTUzMTMgMTAyLjkxNzk2OCA5LjA5Mzc1IDE3Ny42MzI4MTIgOS4wOTM3NSAyNS43MzQzNzUgMCA1MC44MDg1OTQtLjQwNjI1IDc0LjUyMzQzOC0xLjIxMDkzNyA1LjUxOTUzMS0uMTg3NSA5Ljg0Mzc1LTQuODEyNSA5LjY1NjI1LTEwLjMzMjAzMS0uMTg3NS01LjUxOTUzMi00Ljc4OTA2My05Ljg0Mzc1LTEwLjMzMjAzMi05LjY2MDE1NnptMCAwIi8+PHBhdGggZD0ibTUwOC4xMzI4MTIgOTQuNDAyMzQ0Yy0yLjg2MzI4MS0yNy4zNTE1NjMtOS45MjU3ODEtNDYuNTAzOTA2LTIyLjIzMDQ2OC02MC4yNzM0MzgtMTEuOTY0ODQ0LTEzLjM4NjcxOC0yOC41NzQyMTktMjEuMzQzNzUtNTIuMjY5NTMyLTI1LjAzNTE1Ni0zNi41MTU2MjQtNS42OTUzMTItMTAyLjkyMTg3NC05LjA5Mzc1LTE3Ny42MzI4MTItOS4wOTM3NS0yNS43MzQzNzUgMC01MC44MDQ2ODguNDEwMTU2LTc0LjUxOTUzMSAxLjIxMDkzOC01LjUyMzQzOC4xODc1LTkuODQ3NjU3IDQuODEyNS05LjY2MDE1NyAxMC4zMzIwMzEuMTg3NSA1LjUyMzQzNyA0Ljc5Mjk2OSA5Ljg1NTQ2OSAxMC4zMzU5MzggOS42NjAxNTYgMjMuNDg4MjgxLS43OTY4NzUgNDguMzM1OTM4LTEuMTk5MjE5IDczLjg0NzY1Ni0xLjE5OTIxOSA3My43MzgyODIgMCAxMzguOTkyMTg4IDMuMzA4NTk0IDE3NC41NTA3ODIgOC44NTE1NjMgMzcuOTg0Mzc0IDUuOTI1NzgxIDUzLjA4MjAzMSAyMy42MjEwOTMgNTcuNjgzNTkzIDY3LjYyODkwNiA1LjAzOTA2MyA0OC4xNDg0MzcgNS4wMzkwNjMgMTIzLjU4MjAzMSAwIDE3MS43MzA0NjktNC42MDE1NjIgNDQuMDA3ODEyLTE5LjY5OTIxOSA2MS43MDMxMjUtNTcuNjgzNTkzIDY3LjYyODkwNi02LjE2Nzk2OS45NjA5MzgtMTMuNDE3OTY5IDEuODc1LTIxLjU0Njg3NiAyLjcxODc1LTUuNDkyMTg3LjU3MDMxMi05LjQ4NDM3NCA1LjQ4NDM3NS04LjkxNDA2MiAxMC45ODA0NjkuNTM1MTU2IDUuMTQ0NTMxIDQuODc1IDguOTY4NzUgOS45MzM1OTQgOC45Njg3NS4zNDc2NTYgMCAuNjk1MzEyLS4wMTk1MzEgMS4wNDY4NzUtLjA1NDY4OCA4LjQ2NDg0My0uODc4OTA2IDE2LjA1NDY4Ny0xLjgzNTkzNyAyMi41NTg1OTMtMi44NTE1NjIgMjMuNjk1MzEzLTMuNjk1MzEzIDQwLjMwNDY4OC0xMS42NDg0MzggNTIuMjY5NTMyLTI1LjAzNTE1NyAxMi4zMDQ2ODctMTMuNzY5NTMxIDE5LjM2NzE4Ny0zMi45MjE4NzQgMjIuMjMwNDY4LTYwLjI3MzQzNyA1LjE1NjI1LTQ5LjMxNjQwNiA1LjE1NjI1LTEyNi41NzgxMjUgMC0xNzUuODk0NTMxem0wIDAiLz48cGF0aCBkPSJtMzM4LjQyMTg3NSAxNzMuODM5ODQ0LTEyMy43NzM0MzctNzYuNDcyNjU2Yy0zLjA4NTkzOC0xLjkwNjI1LTYuOTYwOTM4LTEuOTkyMTg4LTEwLjEyODkwNy0uMjI2NTYzLTMuMTY0MDYyIDEuNzY1NjI1LTUuMTI4OTA2IDUuMTA5Mzc1LTUuMTI4OTA2IDguNzM0Mzc1djE1Mi45NDE0MDZjMCAzLjYyNSAxLjk2NDg0NCA2Ljk2ODc1IDUuMTI4OTA2IDguNzM0Mzc1IDEuNTE5NTMxLjg0Mzc1IDMuMTk1MzEzIDEuMjY1NjI1IDQuODcxMDk0IDEuMjY1NjI1IDEuODI4MTI1IDAgMy42NDg0MzctLjUgNS4yNTc4MTMtMS40OTIxODdsMTIzLjc3MzQzNy03Ni40Njg3NWMyLjk0OTIxOS0xLjgyNDIxOSA0Ljc0NjA5NC01LjA0Mjk2OSA0Ljc0NjA5NC04LjUwNzgxMyAwLTMuNDY4NzUtMS43OTY4NzUtNi42ODc1LTQuNzQ2MDk0LTguNTA3ODEyem0tMTE5LjAyNzM0NCA2Ny4wNDI5Njh2LTExNy4wNzAzMTJsOTQuNzQyMTg4IDU4LjUzNTE1NnptMCAwIi8+PHBhdGggZD0ibTE0MS44NDM3NSAyMy4wMzUxNTZjLjIyMjY1NiAwIC40NDkyMTktLjAwNzgxMi42NzU3ODEtLjAxOTUzMSA1LjUxMTcxOS0uMzY3MTg3IDkuNjc5Njg4LTUuMTMyODEzIDkuMzEyNS0xMC42NDQ1MzEtLjM2NzE4Ny01LjUxMTcxOS01LjE0MDYyNS05LjY4NzUtMTAuNjQ0NTMxLTkuMzE2NDA2aC0uMDA3ODEyYy01LjUxMTcxOS4zNjcxODctOS42NzU3ODIgNS4xMzI4MTItOS4zMDg1OTQgMTAuNjQ0NTMxLjM1MTU2MiA1LjI4NTE1NiA0Ljc1IDkuMzM1OTM3IDkuOTcyNjU2IDkuMzM1OTM3em0wIDAiLz48cGF0aCBkPSJtMzY5LjQ4NDM3NSAzNDEuNjgzNTk0Yy01LjUxMTcxOS4zNjMyODEtOS42ODM1OTQgNS4xMjg5MDYtOS4zMTY0MDYgMTAuNjQwNjI1LjM1MTU2MiA1LjI4NTE1NiA0Ljc1IDkuMzM1OTM3IDkuOTY4NzUgOS4zMzU5MzcuMjI2NTYyIDAgLjQ0OTIxOS0uMDA3ODEyLjY3NTc4MS0uMDE5NTMxaC4wMDc4MTJjNS41MTE3MTktLjM2NzE4NyA5LjY3NTc4Mi01LjEzMjgxMyA5LjMwODU5NC0xMC42NDQ1MzEtLjM2NzE4Ny01LjUxMTcxOS01LjEyNS05LjY3NTc4Mi0xMC42NDQ1MzEtOS4zMTI1em0wIDAiLz48L3N2Zz4=" />
                        </li>
                        <li>
                            <Link to="/channel-content">Content</Link>
                        </li>
                    </ul>
                </div>
                <div className="menu-selection__two_column_grid">
                    <ul className="two_column_grid__aside_menu">
                        <li>
                            <img src="" alt="" />
                        </li>
                        <li>
                            <strong>Playlists</strong>
                        </li>
                    </ul>
                </div>
                <div className="menu-selection__two_column_grid">
                    <ul>
                        <li>
                            <img src="" alt="" />
                        </li>
                        <li>
                        <strong>Analytics</strong>
                        </li>
                    </ul>
                </div>
                <div className="menu-selection__two_column_grid">
                    <ul>
                        <li>
                            <img src="" alt="" />
                        </li>
                        <li>
                        <strong>Comments</strong>
                        </li>
                    </ul>
                </div>
                <div className="menu-selection__two_column_grid">
                    <ul>
                        <li>
                            <img src="" alt="" />
                        </li>
                        <li>
                        <strong>Subtitles</strong>
                        </li>
                    </ul>
                </div>
                <div className="menu-selection__two_column_grid">
                    <ul>
                        <li>
                            <img src="" alt="" />
                        </li>
                        <li>
                        <strong>Copyright</strong>
                        </li>
                    </ul>
                </div>
                <div className="menu-selection__two_column_grid">
                    <ul>
                        <li>
                            <img src="" alt="" />
                        </li>
                        <li>
                        <strong>Monetisation</strong>
                        </li>
                    </ul>
                </div>
                <div className="menu-selection__two_column_grid">
                    <ul>
                        <li>
                            <img src="" alt="" />
                        </li>
                        <li>
                        <strong>Customisation</strong>
                        </li>
                    </ul>
                </div>
                <div className="menu-selection__two_column_grid">
                    <ul>
                        <li>
                            <img src="" alt="" />
                        </li>
                        <li>
                        <strong>Audio Library</strong>
                        </li>
                    </ul>
                </div>
            </section>
            <div className="aside_settings_section">
                <div className="two_column_grid">
                    <img src="" alt="" />
                    <strong>
                        <button>
                            Settings
                        </button>
                    </strong>
                </div>
                <div className="two_column_grid">
                    <img src="" alt="" />
                    <strong>
                        <button>
                            Send feedback
                        </button>
                    </strong>
                </div>
            </div>
        </aside>
    )
}