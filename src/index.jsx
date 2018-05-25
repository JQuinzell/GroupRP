import * as React from 'react'
import ReactDOM from 'react-dom'
import Playlist from './components/playlist'

const rooms = [
    {
        id: "21312",
        name: "Room1"
    },
    {
        id: "2112",
        name: "Room2"
    },
    {
        id: "2412",
        name: "Room3"
    }
]

const messages = [
    {
        username: "Some User",
        body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet ea est, suscipit nulla, ad fugit dolorum provident dolorem labore eos quibusdam quaerat error dignissimos ab sunt ipsa? Assumenda magni inventore doloremque expedita soluta iure tempora delectus nulla unde cupiditate officiis laudantium, voluptate qui alias! Eum nesciunt unde itaque voluptates illum?"
    },
    {
        username: "Nexus",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae officiis facilis quasi laborum sunt labore ipsum dolorem delectus a mollitia reprehenderit est asperiores nulla qui dignissimos cupiditate non aspernatur in incidunt dolor, iste aliquam iusto. Corporis sequi, voluptate corrupti eligendi nihil sint culpa totam deserunt! Quaerat voluptas veritatis sed praesentium."
    },
    {
        username: "Some User",
        body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet ea est, suscipit nulla, ad fugit dolorum provident dolorem labore eos quibusdam quaerat error dignissimos ab sunt ipsa? Assumenda magni inventore doloremque expedita soluta iure tempora delectus nulla unde cupiditate officiis laudantium, voluptate qui alias! Eum nesciunt unde itaque voluptates illum?"
    },
    {
        username: "Nobody",
        body: "hello"
    },
    {
        username: "Nobody",
        body: "hello"
    },
    {
        username: "Nobody",
        body: "hello"
    },
    {
        username: "Nobody",
        body: "hello"
    },
    {
        username: "Nobody",
        body: "hello"
    },
    {
        username: "Nobody",
        body: "hello"
    },
    {
        username: "Nobody",
        body: "hello"
    },
    {
        username: "Nobody",
        body: "hello"
    },
]

ReactDOM.render(
    <Playlist rooms={rooms} messages={messages} />,
    document.getElementById('app')
)