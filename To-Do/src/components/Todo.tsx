interface Props {
    task: string
}

export default function Todo({task}: Props){
    return (
        <>
        test {task}
        </>
    )
}