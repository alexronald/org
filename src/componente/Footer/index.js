import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.facebook.com/profile.php?id=100086531473650'>
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://alexandrade.click/'>
                <img src="/img/twitter.png" alt='twitter' />
            </a>
            <a href='https://www.instagram.com/alexandrade.click/'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src="https://avatars.githubusercontent.com/u/38338464?v=4"alt='alex' />
        <strong>Desarrollado por Alex Andrade </strong>
    </footer>
}

export default Footer