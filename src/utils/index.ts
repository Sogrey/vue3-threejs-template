
export default {
    
    merge(options: any, defaultOPtions = {}) {
        // 第一个参数是目标对象（可以是空对象 {}，避免修改原对象）
        const merged = Object.assign({}, defaultOPtions, options);

        return merged
    }


}