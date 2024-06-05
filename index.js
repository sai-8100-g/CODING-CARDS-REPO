const element = (
 

  <div className='main-container'>
    <div className='content-container'>
      <h1>Congratulations</h1>
      <div className='profile-container'>
        <div>
          <img src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png' />
          <p className="name">Sai Kumar</p>
        </div>
        <p>Congratulations you to Sucessfully completing the bootcamp</p>
        <div>
          <img src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png' />
        </div>
      </div>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
