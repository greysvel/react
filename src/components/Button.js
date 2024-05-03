
function Button(props){
    console.log(props);
        return(
        <button
            type='button'
            className='btn btn-success'
            onClick={ props.fn}
        >{props.operador}</button>
    );

}
export {Button};

function ButtonNumeros(props){
    console.log(props);
        return(
        <button
            type='button'
            className='btn btn-primary'
            onClick={ props.fn}
        >{props.valores}</button>
    );

}
export {ButtonNumeros};