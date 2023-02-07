
export default function Paws(){

    const number = 24;
    let paws = [];

    for (let index = 1; index < number; index++) {
        paws.push(<i className={`-zindex-1 fa-solid fa-paw fa-3x paw-${index}`} key={index}></i>);
      }

    return (
    <>
    {paws}
    </>
    );
   
}