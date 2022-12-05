import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'
import image4 from '../images/image4.png'

function Content() {

    return(
        <div className='content'>
        <div className='content-text'>
        <img src={image1} className='image1'/>
        <h2>Declarative</h2>
        <p>React makes it <br/> painless to create <br/> interactive UIs.</p>
        </div>

        <div className='content-text'>
        <img src={image2} className='image2'/>
        <h2>Components</h2>
        <p>React makes it <br/> painless to create <br/> interactive UIs.</p>
        </div>

        <div className='content-text'>
        <img src={image3} className='image3'/>
        <h2>Single-Way</h2>
        <p>React makes it <br/> painless to create <br/> interactive UIs.</p>
        </div>

        <div className='content-text'>
        <img src={image4} className='image4'/>
        <h2>JSX</h2>
        <p>React makes it <br/> painless to create <br/> interactive UIs.</p>
        </div>
        </div>
    )
}

export default Content