const Notification = props => {
  const {className, content, src} = props

  return (
    <div className={className}>
      <img src={src} />
      <p>{content}</p>
    </div>
  )
}

const element = (
  <div className='main-container'>
    <div className='content-container'>
      <h1>Notifications</h1>
      <Notification
        className='primary'
        content='Information Message'
        src='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
      />
      <Notification
        className='success'
        content='Success Message'
        src='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
      />
      <Notification
        className='warning'
        content='Warning Message'
        src='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
      />
      <Notification
        className='danger'
        content='Error Message'
        src='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
