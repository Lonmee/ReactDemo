export const initialCount = {count: 0};

function init(initialCount: any) {
    return {count: initialCount};
}

export function counterReducer(state: { count: number; }, action: { type: any; payload: any; }) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1}
        case 'decrement':
            return {count: state.count - 1}
        case 'reset':
            return init(action.payload)
        default:
            throw new Error();
    }
}
