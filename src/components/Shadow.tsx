interface Props {
    children : React.ReactNode;
}

export default function Shadow(props : Props){

    return (
        <div
            style={{
                boxShadow : "3px 3px 5px #171C1C"
            }}
        >
            {props.children}
        </div>
    )
}