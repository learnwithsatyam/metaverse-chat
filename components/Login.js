import Image from "next/image"
import { useMoralis } from "react-moralis"
function Login() {
    const {authenticate} = useMoralis()
  return (
    <div className='bg-black relative text-white'>
        Login
        <div className="flex flex-col absolute z-50 h-4/6 items-center justify-center w-full space-y-4">
            {/** your logo */}
            <Image 
                className="object-cover rounded-full"
                src="/my_logo_photo.png"
                height={200}
                width={200}
            />
            {/** login button */}
            <button onClick={authenticate} className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse">Login To Metaverse</button>
            <p className="text-white bg-black rounded-full border-white border-2 p-4"> You will NEED any crypto wallet to login. Metamask is preffered. </p>
        </div>
        <div className="w-full h-screen">
            {/** Login Form */}
            <Image 
                src = "https://links.papareact.com/55n"
                layout="fill"
                objectFit="cover"
            />
        </div>
    </div>
  )
}
export default Login