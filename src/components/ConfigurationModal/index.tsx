import React, { useState } from 'react'
import { Form, Button, Modal, Alert } from 'react-bootstrap';

import SeaWorldContext from '../../context/SeaWorldContext';
interface IConfigurationModalProps {
    handleChangeGrid: (x: number, y: string) => void;
    handleConfigurationVisible: () => void;
    handleSetSeaWordElements: () => void;
}


const ConfigurationModal = ({ handleChangeGrid, handleConfigurationVisible, handleSetSeaWordElements }: IConfigurationModalProps) => {
    const [error, seterror] = useState(false)

    const handleChangeSpace = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const evtValue = Number(evt && evt.target.value);
        const evtName = evt && evt.target.name;
        handleChangeGrid(evtValue, evtName);
    }

    return <SeaWorldContext.Consumer>
        {
            ({ isConfigurationModalVisible, seaWorldSpace }) => {
                const handleValidateForm = () => {
                    const isInvalidWidth = seaWorldSpace && seaWorldSpace.width <= 0;
                    const isInvalidHeigth = seaWorldSpace && seaWorldSpace.height <= 0;
                    if (isInvalidWidth || isInvalidHeigth) {
                        seterror(true);
                        return;
                    }
                    seterror(false);
                    handleSetSeaWordElements();
                }
                return (
                    <Modal
                        show={isConfigurationModalVisible}
                        onHide={handleConfigurationVisible}
                        aria-labelledby="example-custom-modal-styling-title"
                    >
                        <Modal.Header closeButton onHide={handleConfigurationVisible} >
                            <Modal.Title>
                                Please, set the Sea world space
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group controlId="formWidth">
                                    <Form.Label>Width</Form.Label>
                                    <Form.Control data-testid={'input-text-width'} name={"width"} type="number" value={seaWorldSpace && seaWorldSpace.width} placeholder="Enter Width" onChange={handleChangeSpace} />
                                    <Form.Text className="text-muted">
                                    Please, set the number of horizontal cells
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formHeight">
                                    <Form.Label>Heigth</Form.Label>
                                    <Form.Control data-testid={'input-text-height'}  name={"height"} type="number" value={seaWorldSpace && seaWorldSpace.height} placeholder="Enter Height" onChange={handleChangeSpace} />
                                    <Form.Text className="text-muted">
                                    Please, set the number of vertical cells
                                    </Form.Text>
                                </Form.Group>
                                {error && <Form.Group controlId="formValidation">
                                    <Alert variant={'danger'}>
                                        Please, verify data width or height can not be negative or 0
                                    </Alert>
                                </Form.Group>
                                }
                                <Button variant="primary" type="button" onClick={handleValidateForm}>
                                    Create Sea World
                                </Button>
                            </Form>
                        </Modal.Body>
                    </Modal>
                )
            }
        }
    </SeaWorldContext.Consumer>
}

export default ConfigurationModal
