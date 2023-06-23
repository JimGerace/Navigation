export const throttle = (fn: Function, wait: number) => {
    let flag = false
    const _this = this
    return function(...args: any[]){
        if(!flag){
            flag = true
            setTimeout(() => {
                fn.apply(_this, args)
                flag = false
            }, wait)
        }
    }
}