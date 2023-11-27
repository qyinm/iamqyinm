import Image from "next/image"

const Logo = () => {
    return <Image 
    src={'/favicon.svg'} 
    height={40}
    width={40}
    />
}

export default Logo