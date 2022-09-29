import { useSelector } from "react-redux"

export const useCounter = () => {
    const count = useSelector(state => state.count);
    const actions = useActions({ increment, decrement, set})

    return { count, ...actions };
}