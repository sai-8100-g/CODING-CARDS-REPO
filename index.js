const element = (
  //   Write your code here.
  <div className='main-container'>
    <div className='content-container'>
      <div>
        <h1 className='heading'>Super Over League</h1>
      </div>
      <div className='image-container'>
        <div className='rcb-img-cont'>
          <img src='https://assets.ccbp.in/frontend/react-js/rcb-img.png' />
        </div>
        <div className='csk-img-cont'>
          <img src='https://assets.ccbp.in/frontend/react-js/csk-img.png' />
        </div>
      </div>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
