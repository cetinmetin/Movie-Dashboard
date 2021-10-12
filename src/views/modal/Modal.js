import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const MyVerticallyCenteredModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    <b>Actors:</b> {props.actors}
                </p>
                <p>
                    <b>Directors:</b> {props.director}
                </p>
                <p>
                    <b>Duration:</b> {props.duration}
                </p>
                <p>
                    <b>Genre:</b> {props.genre}
                </p>
                <p>
                    <b>Awards:</b> {props.awards}
                </p>
                <p>
                    <b>Production:</b> {props.production}
                </p>
                <p>
                    <b>Released:</b> {props.released}
                </p>
                <p>
                    <b>Imdb:</b> {props.imdb}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default MyVerticallyCenteredModal