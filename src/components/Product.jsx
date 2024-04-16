function Product(props) {

    return (
        <div style={{
            border: 'solid 1px grey',
            padding: '.5rem',

        }}>
            <div>
                <img
                    src={"images/" + props.thumbnail}
                    alt={props.thumbnail}
                />
            </div>
            <p>{props.title}</p>
            <p>{props.price}</p>

            <button
                style={{
                    backgroundColor: 'white',
                    border: '1px solid grey',
                    padding: ".4rem"
                }}
            >
                ajouter au panier
            </button>

        </div>
    )
}

export default Product