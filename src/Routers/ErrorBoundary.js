import cloud from '../components/svg/cloud.svg'
const ErrorBoundary = () => {
    return (
        <div className="w-9/12 mx-auto py-10 h-screen flex flex-col justify-center items-center text-center">
            <img src={cloud} alt="off" className='w-10 h-10'/>
            <h2>Connect to the internet</h2>
            <p>You're offline. Check your connection.</p>
        </div>
    )
}
export default ErrorBoundary;