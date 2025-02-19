import Link from "next/link";

export default function Header(){
  return(
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <ul className="flex gap-4">
          <li>
            <Link href={'/sign-in'}>Sign In</Link>
          </li>
          <li className="hidden sm:block">
            <Link href={'/'}>Home</Link>
          </li>
          <li className="hidden sm:block">
            <Link href={'/about'}>About</Link>
          </li>
      </ul>
      <Link href={'/'}>
         <span className="text-2xl font-bold bg-red-500 py-1 px-2 rounded-lg">MOVIE</span>
        <span className="text-2xl font-bold bg-red-500 py-1 px-2 rounded-lg">APP</span>
      </Link>
    </div>
  )
}
