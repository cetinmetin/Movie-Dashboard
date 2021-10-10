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
                    <b>Actors:</b> {props.Actors}
                </p>
                <p>
                    <b>Directors:</b> {props.Directors}
                </p>
                <p>
                    <b>Duration:</b> {props.Duration}
                </p>
                <p>
                    <b>Genre:</b> {props.Genre}
                </p>
                <p>
                    <b>Awards:</b> {props.Awards}
                </p>
                <p>
                    <b>Production:</b> {props.Production}
                </p>
                <p>
                    <b>Released:</b> {props.Released}
                </p>
                <p>
                    <b>Imdb:</b> {props.imdbRating}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default MyVerticallyCenteredModal