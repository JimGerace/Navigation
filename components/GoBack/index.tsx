'use client'

import Image from "next/image"
import './index.scss'
import { throttle } from "@/utils/tools"
import { useEffect, useRef, useState } from "react"

export default function GoBack(){
    const DOM = useRef<Element|null>(null)
    const [showBack, setShowBack] = useState<boolean>(false)

    useEffect(() => {
        DOM.current = document.querySelector('body')
        watchScrollTop()

        return () => {
            (DOM.current as Element).removeEventListener('scroll', handlThrottle)
        }
    }, [])

    // 监听滚动条
    const watchScrollTop = () => {
        (DOM.current as Element).addEventListener('scroll', handlThrottle)
    }

    // 点击回到顶部
    const toBackTop = () => {
        (DOM.current as Element).scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const handleScroll = (e: any) => {
        let isShow = showBack
        if(e.target.scrollTop > 80 + 100){
            isShow = true
        }else{
            isShow = false
        }

        setShowBack(isShow)
    }

    const handlThrottle = throttle(handleScroll, 500)

    return (
        <div className={showBack ? 'go_back active': 'go_back'} onClick={toBackTop}>
            <Image src='/images/icon_back.png' width={40} height={40} alt=""></Image>
        </div>
    )
}