export const metadata = {
    title : "Marketing Page"
}

export default function MarketingLayout({children}){
    return(
        <html>
            <body>
                <header>
                    <p>Header~~</p>
                </header>
                {children}

                <footer>
                    <p>Footer ~~</p>
                </footer>
            </body>
        </html>
    )
}