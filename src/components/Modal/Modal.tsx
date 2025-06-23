import { useEffect, useState, useRef, type ReactNode } from 'react';
import { Modal as BootstrapModal } from 'bootstrap';

interface ModalProps {
    opened: boolean;
    onClose: () => void;
    title?: string;
    children: ReactNode;
}

export function Modal({ opened, onClose, title, children }: ModalProps) {
    const [modalInstance, setModalInstance] = useState<BootstrapModal | null>(null);
    const modalRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (modalInstance) {
            if (opened) {
                modalInstance.show();
            } else {
                modalInstance.hide();
            }
        }
    }, [opened, modalInstance]);

    useEffect(() => {
        if (modalRef.current) {
            const modal = BootstrapModal.getOrCreateInstance(modalRef.current);
            setModalInstance(modal);
        }
    }, [modalRef]);

    useEffect(() => {
        const currentModalRef = modalRef.current;
        if (currentModalRef) {
            const handleClose = () => onClose();
            currentModalRef.addEventListener('hidden.bs.modal', handleClose);

            return () => {
                currentModalRef.removeEventListener('hidden.bs.modal', handleClose);
            };
        }
    }, [modalRef, onClose]);

    return (
        <div className="modal" tabIndex={-1} ref={modalRef}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}