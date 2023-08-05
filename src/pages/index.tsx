import { useEffect, useRef, useState } from "react";

const Searchinput = () => {
}




const Menu = (props) => {
    const { children, items } = props
    const [isOpened, setIsOpened] = useState(false)
    return (
        <div className="">
            <button className="w-full flex items-center justify-between text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150"
                onClick={() => setIsOpened(!isOpened)}
            >
                <div className="flex items-center gap-x-2">
                    {children}
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-5 h-5 duration-150 ${isOpened ? 'rotate-180' : ''}`}>
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
            </button>
            {
                isOpened ? (
                    <ul className="mx-4 px-2 border-l text-sm font-medium">
                        {
                            items.map((item, idx) => (
                                <li key={idx}>
                                    <a href={item.href} className="flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150">
                                        {
                                            item.icon ? (
                                                <div className="text-gray-500">{item.icon}</div>
                                            ) : ""
                                        }
                                        {item.name}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                ) : ""
            }
        </div>
    )
}

const Sidebar = () => {

    const navigation = [

        
        {
            href: 'javascript:void(0)',
            //name: 'DisabledButton',
            icon: (
                <button className="px-12 py-2 text-cyan-700 border border-white rounded-l-lg rounded-r-full duration-100 hover:border-cyan-700 active:shadow-lg">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 inline-block mr-2"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
  </svg>
  Anasayfa
</button>
            ),
          },

        {
            href: 'javascript:void(0)',
            //name: 'DisabledButton',
            icon: (
                <button className="px-12 py-2 text-cyan-700 border border-white rounded-l-lg rounded-r-full duration-100 hover:border-cyan-700 active:shadow-lg">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 inline-block mr-2"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
  </svg>
  Derslerim
</button>
            ),
          },

      {
        href: 'javascript:void(0)',
        //name: 'ActiveButton',
        icon: (
          <button className="px-12 py-2 flex items-center gap-2 text-white bg-cyan-700 rounded-l-lg rounded-r-full duration-150 hover:bg-cyan-700 active:shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
            </svg>
            Sınavlarım
          </button>
        ),
      },

      {
        href: 'javascript:void(0)',
        //name: 'DisabledButton',
        icon: (
            <button className="px-12 py-2 text-cyan-700 border border-white rounded-l-lg rounded-r-full duration-100 hover:border-cyan-700 active:shadow-lg">
<svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
strokeWidth={1.5}
stroke="currentColor"
className="w-5 h-5 inline-block mr-2"
>
<path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
</svg>
Ödevlerim
</button>
        ),
      },

      {
        href: 'javascript:void(0)',
        //name: 'DisabledButton',
        icon: (
            <button className="px-12 py-2 text-cyan-700 border border-white rounded-l-lg rounded-r-full duration-100 hover:border-cyan-700 active:shadow-lg">
<svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
strokeWidth={1.5}
stroke="currentColor"
className="w-5 h-5 inline-block mr-2"
>
<path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
</svg>
Öğrenciler
</button>
        ),
      },

      {
        href: 'javascript:void(0)',
        //name: 'DisabledButton',
        icon: (
            <button className="px-12 py-2 text-cyan-700 border border-white rounded-l-lg rounded-r-full duration-100 hover:border-cyan-700 active:shadow-lg">
<svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
strokeWidth={1.5}
stroke="currentColor"
className="w-5 h-5 inline-block mr-2"
>
<path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
</svg>
Kurslarım
</button>
        ),
      },

      {
        href: 'javascript:void(0)',
        //name: 'DisabledButton',
        icon: (
            <button className="px-12 py-2 text-cyan-700 border border-white rounded-l-lg rounded-r-full duration-100 hover:border-cyan-700 active:shadow-lg">
<svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
strokeWidth={1.5}
stroke="currentColor"
className="w-5 h-5 inline-block mr-2"
>
<path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
</svg>
Devamsızlık
</button>
        ),
      },

      {
        href: 'javascript:void(0)',
        //name: 'DisabledButton',
        icon: (
            <button className="px-12 py-2 text-cyan-700 border border-white rounded-l-lg rounded-r-full duration-100 hover:border-cyan-700 active:shadow-lg">
<svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
strokeWidth={1.5}
stroke="currentColor"
className="w-5 h-5 inline-block mr-2"
>
<path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
</svg>
Görevler
</button>
        ),
      },

      {
        href: 'javascript:void(0)',
        //name: 'DisabledButton',
        icon: (
            <button className="px-12 py-2 text-cyan-700 border border-white rounded-l-lg rounded-r-full duration-100 hover:border-cyan-700 active:shadow-lg">
<svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
strokeWidth={1.5}
stroke="currentColor"
className="w-5 h-5 inline-block mr-2"
>
<path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
</svg>
Not giriş
</button>
        ),
      },

      {
        href: 'javascript:void(0)',
        //name: 'DisabledButton',
        icon: (
            <button className="px-12 py-2 text-cyan-700 border border-white rounded-l-lg rounded-r-full duration-100 hover:border-cyan-700 active:shadow-lg">
<svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
strokeWidth={1.5}
stroke="currentColor"
className="w-5 h-5 inline-block mr-2"
>
<path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
</svg>
Aferin Modül
</button>
        ),
      },
    ]

    const navsFooter = [
        
    ]

    const nestedNavOne = [{ name: "Item1", href: "javascript:void(0)", icon: "" }, { name: "Item2", href: "javascript:void(0)", icon: "" }, { name: "Item3", href: "javascript:void(0)", icon: "" }, { name: "Item4", href: "javascript:void(0)", icon: "" }]
    const nestedNavTwo = [{ name: "Item1", href: "javascript:void(0)", icon: "" }, { name: "Item2", href: "javascript:void(0)", icon: "" }, { name: "Item3", href: "javascript:void(0)", icon: "" }, { name: "Item4", href: "javascript:void(0)", icon: "" }]

    const profileRef = useRef()

    const [isProfileActive, setIsProfileActive] = useState(false)

    useEffect(() => {
        const handleProfile = (e) => {
            if (profileRef.current && !profileRef.current.contains(e.target)) setIsProfileActive(false)
        }
        document.addEventListener('click', handleProfile)
    }, [])

    return (
        <>
            <nav
                className="fixed top-0 left-0 w-full h-full border-r bg-white space-y-8 sm:w-80">
                  
                <div class="flex flex-col h-full px-4">
                
                <div className="flex flex-col items-center">
                <img src="https://t3.ftcdn.net/jpg/04/91/71/52/360_F_491715288_s6Lm6mhNUFIpZldYH5uJZfs3lT399ZEv.webp" className="w-26 h-17 rounded-full mb-2" />
                <div className="relative">
  <img src="https://randomuser.me/api/portraits/women/79.jpg" className="w-16 h-16 rounded-full mb-2" />
  <div className="absolute inset-0 w-16 h-16 rounded-full border-4 border-solid border-cyan-700/40"></div>
</div>

                  <div className="text-center">
                      <span className="block text-gray-700 text-sm font-semibold">Ayşe Beyza Öztürk</span>
                      <span className="block mt-px text-gray-600 text-xs">Fen Bilimleri ve Teknoloji</span>
                      <ul className="mt-2 space-y-2">
                      <li className="px-12 py-2 flex items-center gap-2 text-white bg-cyan-700 rounded-xl duration-150 hover:bg-cyan-700 active:shadow-lg">
  <Menu items={nestedNavOne}>
    <span className="text-white">2023-2024</span>
  </Menu>
</li>
<li className="px-12 py-2 flex items-center gap-2 text-white bg-cyan-700 rounded-xl duration-150 hover:bg-cyan-700 active:shadow-lg">
  <Menu items={nestedNavTwo}>
    <span className="text-white">Kurum Seç</span>
  </Menu>
</li>
  </ul>
                  </div>

                   
                </div>

                    <div className="overflow-auto">
                        <ul className="text-sm font-medium flex-1">
                            {
                                navigation.map((item, idx) => (
                                    <li key={idx}>
                                        <a href={item.href} className="flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150">
                                            <div className="text-gray-500">{item.icon}</div>
                                            {item.name}
                                        </a>
                                    </li>
                                ))
                            }
                            
                        </ul>
                        <div className="pt-2 mt-2 border-t">
                            <ul className="text-sm font-medium">
                                {
                                    navsFooter.map((item, idx) => (
                                        <li key={idx}>
                                            <a href={item.href} className="flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150">
                                                <div className="text-gray-500">{item.icon}</div>
                                                {item.name}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div >
                </div>
            </nav>
        </>
    );
};





export default Sidebar;

