const Button = props => {
  const {name, className} = props
  return <button className={className}>{name}</button>
}

const element = (
  <div className='main-container'>
    <div className="heading-container">
      <h1>Social Buttons</h1>
    </div>
    <div className='buttons-conatiner'>
      <div>
        <Button name='Like' className='like' />
      </div>
      <div>
        <Button name='Comment' className='comment' />
      </div>
      <div>
        <Button name='Share' className='share' />
      </div>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
