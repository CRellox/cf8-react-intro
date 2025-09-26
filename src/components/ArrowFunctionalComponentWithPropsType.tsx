// type PropA = {
//     title: string;
// }
//
// type PropB = {
//     description: string;
// }
//
// type Props = PropA & PropB;

interface Props {
    title: string;
}

interface Props {
    description: string;
}

const ArrowFunctionalComponentWithProps =({title, description}: Props) => {
    return (
        <>
            <h1 className="text-xl text-center font-bold mt-12">{title}</h1>
            <p className="text-center text-gray-700">{description}</p>
        </>
    )
}

export default ArrowFunctionalComponentWithProps;