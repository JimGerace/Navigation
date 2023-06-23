export const throttle = (fn: Function, wait: number) => {
    let flag = false
    return function(...args: any[]){
        if(!flag){
            flag = true
            setTimeout(() => {
                fn.apply(this, args)
                flag = false
            }, wait)
        }
    }
}