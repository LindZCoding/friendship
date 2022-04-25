import '../Clips.css'

const Clips = () => {
    return (
        <div>
            <h1>Clips: </h1>
            <video className="clip" width='600' height='350' controls>
                <source src='/Comp.mp4' type="video/mp4" />
            </video>
        </div>
    )
}

export default Clips;