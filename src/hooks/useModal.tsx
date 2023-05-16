import { useCallback, useState } from 'react';
import { Box, Modal, Fade, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface IModalComponentProps {
  title: string;
  children: string | JSX.Element;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 1,
  boxShadow: 24,
};

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => setIsModalOpen(true), [setIsModalOpen]);

  const closeModal = useCallback(() => setIsModalOpen(false), [setIsModalOpen]);

  const ModalComponent = ({ title, children }: IModalComponentProps) => (
    <Modal
      open={isModalOpen}
      onClose={closeModal}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'>
      <Fade in={isModalOpen}>
        <Box sx={style}>
          <Box
            px={2}
            py={1}
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            borderBottom={1}
            sx={{ borderColor: 'text.secondary' }}>
            <Typography id='transition-modal-title' variant='h6' component='h2'>
              {title}
            </Typography>
            <IconButton
              color='inherit'
              aria-label='close-modal'
              onClick={closeModal}>
              <CloseIcon />
            </IconButton>
          </Box>
          {children}
        </Box>
      </Fade>
    </Modal>
  );

  return { isModalOpen, openModal, closeModal, ModalComponent };
};
