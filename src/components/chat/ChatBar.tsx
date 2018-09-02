import * as React from 'react'
import './styles/ChatBar.scss'

interface Message {
    body: string
    username: string
}

type TabName = string

interface Props {
    tabs: Map<TabName, Message[]>
    selectedTab: TabName
    selectTab: (tab: TabName) => void
    sendMessage: (message: string) => void
}

interface State {
    message: string
}

export default class ChatBar extends React.Component<Props, State> {
    state = {
        message: '',
    }

    chatboxRef = React.createRef<HTMLDivElement>()

    handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            this.handleSubmit()
        }
    }

    handleChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
        this.setState({
            message: e.currentTarget.value
        })
    }

    handleSubmit = () => {
        const message = this.state.message
        this.setState({ message: '' })
        this.props.sendMessage(message)
    }

    moveScrollBarToBottom = () => {
        this.chatboxRef.current.scrollTop = this.chatboxRef.current.scrollHeight
    }

    componentDidMount() {
        this.moveScrollBarToBottom()
    }

    componentDidUpdate() {
        this.moveScrollBarToBottom()
    }

    render() {
        const tabs = Array.from(this.props.tabs.keys())
        const selectedMessages = this.props.tabs.get(this.props.selectedTab) || []

        return (
            <div className="ChatBar">
                <div className="tabs">
                {
                    tabs.map(name => (
                        <div className={name === this.props.selectedTab ? 'selected tab' : 'tab'} 
                             onClick={() => this.props.selectTab(name)} 
                             key={name}>
                            {name}
                        </div>
                    ))
                }
                </div>
                <div ref={this.chatboxRef} className="messages">
                    {selectedMessages.map((msg, i) => (
                        <div key={i} className="message">
                            <span className="username">{msg.username}:</span>
                            {msg.body}
                        </div>
                    ))}
                </div>
                <textarea value={this.state.message} placeholder="Type here ..." onKeyDown={this.handleKeyDown} onChange={this.handleChange}/>
            </div>
        )
    }
}
