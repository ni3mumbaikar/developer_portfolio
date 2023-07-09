import './maincomponent.css'
import Logo from '../../assets/nitin-transformed.png'

function MainComponent() {
    return (
        <div className="flex justify-content-center md:pr-8">
            <img src={Logo} className="mt-8 h-25rem w-25rem border-1 border-circle md:ml-auto" />
        </div>
    )
}

export default MainComponent;