'use client'
import { useEffect, useState } from 'react'
import './index.scss'
import Image from "next/image"

export default function NavLeft(props:any){
    const {navResult} = props
    const [activeNav, setActiveNav] = useState<string>('')

    useEffect(() => {
        init()
    }, [])

    // 初始化数据
    const init = () => {
        let className: string|null = window.sessionStorage.getItem('nav')
        if(className){
            setActiveNav(className.replace('.nav_', ''))
            handleScroll(className)
        }else{
            setActiveNav(navResult[0].id)
        }
    }

    // 切换导航栏
    const changeNavActive = (id: string) => {
        setActiveNav(id)
        let className:string = `.nav_${id}`
        window.sessionStorage.setItem('nav', className)
        handleScroll(className)
    }

    // 调整滚动条
    const handleScroll = (className: string) => {
        let DOM: Element = document.querySelector(className) as Element
        let BODY: Element = document.querySelector('body') as Element
        
        let top:number = DOM?.getBoundingClientRect().top + BODY?.scrollTop - 80

        BODY.scrollTo({
            top,
            behavior: 'smooth'
        })
    }

    return (
        <div className='nav_left'>
            <div className="nav_title">Web Nav</div>

            {
                navResult.map((item: any) => {
                    return (
                        <div className={activeNav === item.id ? 'nav_item active': 'nav_item'} key={item.id} onClick={() => changeNavActive(item.id)}>
                            <Image src={'/images/' + item.icon + '.png'} width={20} height={20} alt=""></Image>
                            <span className='nav_name'>{item.title}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}