import { Col } from 'react-bootstrap';

export default function ReasonCard({CardTitle, cardDescription, imgPath}) {
    return (
        <Col    lg={4}>
            <div className="reason-card p-3 h-100  bg-dark bg-opacity-50">
                <div className='d-flex align-items-center gap-3'>
                    <div className='overflow-hidden'>
                        <img src={imgPath} className='object-fit-cover' width={"20px"} alt="" />
                    </div>
                    <h4 className="fw-bold text-white fs-5">{CardTitle}</h4>
                </div>
                <p className="text-white opacity-75 fs-6">{cardDescription}</p>
            </div>
        </Col>
    )
}