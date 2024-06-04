interface TitleProps{
    children:string;
}
export default function Title(props:TitleProps){
    return (
        <h2 className="font-medium text-lg border-amber-500 border-l-8 pl-2 m-4">
        {props.children}
        </h2>
    );
}