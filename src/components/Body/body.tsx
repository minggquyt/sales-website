import { Container, Row, Col, Button } from 'react-bootstrap';
import ServiceCard from '../ServiceCard/ServiceCard.tsx';
import ReasonCard from '../ReasonCard/ReasonCard.tsx';
import CardButton from '../CardButton/CardButton.tsx';
import './body.css';

export default function Body() {
    return (
        <Container fluid className="p-0 bg-black text-white">
            <section className="herosection position-relative overflow-hidden">
                <div className="herosection-video w-100">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster='/img/poster.png'
                        className="w-100 vh-100 object-fit-cover"
                    >
                        <source src='/video/herosection.mp4' type="video/mp4" />
                        Trình duyệt của bạn không hỗ trợ thẻ video.
                    </video>
                </div>
                <div className="herosection-description d-flex flex-column position-absolute top-50 start-50 translate-middle text-center w-100">
                    <h1 className='lexend-600 mb-3 w-100 fs-1'>Tập mãi vẫn không có kết quả?</h1>
                    <p className='lexend-400 fs-5 mb-4'>
                        Mình đã từng như bạn, và mình đã tìm ra lối thoát. Bằng việc kết hợp kiến thức
                        và lịch tập tối ưu, mình sẽ giúp bạn biến sự bế tắc thành bức phá không ngừng.
                    </p>
                    <div className='d-flex flex-column align-items-center flex-md-row justify-content-center gap-3'>
                        <Button variant="warning" size="lg" href="https://www.facebook.com/deron.david.75" className='custom-btn lexend-600'>
                            LIÊN HỆ NGAY
                        </Button>
                        <Button variant="outline-light" href='#services' size="lg">
                            XEM CÁC DỊCH VỤ HUẤN LUYỆN
                        </Button>
                    </div>
                </div>
            </section>
            <div className="section-reasons py-5 px-3">
                <h2 className="section-reasons-title mb-5 text-uppercase fw-bold fs-5">
                    Tại sao dịch vụ của mình đem lại kết quả?
                </h2>
                <Row className="g-4">
                    <ReasonCard
                        imgPath={"/img/reason-icon1.png"}
                        cardTitle={"LỘ TRÌNH TĂNG TIẾN CỤ THỂ"}
                        cardDescription={"Ngừng lãng phí thời gian với những bài tập ngẫu nhiên. Mình cung cấp lộ trình dựa trên trình độ cá nhân."}
                    />
                    <ReasonCard
                        imgPath={"/img/reason-icon2.png"}
                        cardTitle={"CHIẾN LƯỢC DINH DƯỠNG TỐI ƯU"}
                        cardDescription={"Dinh dưỡng không phải là kiêng khem, mà là nhiên liệu cho hiệu suất. Bạn sẽ có một kế hoạch ăn uống khoa học dựa trên tình trạng và mục tiêu hiện tại của mình để tối ưu hóa việc tăng tiến."}
                    />
                    <ReasonCard
                        imgPath={"/img/reason-icon3.png"}
                        cardTitle={"TỐI ƯU TẬP LUYỆN CHO TỪNG CÁ NHÂN"}
                        cardDescription={"Các giáo án đại trà thất bại vì cơ địa mỗi người là khác nhau. Mình thiết kế 1 kế hoạch tập luyện riêng biệt của bạn để điều chỉnh kỹ thuật từng chuyển động, đảm bảo hiệu suất tối đa và không có nỗ lực thừa."}
                    />
                </Row>
            </div>

            <div className="py-5 px-3">
                <h2 id='services' className="text-center mb-5 text-uppercase fw-bold fs-5">
                    Các dịch vụ Coaching
                </h2>
                <Row className="g-4">
                    <ServiceCard
                        cardTitle="HYPERTROPHY"
                        cardDesc="Huấn luyện từ xa với lộ trình toàn diện, tập trung vào tăng trưởng cơ bắp, thay đổi vóc dáng toàn diện của cơ thể."
                        cardTime="16 Tuần"
                        cardType="ONLINE"
                        cardThumbnailPath="/img/hypertrophy-thumbnail.jpg"
                    />
                    <ServiceCard
                        cardTitle="STREETLIFTING"
                        cardDesc="Huấn luyện từ xa chuyên sâu về bộ môn streetlifting với giáo án cụ thể, giám sát chặt chẽ. Tối ưu kỹ thuật với tạng người của bạn,  giúp bạn đạt được các mục tiêu mong muốn. "
                        cardTime="16 Tuần"
                        cardType="ONLINE"
                        cardThumbnailPath="/img/streetlifting-thumbnail.jpg"
                    />
                    <ServiceCard
                        cardTitle="HYPERTROPHY"
                        cardDesc="Lộ trình huấn luyện trực tiếp toàn diện, tập trung vào kỹ thuật của từng chuyển động, tăng trưởng cơ bắp, thay đổi vóc dáng toàn diện của cơ thể. Tăng tốc độ tăng tiến nhờ tập luyện trực tiếp."
                        cardTime="16 Tuần"
                        cardType="OFFLINE"
                        cardThumbnailPath="/img/hypertrophy-offline-thumbnail.jpg"
                    />
                    <ServiceCard
                        cardTitle="STREETLIFTING"
                        cardDesc="Huấn luyện chuyên sâu về bộ môn streetlifting với giáo án cụ thể, giám sát chặt chẽ. Tối ưu kỹ thuật với tạng người của bạn,  giúp bạn đạt được các mục tiêu mong muốn. "
                        cardTime="16 Tuần"
                        cardType="OFFLINE"
                        cardThumbnailPath="/img/streetlifting-offline-thumbnail.jpg"
                    />
                </Row>
            </div>
            <Col className="section-rules d-flex flex-column flex-xl-row my-5 gap-5 px-3 overflow-hidden rounded-3 position-relative">
                <Row>
                    <Col className="rules-wrapper mb-xxl-0 mb-3 p-3 align-items-center col-12 col-xxl-6">
                        <div className="rules-content">
                            <h5 className="text-warning fw-bold text-uppercase mb-4">
                                Quy tắc làm việc của dịch vụ huấn luyện trực tuyến
                            </h5>
                            <ul className="list-unstyled opacity-75 mb-4">
                                <li className="mb-2">• Học viên sẽ quay video tập và gửi cho huấn luyện viên (không gọi điện trực tiếp 1-1 trong lúc tập).</li>
                                <li className="mb-2">• Huấn luyện viên sẽ xem và đánh giá form vào cuối ngày.</li>
                                <li className="mb-2">• Huấn luyện viên sẽ nhận xét tiến độ & định hướng cho học viên vào mỗi cuối tuần.</li>
                            </ul>

                            <div className="d-flex flex-column gap-3">
                                <div className="d-flex align-items-center gap-3">
                                    <i className="bi bi-globe text-warning fs-4"></i>
                                    <span className="text-warning fw-bold text-uppercase small">Multi-timezone Check-ins</span>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <i className="bi bi-translate text-warning fs-4"></i>
                                    <span className="text-warning fw-bold text-uppercase small">English-fluent Coaching</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='d-flex col-xxl-6 col-12' >
                        <Row>
                            <Col className="position-relative">
                                <div className="service-card-wrapper  overflow-hidden position-relative d-flex align-items-center">

                                    <img src="/img/hypertrophy-thumbnail.jpg" alt="Hypertrophy" className="w-100 h-100 object-fit-cover opacity-50 position-absolute top-0 start-0" />

                                    <div className="card-content position-relative w-100 p-3 text-white z-index-1">

                                        <span className="text-warning text-uppercase fw-normal fs-6 d-block mb-3 letter-spacing-1">ONLINE</span>

                                        <h3 className="fw-bold fs-4 text-uppercase mb-2 letter-spacing-1">HYPETROPHY</h3>
                                        <h5 className="fs-5 text-uppercase mb-2 letter-spacing-1">16 Tuần</h5>

                                        <p className="lexend-400 mb-2 fw-bold fs-6 lh-base">
                                            Bạn sẽ nhận được gì ?
                                        </p>
                                        <ul className="nav list-group-numbered" >
                                            <li className="list-group-item opacity-75 mb-2">
                                                Lịch tập và dinh dưỡng cá nhân: Lịch tập và lịch ăn uống phù hợp với trình độ & mục tiêu của bạn
                                            </li>
                                            <li className="list-group-item opacity-75 mb-2">
                                                Giám sát tiến độ hàng tuần: Kiểm tra tiến độ tập luyện và điều chỉnh lịch huấn luyện kịp thời nếu bạn gặp vấn đề không theo được lịch.
                                            </li>
                                            <li className="list-group-item opacity-75 mb-2">
                                                Phân tích kỹ thuật qua video: Chỉnh sửa chuyển động chi tiết để tối ưu hóa việc cảm nhận và phát triển cơ bắp.
                                            </li>
                                        </ul>


                                        <div className="d-flex justify-content-between align-items-end mt-auto w-100">
                                            <div className="display-6 fs-4 fw-bold text-white mb-0">16 Tuần</div>

                                           <CardButton title={"LIÊN HỆ NGAY"} />
                                        </div>
                                    </div>

                                </div>
                            </Col>
                            <Col md={6} className="position-relative">
                                <div className="service-card-wrapper  overflow-hidden position-relative d-flex align-items-center">

                                    <img src="/img/streetlifting-thumbnail.jpg" alt="Streetlifting" className="w-100 h-100 object-fit-cover opacity-50 position-absolute top-0 start-0" />

                                    <div className="card-content position-relative w-100 p-3 text-white z-index-1">

                                        <span className="text-warning text-uppercase fw-normal fs-6 d-block mb-3 letter-spacing-1">ONLINE</span>

                                        <h3 className="fw-bold fs-4 text-uppercase mb-2 letter-spacing-1">STREETLIFTING</h3>
                                        <h5 className="fs-5 text-uppercase mb-2 letter-spacing-1">16 Tuần</h5>

                                        <p className="lexend-400 mb-2 fw-bold fs-6 lh-base">
                                            Bạn sẽ nhận được gì ?
                                        </p>
                                        <ul className="nav list-group-numbered" >
                                            <li className="list-group-item opacity-75 mb-2">
                                                Lịch tập và dinh dưỡng cá nhân: Lịch tập và lịch ăn uống phù hợp với trình độ & mục tiêu của bạn
                                            </li>
                                            <li className="list-group-item opacity-75 mb-2">
                                                Giám sát tiến độ hàng tuần: Kiểm tra tiến độ tập luyện và điều chỉnh lịch huấn luyện kịp thời nếu bạn gặp vấn đề không theo được lịch.
                                            </li>
                                            <li className="list-group-item opacity-75 mb-2">
                                                Phân tích kỹ thuật qua video: Chỉnh sửa chuyển động chi tiết để tối ưu hóa việc cảm nhận và phát triển cơ bắp.
                                            </li>
                                            <li className="list-group-item opacity-75 mb-2">
                                                Hỗ trợ tư vấn định hướng tập luyện: Huấn luyện không chỉ về hình thể mà bạn sẽ được trang bị cả tư duy và mindset tập luyện như 1 vận động viên. 
                                            </li>
                                        </ul>


                                        <div className="d-flex justify-content-between align-items-end mt-auto w-100">
                                            <div className="display-6 fs-4 fw-bold text-white mb-0">16 Tuần</div>

                                            <CardButton title={"LIÊN HỆ NGAY"} />
                                        </div>
                                    </div>

                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <section className="training-rules py-5 position-relative">
                <Container className='position-relative z-2'>
                    <h2 className="text-center text-white fw-bold mb-5 text-uppercase">
                        Quy tắc huấn luyện
                    </h2>

                    <Row className="g-4 row-cols-1 row-cols-md-2 row-cols-xl-4">

                        <Col>
                            <div className="rule-item">
                                <div className="d-flex align-items-center mb-3">
                                    <i className="bi bi-person-check text-warning fs-5"></i>
                                    <h6 className="text-warning fw-bold mb-0 text-uppercase">Dựa trên trình độ học viên</h6>
                                </div>
                                <p className="text-light-50 small opacity-75">
                                    Mọi sự thay đổi về lịch tập / ăn đều được cân nhắc và dựa trên thể trạng và điều kiện của học viên. Huấn luyện viên sẽ luôn dựa trên tiến độ theo từng tuần để điều chỉnh lịch tập / ăn theo thời gian thực.
                                </p>
                            </div>
                        </Col>

                        <Col>
                            <div className="rule-item">
                                <div className="d-flex align-items-center mb-3">
                                    <i className="bi bi-shield-check text-warning fs-5"></i>
                                    <h6 className="text-warning fw-bold mb-0 text-uppercase">Làm chủ kỹ thuật</h6>
                                </div>
                                <p className="text-light-50 small opacity-75">
                                    Kỹ thuật là nền móng của sức mạnh. Thông qua việc phân tích kỹ thuật, học viên sẽ được hướng dẫn làm chủ từng chuyển động nhỏ nhất để tối ưu hóa áp lực lên cơ bắp / tối ưu kỹ thuật cho mức tạ.
                                </p>
                            </div>
                        </Col>

                        <Col>
                            <div className="rule-item">
                                <div className="d-flex align-items-center mb-3">
                                    <i className="bi bi-person-lines-fill text-warning fs-5"></i>
                                    <h6 className="text-warning fw-bold mb-0 text-uppercase">Cá nhân hóa lộ trình</h6>
                                </div>
                                <p className="text-light-50 small opacity-75">
                                    Không có giáo án nào dành cho tất cả mọi người. Lộ trình của học viên được thiết kế riêng dựa trên lịch sử tập luyện, cấu trúc cơ thể, lịch sử chấn thương và mục tiêu cụ thể.
                                </p>
                            </div>
                        </Col>

                        <Col>
                            <div className="rule-item">
                                <div className="d-flex align-items-center mb-3">
                                    <i className="bi bi-chat-dots text-warning fs-5"></i>
                                    <h6 className="text-warning fw-bold mb-0 text-uppercase">Tư vấn định hướng</h6>
                                </div>
                                <p className="text-light-50 small opacity-75">
                                    Trước khi bắt đầu, chúng ta sẽ có buổi phỏng vấn 15 phút để đảm bảo sự tương thích về tư duy. Tôi chỉ nhận những cá nhân có khao khát thay đổi thực sự và cam kết đi hết hành trình.
                                </p>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
        </Container>
    )
}