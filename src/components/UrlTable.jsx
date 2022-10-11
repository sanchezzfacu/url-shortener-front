import { useEffect } from "react"

function UrlTable({urlInfo}) {
    
    useEffect(() => {

    }, [urlInfo])

    return (
        <table>
            <thead>
                <tr>
                    <th>Full Url</th>
                    <th>Short Version</th>
                    <th>Clicked:</th>
                </tr>
            </thead>
            <tbody>
                { urlInfo?.map(el => {
                    return (
                        <tr key={el._id}>
                            <td><a href={el.fullUrlVersion}>{el.fullUrlVersion}</a></td>
                            <td><a href={el.shortUrlVersion}>{el.shortUrlVersion}</a></td>
                            <td><h2>{el.clicks}</h2></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default UrlTable
