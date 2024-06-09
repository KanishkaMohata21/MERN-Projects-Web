import { useEffect, useState } from "react";

export default function LoadMore() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [disable, setDisable] = useState(false);

    async function fetchImages() {
        try {
            setLoading(true);

            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
            const data = await response.json();

            if (Array.isArray(data)) {
                setImages((prevImages) => [...prevImages, ...data]);
            } else if (data && data.products) {
                setImages((prevImages) => [...prevImages, ...data.products]);
            }

            setLoading(false);
            console.log(data);

        } catch (e) {
            setErrorMsg(e.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchImages();
    }, [count]);

    function handleLoadMore() {
        setCount((prevCount) => prevCount + 1);
    }

    useEffect(() => {
        if (images && images.length === 100) {
            setDisable(true);
        } else {
            setDisable(false);
        }
    }, [images]); 

    return (
        <div className="loadMoreContainer">
            {images.map((item) => (
                <div key={item.id} className="product">
                    <img src={item.thumbnail} alt={item.title} height={200} width={200} />
                    <p>{item.title}</p>
                </div>
            ))}
            {loading && <div>Loading...</div>}
            {errorMsg && <div>Error: {errorMsg}</div>}
            {!loading && (
                <div className="btn" disabled={disable} onClick={handleLoadMore}>
                    Load more
                </div>
            )}
            {disable && <p>No products left</p>}
        </div>
    );
}
