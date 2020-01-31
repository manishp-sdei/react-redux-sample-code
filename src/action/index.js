export function catc()
{
    return {
        type: 'FIRST',
        payload: "my data"
    };
}

export function caller(data) {
    console.log('*************',data);
    return function (dispatch) {
        dispatch(catc());
    }
}
