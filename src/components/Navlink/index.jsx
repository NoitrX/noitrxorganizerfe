import { Nav } from "react-bootstrap"

export default function SNavlink({ action, children }) {
    return (
        <Nav.Link onClick={action}>{children}</Nav.Link>
    )
}
