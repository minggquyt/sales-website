import { Button } from 'react-bootstrap';
import './CardButton.css';

export default function CardButton({title}) {
    return (
        <Button variant="outline-light" className="custom-btn-outline px-4 py-2 text-uppercase fw-light" style={{ textTransform: 'none' }}>
            <a href='https://www.facebook.com/deron.david.75' className="fw-light">{title}</a>
        </Button>
    )
}