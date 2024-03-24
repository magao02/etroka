import React, { useState, useRef, useEffect } from 'react';
import { Container, InputTextArea, FilesIcon, SendTextIcon } from './styles';

const SendMessage: React.FC = () => {
  const [message, setMessage] = useState('');
  const inputTextAreaRef = useRef<HTMLTextAreaElement>(null);
  const inputFileRef = useRef<HTMLInputElement>(null);
  const placeholderText = 'Digite sua mensagem...';

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  useEffect(() => {
    if (inputTextAreaRef.current) {
      inputTextAreaRef.current.style.height = '1px';
      inputTextAreaRef.current.style.height = `${inputTextAreaRef.current.scrollHeight}px`;
    }
  }, [message]);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();

      // Lógica de envio da mensagem aqui
      console.log('Mensagem enviada:', message);
      setMessage('');
    }
  };

  // Função para simular o clique no input de arquivo ao clicar no ícone
  const handleAttachmentClick = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  };

  // Função para tratar a seleção de arquivo
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      // Adicionar lógica para enviar a foto selecionada aqui
      const file = event.target.files[0];
      console.log('Arquivo selecionado:', file);
    }
  };

  // Função para enviar a mensagem, precisa ser ajustada
  const sendMessage = () => {
    if (message.trim() !== '') {
      console.log('Mensagem enviada:', message);
      setMessage('');
    }
  };

  // Função para tratar o clique no ícone de enviar
  const handleSendClick = () => {
    sendMessage();
  };

  return (
    <Container>
        <FilesIcon onClick={handleAttachmentClick} />
              <input
                type="file"
                ref={inputFileRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
        />
        <InputTextArea
            value={message}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            placeholder={placeholderText}
            ref={inputTextAreaRef}
          />
        <SendTextIcon onClick={handleSendClick} />
    </Container>
  );
};

export default SendMessage;
