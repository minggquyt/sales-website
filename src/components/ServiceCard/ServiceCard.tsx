import { Col, Button } from 'react-bootstrap';
import CardButton from '../CardButton/CardButton';
import './ServiceCard.css'

export default function ServiceCard({cardTitle, cardDesc, cardTime, cardType, cardThumbnailPath}) {
    return (
            <Col  md={6} xxl={3} className="position-relative">
                <div className="service-card-wrapper  overflow-hidden position-relative d-flex align-items-center">

                    <img src={cardThumbnailPath} alt="Hypertrophy" className="w-100 h-100 object-fit-cover opacity-50 position-absolute top-0 start-0" />

                    <div className="card-content position-relative w-100 p-3 text-white z-index-1">

                        <span className="text-warning text-uppercase fw-normal fs-6 d-block mb-3 letter-spacing-1">{cardType}</span>

                        <h3 className="fw-bold fs-5 text-uppercase mb-2 letter-spacing-1">{cardTitle}</h3>

                        <p className="card-desc-collapsible lexend-400 text-white mb-5 opacity-75 fs-6 lh-base" style={{ maxWidth: '80%' }}>
                            {cardDesc}
                        </p>

                        <div className="d-flex justify-content-between align-items-end mt-auto w-100">
                            <div className="display-6 fs-5 fw-bold text-white mb-0">{cardTime}</div>

                            <CardButton title={"LIÊN HỆ NGAY"} />
                        </div>
                    </div>

                </div>
            </Col>
    )
}