import {useSelector} from "react-redux";

function Blog() {
    const list = useSelector(state => state.list);
    const items = list.map((obj, index) =>
        <div key={index}>
            <h2>{obj.name}</h2>
            <h3>{obj.sub}</h3>
            <p>{obj.text}</p>
        </div>
    )

    return (
        <div>
            <header>
                Blog
                {items}
            </header>
        </div>
    );
}

export default Blog;